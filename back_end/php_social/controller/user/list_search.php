<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/Post.php';
require_once '../../model/User.php';
require_once '../../model/User.php';
require_once '../../model/Log_temp.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Search_history.php';

if (!isset($user)) {
    $user = new User();
}

$user = new User();
$search_history = new SearchHistory();

$limit = 5;

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW user data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $limit = $decoded['limit'];
        $emailS = $decoded['emailS'];
        $codeS = $decoded['codeS'];
        $user_id = $decoded['user_id'];
        $search_name = $decoded['search_body'];
        $getMore = $decoded['getMore'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            $user_list = $user->get_friend_list_search($decoded['emailS'], $search_name, $decoded['limit']);

            $dataSub1 = array(
                'SearchHistory' => array(
                    'user_id' => $user_id,
                    'search_body' => $decoded['search_body'],
                    'type' => 2,
                    'showed' => 0,                           
                    'created' => date('Y-m-d H:i:s'),
                ),
            );

            $search_history_appear = $search_history->find_search_history($user_id, 2, $decoded['search_body']);

            //echo json_encode(($search_history_appear));
            if (!empty($search_history_appear)){
                $search_history_appear['SearchHistory']['created'] = date('Y-m-d H:i:s');
                $search_history->save($search_history_appear);
            } else {
                $search_history->save($dataSub1);
            }

            if (sizeof($user_list) > $limit || intval($getMore) == 0) {
                //echo json_encode($decoded);
                $response = array(
                    'id' => 1,
                    'data' => json_encode($user_list),
                );
				$user->sendResponse(200, json_encode($response));
                //echo json_encode($response);
            } else {
				$response = array(
                    'id' => 0,
                    'data' => 'null',
                );
				$user->sendResponse(200, json_encode($response));
            }
        } else {
            $response = array(
                'id' => 0,
				'data' => 'null',
			);
			$user->sendResponse(200, json_encode($response));
        }
    } else {
        $response = array(
            'id' => 0,
			'data' => 'null',
		);
		$user->sendResponse(200, json_encode($response));
    }
} else {
    $response = array(
        'id' => 0,
		'data' => 'null',
	);
	//echo 1;
	$user->sendResponse(200, json_encode($response));
    //echo json_encode($response);
}
