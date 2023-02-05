<?php
require_once '../../../config/const.php';
require_once '../../../config/database.php';
require_once '../../../lib/Helper.php';
require_once '../../../model/User.php';
require_once '../../../model/Post.php';
require_once '../../../model/Log_temp.php';
require_once '../../../model/Notification.php';
require_once '../../../model/Comment.php';
require_once '../../../model/Emotion_post_list.php';

if (!isset($user)) {
    $user = new User();
}

//if (!$user->isLoggedIn() || !$user->isAdmin()) {
//    Helper::redirect_err();
//}

$emotion_post_list = new Emotion_post_list();

$emo_list = ["like_list", "dislike_list", "love_list", "hate_list"];

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));

    $decoded = json_decode($content, true);

    if (is_array($decoded)) {

        $user_appear = 0;
        $user_id = $decoded['user_id'];
        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            //echo("id: " . $decoded['id']);
            $emo_list_detail = $emotion_post_list->findByPostId($decoded['post_id']);
            //echo ("id: " . json_encode($emo_list_detail));
            $emotion_data_string_array = $emo_list_detail['EmotionPostList'];

            $emo_list_detail_like = explode(";", $emotion_data_string_array['like_list']);
            $emo_list_detail_dislike = explode(";", $emotion_data_string_array['dislike_list']);
            $emo_list_detail_love = explode(";", $emotion_data_string_array['love_list']);
            $emo_list_detail_hate = explode(";", $emotion_data_string_array['hate_list']);

            $like_num = $emotion_data_string_array['like_list'] == "" ? 0 : sizeof($emo_list_detail_like);
            $dislike_num = $emotion_data_string_array['dislike_list'] == "" ? 0 : sizeof($emo_list_detail_dislike);
            $love_num = $emotion_data_string_array['love_list'] == "" ? 0 : sizeof($emo_list_detail_love);
            $hate_num = $emotion_data_string_array['hate_list'] == "" ? 0 : sizeof($emo_list_detail_hate);

            $key_like = array_search(strval($user_id), $emo_list_detail_like);
            $key_dislike = array_search(strval($user_id), $emo_list_detail_dislike);
            $key_love = array_search(strval($user_id), $emo_list_detail_love);
            $key_hate = array_search(strval($user_id), $emo_list_detail_hate);

            if (
                $key_like !== false
                || $key_dislike !== false
                || $key_love !== false
                || $key_hate !== false
            ) {
                $user_appear = 1;
            }

            $response = array(
                'id' => 1,
                'like_num' => $like_num,
                'dislike_num' => $dislike_num,
                'love_num' => $love_num,
                'hate_num' => $hate_num,
                "user_appear" => $user_appear ?? 0,
            );
            $emotion_post_list->sendResponse(200, json_encode($response));
        } else {
            //header('Location: ' . CLIENT_URL . '/book/input?success=0');
            $response = array(
                'id' => 0,
                'like_num' => "null",
                'dislike_num' => "null",
                'love_num' => "null",
                'hate_num' => "null",
                "user_appear" => $user_appear ?? 0,
            );
            $emotion_post_list->sendResponse(200, json_encode($response));
        }
    } else {
        //header('Location: ' . CLIENT_URL . '/book/input?success=0');
        $response = array(
            'id' => 0,
            'like_num' => "null",
            'dislike_num' => "null",
            'love_num' => "null",
            'hate_num' => "null",
            "user_appear" => $user_appear ?? 0,
        );
        $emotion_post_list->sendResponse(200, json_encode($response));
    }
} else {
    //header('Location: ' . CLIENT_URL . '/book/input?success=0');
    $response = array(
        'id' => 0,
        'like_num' => "null",
        'dislike_num' => "null",
        'love_num' => "null",
        'hate_num' => "null",
        "user_appear" => $user_appear ?? 0,
    );
    $emotion_post_list->sendResponse(200, json_encode($response));
}