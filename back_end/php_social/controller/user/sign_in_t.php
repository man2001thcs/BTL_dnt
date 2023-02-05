<?php


$from_dir = "../../img/user/unknown_avatar.png";
$target_dir1 = "../../img/user/31";
$target_dir2 = "../../img/user/31/avatar";
$target_dir3 = "../../img/user/" . "31" . "/" . "avatar/avatar_this.png";
if (!is_dir($target_dir1)) {
	mkdir($target_dir1, 0700);
	if (!is_dir($target_dir1 . "/avatar")) {
		mkdir($target_dir1 . "/avatar", 0700);
		
	}
}
copy($from_dir, $target_dir3);




?>