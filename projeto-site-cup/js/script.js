$(function() {

    var tamanhoJanela = window.innerWidth;

    /*** MENUS RESPONSIVOS NO CARREGAMENTO DA PÁGINA ***/
    if (tamanhoJanela < 550) {
        $('body').removeClass('chamar-fundo');
        $('#menu2').removeClass('chamar-fundo');
    	$('#menu1').removeClass('menu1').addClass('menu1-responsivo');
    	$('.pesquisa-login').css('display', 'none');
        $('.link-responsivo').css('display', 'inline-block');
        $('.b-menu').css('display', 'inline-block');
        $('#menu2').removeClass('menu2').addClass('menu2-responsivo');
        $('.menu2-responsivo').css('width', '70%');
        $('#pop-login').addClass('pop-login-adaptar');
        $('#opcao-membros span').css('display', 'none');
        $('#opcao-membros').removeClass('.opcao-membros').addClass('.opcao-membros-responsivo');
        $('.pesquisar-caixa').css('display', 'none');
        $('#submenu1').removeClass('submenu1').addClass('submenu1-responsivo');
        $('#imagem2parallax').css('display', 'block');
    } else if (tamanhoJanela < 992) {
        $('body').removeClass('chamar-fundo');
        $('#menu2').removeClass('chamar-fundo');
        $('#menu1').removeClass('menu1').addClass('menu1-responsivo');
        $('.link-responsivo').css('display', 'inline-block');
        $('.pesquisa-login').css('display', 'none');
        $('.b-menu').css('display', 'inline-block');
        $('#menu2').removeClass('menu2').addClass('menu2-responsivo');
        $('.menu2-responsivo').css('width', '50%');
        $('#pop-login').addClass('pop-login');
        $('#opcao-membros span').css('display', 'none');
        $('#opcao-membros').removeClass('.opcao-membros').addClass('.opcao-membros-responsivo');
        $('.pesquisar-caixa').css('display', 'none');
        $('#submenu1').removeClass('submenu1').addClass('submenu1-responsivo');
        $('#imagem2parallax').css('display', 'block');
    } else {
        $('body').removeClass('chamar-fundo');
        $('#menu2').removeClass('chamar-fundo');
        $('#menu1').removeClass('menu1-responsivo').addClass('menu1');
        $('.pesquisa-login').css('display', 'inline');
        $('.link-responsivo').css('display', 'none');
        $('#menu2').removeClass('menu2-responsivo').addClass('menu2');
        $('.pop-login').removeClass('pop-login-adaptar');
        $('#menu2').removeClass('menu2-responsivo').addClass('menu2');
        $('.menu2').css('width', '100%');
        $('#pop-login').addClass('pop-login');
        $('#opcao-membros span').css('display', 'inline-block');
        $('#opcao-membros').removeClass('.opcao-membros-responsivo').addClass('.opcao-membros');
        $('.pesquisar-caixa').css('display', 'none');
        $('#submenu1').removeClass('submenu1-responsivo').addClass('submenu1');
        $('#imagem2parallax').css('display', 'none');
    }

    /*** MENUS RESPONSIVOS QUANDO O TAMANHO DA TELA É ATUALIZADO ***/
    $(window).on('resize', function() {
        var tamanho = window.innerWidth;

        if (tamanho < 550) {
            $('body').removeClass('chamar-fundo');
            $('#menu2').removeClass('chamar-fundo');
            $('#menu1').removeClass('menu1').addClass('menu1-responsivo');
            $('.pesquisa-login').css('display', 'none');
            $('.link-responsivo').css('display', 'inline-block');
            $('#menu2').removeClass('menu2').addClass('menu2-responsivo');
            $('.b-menu').css('display', 'inline-block');
            $('.b-menu').css('display', 'inline-block');
            $('.menu2-responsivo').css('width', '70%');
            $('#pop-login').addClass('pop-login-adaptar');
            $('#opcao-membros span').css('display', 'none');
            $('#opcao-membros').removeClass('.opcao-membros').addClass('.opcao-membros-responsivo');
            $('.pesquisar-caixa').css('display', 'none');
            $('#submenu1').removeClass('submenu1').addClass('submenu1-responsivo');
            $('#imagem2parallax').css('display', 'block');

        } else if (tamanho < 992) {
            $('body').removeClass('chamar-fundo');
            $('#menu2').removeClass('chamar-fundo');
            $('#menu1').removeClass('menu1').addClass('menu1-responsivo');
            $('.link-responsivo').css('display', 'inline-block');
            $('.pesquisa-login').css('display', 'none');
            $('.b-menu').css('display', 'inline-block');
            $('#menu2').removeClass('menu2').addClass('menu2-responsivo');
            $('.menu2-responsivo').css('width', '50%');
            $('#pop-login').addClass('pop-login');
            $('#opcao-membros span').css('display', 'none');
            $('#opcao-membros').removeClass('.opcao-membros').addClass('.opcao-membros-responsivo');
            $('.pesquisar-caixa').css('display', 'none');
            $('#submenu1').removeClass('submenu1').addClass('submenu1-responsivo');
            $('#imagem2parallax').css('display', 'block');
        } else {
            $('body').removeClass('chamar-fundo');
            $('#menu2').removeClass('chamar-fundo');
            $('#menu1').removeClass('menu1-responsivo').addClass('menu1');
            $('.pesquisa-login').css('display', 'inline');
            $('.link-responsivo').css('display', 'none');
            $('.menu2').css('display', 'block');
            $('.menu1-responsivo').css('display', 'none');
            $('.b-menu').css('display', 'none');
            $('.pop-login').removeClass('pop-login-adaptar');
            $('#menu2').removeClass('menu2-responsivo').addClass('menu2');
            $('.menu2').css('width', '100%');
            $('#pop-login').addClass('pop-login');
            $('#opcao-membros span').css('display', 'inline-block');
            $('#opcao-membros').removeClass('.opcao-membros-responsivo').addClass('.opcao-membros');
            $('.pesquisar-caixa').css('display', 'none');
            $('#submenu1').removeClass('submenu1-responsivo').addClass('submenu1');
            $('#imagem2parallax').css('display', 'none');
        }
    });

    /*** BOTÃO DE MENU SLIDE MOBILE ***/
    $('.b-menu').on('click', function() {
        $('.menu2-responsivo').toggleClass('chamar');
        $('body').toggleClass('chamar-fundo');
    });

    /**** BOTÃO DO POP-UP DE LOGIN ***/
    $('#login').on('click', function () {
        $('body').toggleClass('chamar-fundo');
        $('.menu2').toggleClass('chamar-fundo');
        $('.pagina-parallax').toggleClass('chamar-fundo');
        $('.pop-login').slideToggle('fast');
    });

    /* BOTÕES DE LOGIN */
    $('#login1').on('click', function () {
        $('body').toggleClass('chamar-fundo');
        $('.menu2').toggleClass('chamar-fundo');
        $('.pagina-parallax').toggleClass('chamar-fundo');
        $('.pop-login').slideToggle('fast');
    });

    $('#login2').on('click', function () {
        $('body').toggleClass('chamar-fundo');
        $('.pagina-parallax').toggleClass('chamar-fundo');
        $('.pop-login').slideToggle('fast');
    });

    $('#login3').on('click', function () {
        $('body').toggleClass('chamar-fundo');
        $('.menu2').toggleClass('chamar-fundo');
        $('.pagina-parallax').toggleClass('chamar-fundo');
        $('.pop-login').slideToggle('fast');
    });

    $('#pesquisar').on('click', function () {
        $('.pesquisar-caixa').slideToggle('fast', function () {
            $('#pesquisar-campo').focus();
            $('body').toggleClass('chamar-fundo');
            $('#menu2').toggleClass('chamar-fundo');
            $('.pagina-parallax').toggleClass('chamar-fundo');
        });
    });

    /* DROPDOWN MENU1 */
    $('#drop1').on('click', function () {
        $('#submenu1').slideToggle('fast', function() {
            $('body').toggleClass('chamar-fundo');
            $('#menu2').toggleClass('chamar-fundo');
            $('.pagina-parallax').toggleClass('chamar-fundo');
        });
    });

});