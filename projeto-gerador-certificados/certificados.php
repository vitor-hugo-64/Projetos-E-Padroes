<?php session_start(); $data = ($_SESSION['data']); $email = ($_SESSION['email']);  ?>
<!DOCTYPE html>
<html>
<head>
	<title>Liberato Certificados</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/grid.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<div class="cont">
		<div class="row">
			<div class="col c12 user">
				<h1>Todos Os Certificados De <?php echo $email; ?></h1>
			</div>
		</div>
		<?php foreach ($data as $value) { ?>
			<div class="row">
				<div class="col c6">
					<section>
						<img src="img/thumbnail.jpg">
						<div class="content-user">
							<label>Nome: </label><?php echo $value['nome']; ?>
							<br>
							<label>Livro: </label><?php echo $value['livro']; ?>
							<br>
							<label>Folha: </label><?php echo $value['folha']; ?>
							<br>
							<label>Registro: </label><?php echo $value['registro']; ?>
							<br>
							<label>Evento: </label><?php echo $value['evento']; ?>
							<?php $_SESSION['user'][$value['id']] = $value ?>
						</div>
						<?php echo "<a href='php/image.php?".$value['id']."' class='btn'>Gerar Certificado</a>"; ?>
					</section>
				</div>
			</div>
		<?php } ?>
	</div>

	<script type="text/javascript" src="script.js"></script>

</body>
</html>