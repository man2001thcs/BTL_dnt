<?php
require_once '../../../config/const.php';
require_once '../../../config/database.php';
require_once '../../../lib/Helper.php';
require_once '../../../model/User.php';
require_once '../../../model/Post.php';
require_once '../../../model/Log_temp.php';
require_once '../../../model/Notification.php';
require_once '../../../model/Emotion_post_list.php';

if (!isset($user)) {
    $user = new User();
}

//if (!$user->isLoggedIn() || !$user->isAdmin()) {
//    Helper::redirect_err();
//}

$post = new Post();
$notification = new Notification();
$emotion_post_list = new Emotion_post_list();
$emo_list = ["none", "like_list", "dislike_list", "love_list", "hate_list"];

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));

    $decoded = json_decode($content, true);

    $return_array = [];

    if (is_array($decoded)) {
        $post_id = $decoded['post_id'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            //echo("id: " . $decoded['id']);
            $post_data = $post->findById($decoded['post_id']);
            $emotion_post_list_data = $emotion_post_list->findByPostId($decoded['post_id']);
            //echo json_encode($emotion_post_list_data);

            $user_id = $user->get_id($decoded['emailS'])['id'];

            $like_array = explode(";", $emotion_post_list_data['EmotionPostList']['like_list']);
            foreach ($like_array as $id) {
                if (intval($id) > 0) {
                    $user_profile = $user->findById($id);
                    $user_profile['emo'] = 1;
                    $return_array[] = $user_profile;
                }
            }

            $dislike_array = explode(";", $emotion_post_list_data['EmotionPostList']['dislike_list']);
            foreach ($dislike_array as $id) {
                if (intval($id) > 0) {
                    $user_profile = $user->findById($id);
                    $user_profile['emo'] = 2;
                    $return_array[] = $user_profile;
                }
            }

            $love_array = explode(";", $emotion_post_list_data['EmotionPostList']['love_list']);
            foreach ($love_array as $id) {
                if (intval($id) > 0) {
                    $user_profile = $user->findById($id);
                    $user_profile['emo'] = 3;
                    $return_array[] = $user_profile;
                }
            }

            $hate_array = explode(";", $emotion_post_list_data['EmotionPostList']['hate_list']);
            foreach ($hate_array as $id) {
                if (intval($id) > 0) {
                    $user_profile = $user->findById($id);
                    $user_profile['emo'] = 4;
                    $return_array[] = $user_profile;
                }
            }

            $response = array(
                'id' => 1,
                'code' => 'OK',
                'data' => json_encode($return_array),
            );
            $emotion_post_list->sendResponse(200, json_encode($response));

            //echo ("key: " . $key);
        } else {
            //header('Location: ' . CLIENT_URL . '/book/input?success=0');
            $response = array(

                'id' => 0,
                'code' => 'FAIL',

            );
            $emotion_post_list->sendResponse(200, json_encode($response));
        }
    }
} else {
    //header('Location: ' . CLIENT_URL . '/book/input?success=0');
    $response = array(

        'id' => 0,
        'code' => 'FAIL',

    );
    $emotion_post_list->sendResponse(200, json_encode($response));
}