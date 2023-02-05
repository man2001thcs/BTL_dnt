<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/Post.php';
require_once '../../model/Comment.php';
require_once '../../model/User.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Log_temp.php';

if (!isset($user)) {
    $user = new User();
}

$post = new Post();
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $emailS = $decoded['emailS'];
        $codeS = $decoded['codeS'];
        $post_id = $decoded['post_id'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            $post_single = $post->findById($post_id);
            $response = array(
                'id' => 1,
                'data' => json_encode($post_single),
            );
            $post->sendResponse(200, json_encode($response));
            //echo json_encode($response);

        } else {
            $response = array(
                'id' => 0,
                'data' => 'null',
            );
            $post->sendResponse(200, json_encode($response));
        }
    } else {
        $response = array(
            'id' => 0,
            'data' => 'null',
        );
        $post->sendResponse(200, json_encode($response));
    }
} else {
    $response = array(
        'id' => 0,
        'data' => 'null',
    );
    //echo 1;
    $post->sendResponse(200, json_encode($response));
    //echo json_encode($response);
}