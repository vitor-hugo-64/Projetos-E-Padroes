<?php

	require_once ("config.php");
	$email = $_POST['email'];

	$connection = new Sql();

	$datasReturn = $connection->getDatas($email);
	session_start();
	$_SESSION['data'] = $datasReturn;
	$_SESSION['email'] = $email;

	if ($datasReturn) {
		header("Location: ../certificados.php");
	} else {
		header("Location: ../index.php?1");
	}
