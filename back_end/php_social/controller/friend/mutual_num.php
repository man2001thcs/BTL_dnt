<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/User.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Log_temp.php';
if (!isset($user)) {
    $user = new User();
}

//if (!$user->isLoggedIn() || !$user->isAdmin()) {
//    Helper::redirect_err();
//}

$friend_relation = new Friend_relation();
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));

    $decoded = json_decode($content, true);
    //echo json_encode($decoded);

    if (is_array($decoded)) {

        if (strcmp($user->login_code($decoded['emailS1']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS1']) == false) {
            //echo("id: " . $decoded['id']);
            $mutual_number = $friend_relation->get_mutual_friends_number($decoded['emailS1'], $decoded['emailS2']);

            $response = array(
                'id' => 1,
                'number' => $mutual_number,
            );
            $friend_relation->sendResponse(200, json_encode($response));
        } else {
            $response = array(
                'id' => 0,
                'number' => 0,
            );
            $friend_relation->sendResponse(200, json_encode($response));
        }
    } else {
        $response = array(
            'id' => 0,
            'number' => 0,
        );
        $friend_relation->sendResponse(200, json_encode($response));
    }
}