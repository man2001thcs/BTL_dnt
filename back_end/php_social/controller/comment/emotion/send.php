<?php
require_once '../../../config/const.php';
require_once '../../../config/database.php';
require_once '../../../lib/Helper.php';
require_once '../../../model/User.php';
require_once '../../../model/Comment.php';
require_once '../../../model/Log_temp.php';
require_once '../../../model/Notification.php';
require_once '../../../model/Emotion_comment_list.php';

if (!isset($user)) {
    $user = new User();
}

//if (!$user->isLoggedIn() || !$user->isAdmin()) {
//    Helper::redirect_err();
//}

$comment = new Comment();
$notification = new Notification();
$emotion_comment_list = new Emotion_comment_list();
$emo_list = ["none", "like_list", "dislike_list", "love_list", "hate_list"];

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW comment data.
    $content = trim(file_get_contents("php://input"));

    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $comment_id = $decoded['comment_id'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            //echo("id: " . $decoded['id']);
            $comment_data = $comment->findById($decoded['comment_id']);
            $oldEmoState = intval($decoded['oldEmotionState']);
            echo ("oldEmoState: " . $oldEmoState);
            $newEmoState = intval($decoded['emotionState']);
            echo ("newEmoState: " . $newEmoState);

            $emotion_comment_list_data = $emotion_comment_list->findByCommentId($decoded['comment_id']);
            echo json_encode($emotion_comment_list_data);

            $user_id = $user->get_id($decoded['emailS'])['id'];

            echo ("user_id: " . $user_id);
            //like
            if ($decoded['emotionState'] == 1) {
                $this_list = "like_list";

            } else if ($decoded['emotionState'] == 2) {
                $this_list = "dislike_list";

            } else if ($decoded['emotionState'] == 3) {
                $this_list = "love_list";

            } else if ($decoded['emotionState'] == 4) {
                $this_list = "hate_list";

            }

            $emotion_data_string = $emotion_comment_list_data['EmotionCommentList'][$this_list] ?? "";

            if ($emotion_data_string == null || $emotion_data_string == "" || !isset($emotion_data_string)) {
                $emotion_data_array = [];
                $key = 'none';
            } else {
                $emotion_data_array = explode(";", $emotion_data_string);
                $key = array_search(strval($user_id), $emotion_data_array);
                if ($key === false)
                $key = 'none';
            }

            //echo ("key: " . $key);

            if ($key == 'none') {
                $emotion_data_array[] = $user_id;
                sort($emotion_data_array);
                $new_data_string = implode(";", $emotion_data_array);
                echo "array: " . json_encode($emotion_data_array);
                //echo 1;

                if (($oldEmoState != $newEmoState) && $oldEmoState != 0) {
                    //echo "old: " . $emo_list[$oldEmoState];
                    $old_emotion_data_string = $emotion_comment_list_data['EmotionCommentList'][strval($emo_list[$oldEmoState])] ?? "";
                    $old_emotion_data_array = explode(";", $old_emotion_data_string);
                    $key_old = array_search(strval($user_id), $old_emotion_data_array);
                    unset($old_emotion_data_array[$key_old]);
                    $new_data_string_for_old = implode(";", $old_emotion_data_array);
                    $emotion_comment_list_data['EmotionCommentList'][strval($emo_list[$oldEmoState])] = $new_data_string_for_old;
                }

                $data_emotion_sub = array(
                    'EmotionCommentList' => array(
                        'id' => $emotion_comment_list_data['EmotionCommentList']['id'],
                        'comment_id' => $decoded['comment_id'],
                        'like_list' => $emotion_comment_list_data['EmotionCommentList']['like_list'] ?? "",
                        'dislike_list' => $emotion_comment_list_data['EmotionCommentList']['dislike_list'] ?? "",
                        'love_list' => $emotion_comment_list_data['EmotionCommentList']['love_list'] ?? "",
                        'hate_list' => $emotion_comment_list_data['EmotionCommentList']['hate_list'] ?? "",
                    )
                );

                $dataSub_notify = $notification->get_notify_single_comment($decoded['emailS'], $comment_data['Comment']['user_account'], $comment_id);

                if (empty($dataSub_notify)) {
                    $dataSub_notify = array(
                        'Notification' => array(
                            'user_account_1' => $decoded['emailS'],
                            'user_account_2' => $comment_data['Comment']['user_account'],
                            'type' => 20 + intval($decoded['emotionState']),
                            'post_id' => $decoded['post_id'],
                            'comment_id' => $comment_id,
                            'message' => "Emotion",
                            'showed' => 0,
                            'created' => date('Y-m-d H:i:s'),
                        ),
                    );
                }
                $dataSub_notify['Notification']['type'] = 20 + intval($decoded['emotionState']);
                $dataSub_notify['Notification']['created'] = date('Y-m-d H:i:s');

                $data_emotion_sub['EmotionCommentList'][$this_list] = $new_data_string;

                if ($emotion_comment_list->save($data_emotion_sub)) {

                    if (strcmp($decoded['emailS'], $decoded['author_account']) != 0) {
                        $notification->save($dataSub_notify);
                    }

                    $response = array(
                        'response' => array(
                            'id' => 1,
                            'description' => 'success',
                        ),
                    );
                    echo json_encode($response);

                } else {
                    $response = array(
                        'response' => array(
                            'id' => 0,
                            'description' => 'Failed',
                        ),
                    );
                    echo json_encode($response);
                }
            } else {
                unset($emotion_data_array[$key]);
                $new_data_string = implode(";", $emotion_data_array);
                $emotion_comment_list_data['EmotionCommentList'][$this_list] = $new_data_string;
                if ($emotion_comment_list->save($emotion_comment_list_data)) {

                    $response = array(
                        'response' => array(
                            'id' => 1,
                            'description' => 'success',
                        ),
                    );
                    echo json_encode($response);

                } else {
                    $response = array(
                        'response' => array(
                            'id' => 0,
                            'description' => 'Failed',
                        ),
                    );
                    echo json_encode($response);
                }
            }
        } else {
            //header('Location: ' . CLIENT_URL . '/book/input?success=0');
            $response = array(
                'response' => array(
                    'id' => 0,
                    'description' => 'fail',
                ),
            );
            echo json_encode($response);
        }
    } else {
        //header('Location: ' . CLIENT_URL . '/book/input?success=0');
        $response = array(
            'response' => array(
                'id' => 0,
                'description' => 'fail',
            ),
        );
        echo json_encode($response);
    }
} else {
    //header('Location: ' . CLIENT_URL . '/book/input?success=0');
    $response = array(
        'response' => array(
            'id' => 0,
            'description' => 'fail',
        ),
    );
    echo json_encode($response);
}