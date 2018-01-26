<?php

	class Sql extends PDO {

		private $conn;
		
		function __construct() {
			$this->conn = new PDO("mysql:host=localhost;dbname=certificado", "root", "");
		}

		public function getDatas($email)
		{
			$stmt = $this->conn->prepare("SELECT id, livro, folha, registro, nome, email,evento, file FROM EVENTOS WHERE email = :EMAIL");
			$stmt->bindParam(":EMAIL", $email);
			$stmt->execute();
			return $stmt->fetchAll(PDO:: FETCH_ASSOC);
		}
	}