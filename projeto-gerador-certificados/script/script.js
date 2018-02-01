((function ( w, d) {
	'use strict';

	var $form = d.querySelector('[data-js="form"]');
	var $email = d.querySelector('[data-js="email"]');

	$form.addEventListener( 'submit', function (o) {
		var $email = d.querySelector('[data-js="email"]');
		if (!$email.value) {
			o.preventDefault();
			alert("Informe Um Email!");
		}
	}, false);

	w.addEventListener( 'load', function () {
		var url = this.location.href;

		$email.focus();

		if(url.charAt(71) == 1)
			alert('Usuário Inválido!');

		
	}, false);

})( window, document));