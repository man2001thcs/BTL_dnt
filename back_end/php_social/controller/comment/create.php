<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/User.php';
require_once '../../model/Post.php';
require_once '../../model/Comment.php';
require_once '../../model/Log_temp.php';
require_once '../../model/Notification.php';
require_once '../../model/Emotion_comment_list.php';

if (!isset($user)) {
    $user = new User();
}

//if (!$user->isLoggedIn() || !$user->isAdmin()) {
//    Helper::redirect_err();
//}

$comment = new Comment();
$notification = new Notification();
$emo_list = new Emotion_comment_list();
$post = new Post();

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW comment data.
    $content = trim(file_get_contents("php://input"));

    $decoded = json_decode($content, true);

    if (is_array($decoded)) {

        $dataSub = array(
            'Comment' => array(
                'post_id' => $decoded['post_id'],
                'user_account' => $decoded['emailS'],
                'user_id' => $user->get_id($decoded['emailS'])['id'],
                'user_name' => $user->get_full_name($decoded['emailS'])['fullname'],
                'comment_body' => $decoded['comment_body'],
                'img_num' => $decoded['img_num'],
                'rank' => 1,
                'created' => date('Y-m-d H:i:s'),
                'modified' => date('Y-m-d H:i:s'),
            ),
        );

        //echo json_encode($dataSub);

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            //echo json_encode($dataSub);
            $post_data = $post->findById($decoded['post_id']);
            if ($comment->save($dataSub)) {
                $lastest_id = $comment->getNextId();

                $dataSub1 = array(
                    'EmotionCommentList' => array(
                        'comment_id' => $lastest_id,
                        'like_list' => "",
                        'dislike_list' => "",
                        'love_list' => "",
                        'hate_list' => "",
                    ),
                );

                $dataSub2 = array(
                    'Notification' => array(
                        'user_account_1' => $decoded['emailS'],
                        'user_account_2' => $post_data['Post']['user_account'],
                        'type' => 1,
                        'post_id' => $decoded['post_id'],
						'comment_id' => $lastest_id,
                        'message' => "New comment",
                        'showed' => 0,
                        'created' => date('Y-m-d H:i:s'),
                    ),
                );

                if ($notification->save($dataSub2) && $emo_list->save($dataSub1)) {
                    $response = array(
                        'id' => 1,
                        'code' => "COMMENT_CREATE_OK",
                    );
                    $comment->sendResponse(200, json_encode($response));
                } else {
                    $comment->deleteById($lastest_id);
                    $response = array(
                        'id' => 0,
                        'code' => "COMMENT_CREATE_FAIL",
                    );
                    $comment->sendResponse(200, json_encode($response));
                }

            } else {
                //header('Location: ' . CLIENT_URL . '/book/input?success=0');}
                $response = array(
                    'id' => 0,
                    'code' => "COMMENT_CREATE_FAIL",
                );
                $comment->sendResponse(200, json_encode($response));
            }
        } else {
            //header('Location: ' . CLIENT_URL . '/book/input?success=0');
            $response = array(
                'id' => 0,
                'code' => "COMMENT_CREATE_FAIL",
            );
            $comment->sendResponse(200, json_encode($response));
        }
    } else {
        //header('Location: ' . CLIENT_URL . '/book/input?success=0');
        $response = array(
            'id' => 0,
            'code' => "COMMENT_CREATE_FAIL",
        );
        $comment->sendResponse(200, json_encode($response));
    }
}
