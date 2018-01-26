<?php

	spl_autoload_register(function ($className) {
		$dirClass = 'class';
		$class = $className;
		$fileName = $dirClass . DIRECTORY_SEPARATOR . $class . '.php';
		if (file_exists($fileName)) {
			require_once "$fileName";
		}
	});
