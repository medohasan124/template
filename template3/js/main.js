$(function(){
	/*start icont navbar*/

	$('.icon').click(function(){
		$('.header .list').animate({
			right: 0 
		} , 100);

		$('.header .list').css({
			'clip-path' : 'polygon(0 0, 100% 0%, 100% 100%, 40% 100%)'
		});
	});


	$('.header .space').click(function(){
		$('.header .list').animate({
			right: -577 ,

		} , 100);



		$('.header .list').css({
			'clip-path' : 'polygon(40% 0, 100% 0%, 100% 100%, 40% 100%)'
		});
	});


		$('.header .left').click(function(){
		$('.header .list').animate({
			right: -577 ,

		} , 100);

		

		$('.header .list').css({
			'clip-path' : 'polygon(40% 0, 100% 0%, 100% 100%, 40% 100%)'
		});
	});
	/*end icont navbar*/

	/*start world*/

/*
======================================================
=====================================================
============= vr 1 for world item
 start now
*/

var speed = 300 ;
var bottomDown = -770 ;
/*=================== one ========================*/
	$('.world .one').mouseenter(function(){
		$('.world .one .content').animate({
			bottom : 0
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .three .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .four .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world').css({'background' : 'url("images/w1.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
	});

/*===========================================*/





/*=================== two========================*/
	$('.world .two').mouseenter(function(){
		$('.world .one .content').animate({
			bottom : bottomDown
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : 0
		} , speed);

		$('.world .three .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .four .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world').css({'background' : 'url("images/w2.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
	});


/*===========================================*/



/*=================== three ========================*/
	$('.world .three').mouseenter(function(){
		$('.world .one .content').animate({
			bottom : bottomDown
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .three .content').animate({
			bottom : 0
		} , speed);

		$('.world .four .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world').css({'background' : 'url("images/w3.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
	});


$('.world .four').mouseenter(function(){
		$('.world .one .content').animate({
			bottom : bottomDown
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .three .content').animate({
			bottom : bottomDown
		} , speed);

		$('.world .four .content').animate({
			bottom : 0
		} , speed);

		$('.world').css({'background' : 'url("images/w4.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
	});

$('.world').mouseenter(function(){
	$('.world .one .content').animate({
			bottom : 0
		} ,speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : 0
		} , speed);

		$('.world .three .content').animate({
			bottom : 0
		} , speed);

		$('.world .four .content').animate({
			bottom : 0
		} , speed);

		$('.world').css({'background' : 'url("images/w5.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
});


$('.plases').mouseenter(function(){
	$('.world .one .content').animate({
			bottom : 0
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : 0
		} , speed);

		$('.world .three .content').animate({
			bottom : 0
		} ,speed);

		$('.world .four .content').animate({
			bottom : 0
		} , speed);


		$('.world').css({'background' : 'url("images/w5.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
});


$('.services').mouseenter(function(){
	$('.world .one .content').animate({
			bottom : 0
		} , speed);
		/* ============== all =============*/
		$('.world .two .content').animate({
			bottom : 0
		} , speed);

		$('.world .three .content').animate({
			bottom : 0
		} , speed);

		$('.world .four .content').animate({
			bottom : 0
		} , speed);

		$('.world').css({'background' : 'url("images/w5.jpg")center no-repeat'});
		$('.world').css({'background-size' : 'cover'});

		/* ============== all =============*/
});
/*===========================================*/



	/*end world*/


});

