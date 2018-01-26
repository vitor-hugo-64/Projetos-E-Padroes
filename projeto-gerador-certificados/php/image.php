<?php

	$url = $_SERVER['REQUEST_URI'];
	$id = substr($url, -1);
	session_start();
	$user = $_SESSION['user'][$id];

	header("Content-Type: image/png");
	
	$image = imagecreatefrompng("../img/certificados/bg-speaker.png");

	$titleColor = imagecolorallocate($image, 0, 0, 0);
	$gray = imagecolorallocate($image, 100, 100, 100);

	imagestring($image, 5, 510, 350, "Danilo De Oliveira", $titleColor);


	

	imagepng($image);
	// DESSA FORMA ELE SALVA A IMAGEM COM O NOME INFORMADO NA STRING E COM A QUALIDADE BASEADA NA ORIGINAL EM PORCENTAGEM
	imagedestroy($image);

?>
	
	
