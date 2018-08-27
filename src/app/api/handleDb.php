<?php
	require_once 'classes/config.php';

	$db = Database::getInstance();

	//create DB
	$db->query("DROP DATABASE IF EXISTS dario");
	$db->query("CREATE DATABASE dario");

	$db->setDB('dario');

	//create tables
	$db->query("CREATE TABLE users(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(250)
        )
      ");

	$db->query("CREATE TABLE list_items(
            id INT PRIMARY KEY AUTO_INCREMENT,
            dsca VARCHAR(250)
        )
      ");

	$db->query("CREATE TABLE users_list(
            user_id INT(10) UNSIGNED NOT NULL,
            list_id INT(10) UNSIGNED NOT NULL,
            PRIMARY KEY (`user_id`,`list_id`),
            KEY `user_id` (`user_id`),
            KEY `list_id` (`list_id`)
        )
      ");

	//insert data
	$db->query("INSERT INTO users (name)
                  VALUES ('Yael Netzer Gadot'),
                        ('Ran Shochat')
      ");

	$db->query("INSERT INTO list_items (dsca)
                  VALUES ('Item 1'),
                        ('Item 2'),
                        ('Item 3'),
                        ('Item 4'),
                        ('Item 5')
      ");

	$db->query("INSERT INTO users_list (user_id,list_id)
                  VALUES (1,1),
                        (1,2),
                        (1,3),
                        (2,2),
                        (2,3),
                        (2,4),
                        (2,5)
      ");