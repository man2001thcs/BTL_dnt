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
				'password' => $decoded['passwordS'],
				'fullname' => $decoded['fullname'],
				'address' => $decoded['address'],
				'phone_number' => $decoded['phone_number'],
				'is_admin' => "0",
				'new' => 1,
				'birthday' => $decoded['birthday'],
				'gender' => $decoded['gender'] ?? 0,
				'created' => date('Y-m-d H:i:s'),
				'modified' => date('Y-m-d H:i:s')
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
			if ($user->saveLogin($dataS)) {
				if ($user->checkUser($dataS)) {
					$response = array(
						'id' => 1,
						'code' => "ACCOUNT_SIGN_IN_OK",
						'data' => "null"
					);
					$user->sendResponse(200, json_encode($response));
					$next_id = $user->getNextId();
					$target_dir_user = "../../img/user/" . $next_id;

					$from_dir_avatar = "../../img/user/unknown_avatar.png";
					$target_dir_avatar = "../../img/user/" . $next_id . "/" . "avatar/avatar_this.png";

					$from_dir_background = "../../img/user/unknown_background.png";
					$target_dir_background = "../../img/user/" . $next_id . "/" . "background/background.png";

					if (!is_dir($target_dir_user)) {
						mkdir($target_dir_user, 0700);
						if (!is_dir($target_dir_user . "/avatar")) {
							mkdir($target_dir_user . "/avatar", 0700);
						}
						if (!is_dir($target_dir_user . "/background")) {
							mkdir($target_dir_user . "/background", 0700);
						}
					} else {
						if (!is_dir($target_dir_user . "/avatar")) {
							mkdir($target_dir_user . "/avatar", 0700);
						}
						if (!is_dir($target_dir_user . "/background")) {
							mkdir($target_dir_user . "/background", 0700);
						}
					}
					copy($from_dir_avatar, $target_dir_avatar);
					copy($from_dir_background, $target_dir_background);


				} else {
					$response = array(
						'id' => 1,
						'code' => "ACCOUNT_SIGN_IN_FAIL",
						'data' => "null"
					);
					$user->sendResponse(200, json_encode($response));
				}
			}
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