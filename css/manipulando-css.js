$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*if (selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});

	selecaoUsuarios.on('change', function(evento) {
		/*var selecaoUsuario = $(evento.target);
		if (selecaoUsuario.prop('checked')) {
			selecaoUsuario.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});

});