$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});