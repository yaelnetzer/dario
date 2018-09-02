<?php
    require_once '../classes/config.php';

    $user= new User($_GET['user']);

	header("Access-Control-Allow-Origin: *");
	print json_encode($user->_aList);