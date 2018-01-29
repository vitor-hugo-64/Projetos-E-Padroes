<?php

	$url = $_SERVER['REQUEST_URI'];
	$id = substr($url, -1);
	session_start();
	$user = $_SESSION['user'][$id];

	header("Content-Type: image/png");
	
	$image = imagecreatefrompng("../img/certificado.png");

	$titleColor = imagecolorallocate($image, 0, 0, 0);
	$gray = imagecolorallocate($image, 100, 100, 100);

	$calibri = imageloadfont('../fonts/malgun.gdf');

	imagestring($image, $calibri, 410, 330, $user['nome'], $titleColor);
	imagestring($image, 2, 126, 704, $user['livro'], $titleColor);
	imagestring($image, 2, 128, 716, $user['folha'], $titleColor);
	imagestring($image, 2, 142, 729, $user['registro'], $titleColor);

	

	imagepng($image);
	// DESSA FORMA ELE SALVA A IMAGEM COM O NOME INFORMADO NA STRING E COM A QUALIDADE BASEADA NA ORIGINAL EM PORCENTAGEM
	imagedestroy($image);

?>
	
	
