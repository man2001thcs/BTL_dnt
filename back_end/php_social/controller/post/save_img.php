<?php
require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../model/Post.php';
require_once '../../model/User.php';
require_once '../../model/Log_temp.php';

require_once '../../config/const.php';
require_once '../../config/database.php';
require_once '../../lib/Helper.php';

$target_dir = "../../img/post/";

if (!isset($user)) {
	$user = new User();
}
$post = new Post();

if (strcmp($user->login_code($_POST['emailS']), $_POST['codeS']) == 0 && $user->is_admin($_POST['emailS']) == false) {
	if (
		isset($_FILES["image"])
		&& isset($_FILES["image"]["name"])
		&& isset($_FILES["image"]["tmp_name"])
	) {

		$last_post = $post->search_Lastest();
		$folder = $last_post['Post']['id'];
		$target_dir = $target_dir . $folder;
		$save_name = $_FILES["image"]["name"];

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
				'code' => "IMAGE_UPLOAD_FAILED",
			);
			$user->sendResponse(200, json_encode($response));
			// if everything is ok, try to upload file
		} else {
			$temp = $save_name;
			$target_file = $target_dir . "/" . $temp;

			if (!is_dir($target_dir)) {
				mkdir($target_dir, 0700);
			}
			if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
				$response = array(
					'id' => 1,
					'code' => "IMAGE_UPLOAD_OK",
				);
				$user->sendResponse(200, json_encode($response));
			}
		}
	}
}

//return false;
?>