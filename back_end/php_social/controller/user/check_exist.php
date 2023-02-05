<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';
require_once '../../model/User.php';


if (!isset($user)) {
	$user = new User();
}


$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
	//Receive the RAW post data.
	$content = trim(file_get_contents("php://input"));

	$decoded = json_decode($content, true);

	if (is_array($decoded)) {

		$dataS = array(
			'User' => array(
				'email' => $decoded['emailS'],
				'phone_number' => $decoded['phone_number'],
			)
		);

		if ($user->checkUser($dataS)) {
			$response = array(
				'id' => 1,
				'code' => "ACCOUNT_SIGN_IN_FAIL_EXIST",
				'data' => "null"
			);
			$user->sendResponse(200, json_encode($response));
		} else {

			$response = array(
				'id' => 1,
				'code' => "ACCOUNT_SIGN_IN_CONTINUE",
				'data' => "null"
			);
			$user->sendResponse(200, json_encode($response));

		}

	} else {
		$response = array(
			'id' => 1,
			'code' => "ACCOUNT_SIGN_IN_FAIL",
			'data' => "null"
		);
		$user->sendResponse(200, json_encode($response));
	}
}

?>