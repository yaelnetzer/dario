<?php
    require_once '../classes/config.php';

    $user= new User($_GET['user']);

	print json_encode($user->_aList);