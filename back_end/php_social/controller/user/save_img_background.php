<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../model/User.php';
require_once '../../model/Log_temp.php';
require_once '../../model/Post.php';
require_once '../../model/Notification.php';
require_once '../../model/Emotion_post_list.php';

require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';

if (!isset($user)) {
	$user = new User();
}

$post = new Post();
$notification = new Notification();
$emo_list = new Emotion_post_list();

$target_dir = "../../img/user/" . $_POST['user_id'] . "/" . "background";
//echo json_encode($_POST);
if (strcmp($user->login_code($_POST['emailS']), $_POST['codeS']) == 0 && $user->is_admin($_POST['emailS']) == false) {
	if (
		isset($_FILES["image"])
		&& isset($_FILES["image"]["name"])
		&& isset($_FILES["image"]["tmp_name"])
	) {

		//$target_dir = $target_dir . $folder;
		$save_name = "background";

		$target_file = $target_dir . basename($_FILES["image"]["name"]);

		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

		// Check if image file is a actual image or fake image

		if (!empty($_FILES["image"]["tmp_name"])) {
			$check = getimagesize($_FILES["image"]["tmp_name"]);
		} else
			$check = false;

		if ($check !== false) {
			//echo "File is an image - " . $check["mime"] . ".";
			$uploadOk = 1;
		} else {
			//echo "File is not an image.";
			$uploadOk = 0;
		}

		// Check if file already exists
		$target_file1 = $target_dir . "/" . $_FILES["image"]["name"] . ".png";

		/*if (file_exists($target_file1)) {
		//echo "Sorry, file already exists.";
		$uploadOk = 0;
		}
		*/

		// Check file size
		if ($_FILES["image"]["size"] > 500000) {
			//echo "Sorry, your file is too large.";
			$uploadOk = 0;
		}

		// Allow certain file formats
		if (
			$imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
			&& $imageFileType != "gif"
		) {
			//echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			$uploadOk = 0;
		}

		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
			$response = array(
				'id' => 0,
				'code' => "BACKGROUND_CHANGE_FAILED",
			);
			$user->sendResponse(200, json_encode($response));
		} else {
			$temp = $save_name;
			$temp .= ".png";
			$target_file = $target_dir . "/" . $temp;

			if (!is_dir($target_dir)) {
				mkdir($target_dir, 0700);
			}
			if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {

				if ($_POST['new_postTick'] == true || $_POST['new_postTick'] == "true") {
					$dataSub = array(
						'Post' => array(
							'user_account' => $_POST['emailS'],
							'user_id' => $user->get_id($_POST['emailS'])['id'],
							'user_name' => $user->get_full_name($_POST['emailS'])['fullname'],
							'post_body' => $user->get_full_name($_POST['emailS'])['fullname'] . " vừa cập nhật background của anh ấy",
							'publicity_state' => 1,
							'share_id' => -2,
							'img_num' => 1,
							'created' => date('Y-m-d H:i:s'),
							'modified' => date('Y-m-d H:i:s'),
						),
					);

					
					if ($post->save($dataSub)) {
						$last_id = $post->getNextId();
						$target_file_copy = "../../img/post/" . $last_id;
						if (!is_dir($target_file_copy)) {
							mkdir($target_file_copy, 0700);
						}

						$target_file_copy .= "/1.png";
						copy($target_file, $target_file_copy);

						$dataSub1 = array(
							'EmotionPostList' => array(
								'post_id' => $last_id,
								'like_list' => "",
								'dislike_list' => "",
								'love_list' => "",
								'hate_list' => "",
							),
						);
		
						$dataSub2 = array(
							'Notification' => array(
								'user_account_1' => $_POST['emailS'],
								'user_account_2' => "none",
								'type' => 8,
								'post_id' => $last_id,
								'comment_id' => 0,
								'message' => "New Background is replaced",
								'showed' => 0,
								'created' => date('Y-m-d H:i:s'),
							),
						);

						//echo json_encode($dataSub2);

						$notification->save($dataSub2);

						$emo_list->save($dataSub1);

						$response = array(
							'id' => 1,
							'code' => "BACKGROUND_CHANGE_OK",
						);
						$user->sendResponse(200, json_encode($response));
					} else {
						$response = array(
							'id' => 1,
							'code' => "BACKGROUND_CHANGE_OK_FAILED_POST",
						);
						$user->sendResponse(200, json_encode($response));
					}
				} else {
					$response = array(
						'id' => 1,
						'code' => "BACKGROUND_CHANGE_OK_NO_POST",
					);
					$user->sendResponse(200, json_encode($response));
				}
				//return true;
			}
		}
	} else {
		$response = array(
			'id' => 0,
			'code' => "BACKGROUND_CHANGE_FAILED",
		);
		$user->sendResponse(200, json_encode($response));
	}
} else {
	$response = array(
		'id' => 0,
		'code' => "BACKGROUND_CHANGE_FAILED",
	);
	$user->sendResponse(200, json_encode($response));
}

//return false;
?>