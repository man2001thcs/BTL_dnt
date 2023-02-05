<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/Post.php';
require_once '../../model/User.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Log_temp.php';

if (!isset($user)) {
    $user = new User();
}

$friend_relation = new Friend_relation();

$limit = 5;

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW friend_relation data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $emailS1 = $decoded['emailS1'];
        $emailS2 = $decoded['emailS2'];
        $codeS = $decoded['codeS'];

        if (strcmp($user->login_code($decoded['emailS1']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS1']) == false) {
            $friend_relation_list = $friend_relation->get_friend_state($emailS1, $emailS2);

            $response = array(
                'id' => 1,
                'data' => json_encode($friend_relation_list),
            );
            $friend_relation->sendResponse(200, json_encode($response));
            //echo json_encode($response);
        }
    } else {
        $response = array(
            'id' => 0,
            'data' => 'null',
        );
        $friend_relation->sendResponse(200, json_encode($response));
    }
} else {
    $response = array(
        'id' => 0,
        'data' => 'null',
    );
    //echo 1;
    $friend_relation->sendResponse(200, json_encode($response));
    //echo json_encode($response);
}