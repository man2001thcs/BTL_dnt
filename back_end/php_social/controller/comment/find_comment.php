<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/Comment.php';
require_once '../../model/Comment.php';
require_once '../../model/User.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Log_temp.php';

if (!isset($user)) {
    $user = new User();
}

$comment = new Comment();
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW comment data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $emailS = $decoded['emailS'];
        $codeS = $decoded['codeS'];
        $comment_id = $decoded['comment_id'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            $comment_single = $comment->findById($comment_id);
            $response = array(
                'id' => 1,
                'data' => json_encode($comment_single),
            );
            $comment->sendResponse(200, json_encode($response));
            //echo json_encode($response);

        } else {
            $response = array(
                'id' => 0,
                'data' => 'null',
            );
            $comment->sendResponse(200, json_encode($response));
        }
    } else {
        $response = array(
            'id' => 0,
            'data' => 'null',
        );
        $comment->sendResponse(200, json_encode($response));
    }
} else {
    $response = array(
        'id' => 0,
        'data' => 'null',
    );
    //echo 1;
    $comment->sendResponse(200, json_encode($response));
    //echo json_encode($response);
}