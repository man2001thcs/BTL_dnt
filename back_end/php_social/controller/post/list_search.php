<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/Post.php';
require_once '../../model/Comment.php';
require_once '../../model/User.php';
require_once '../../model/Friend_relation.php';
require_once '../../model/Log_temp.php';
require_once '../../model/Emotion_post_list.php';
require_once '../../model/Search_history.php';

if (!isset($user)) {
    $user = new User();
}

$post = new Post();
$search_history = new SearchHistory();
$limit = 5;

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if (is_array($decoded)) {
        $limit = $decoded['limit'];
        $emailS = $decoded['emailS'];
        $codeS = $decoded['codeS'];
        $user_id = $decoded['user_id'];
        $search_body = $decoded['search_body'];
        $getMore = $decoded['getMore'];

        if (strcmp($user->login_code($decoded['emailS']), $decoded['codeS']) == 0 && $user->is_admin($decoded['emailS']) == false) {
            $post_list = $post->get_post_search($emailS, $search_body, $limit);

            $dataSub1 = array(
                'SearchHistory' => array(
                    'user_id' => $user_id,
                    'search_body' => $search_body,
                    'type' => 1,
                    'showed' => 0,
                    'created' => date('Y-m-d H:i:s'),
                ),
            );

            $search_history_appear = $search_history->find_search_history($user_id, 1, $search_body);

            if (!empty($search_history_appear)){
                $search_history_appear['SearchHistory']['created'] = date('Y-m-d H:i:s');
                $search_history->save($search_history_appear);
            } else {
                $search_history->save($dataSub1);
            }
            

            if (sizeof($post_list) > intval($limit) || intval($getMore) == 0) {
                //echo json_encode($decoded);
                $response = array(
                    'id' => 1,
                    'data' => json_encode($post_list),
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
