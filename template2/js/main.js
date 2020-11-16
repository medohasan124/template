$(function() {

		$("html").niceScroll({
			cursorcolor: "#21f34e",
			cursorborder: "#0000",
			cursorwidth: "5px"
		 });
	 $("#boxscroll").niceScroll({horizrailenabled:false});
	//star navbar top
	new WOW().init();



	$(".contactus .img .hover").hover(function() {
		$(this).hide();
	});

		$(".contactus .img").mouseleave(function() {
		$(".contactus .img .hover").show();
	});

		//scroll navbar



		$(window).scroll(function() {

			var navbar = $(this).scrollTop();

			if(navbar > 144){

				$("nav").css({position: "fixed" , color: "#fff" , backgroundColor: "#333"});

				$(".navbar .h1").css({color: "#fff"});

				$(".navbar-light .navbar-toggler").css({borderColor: "#fff"});
			}else{
				$("nav").css({position: "relative" , color: "#000", backgroundColor: "#fff" });

				$(".navbar .h1").css({color: "#000"});
			}
			//arrow up scrool
			if(navbar > 3650){

				$(".arrowup").fadeIn(1000);
				$(".arrowup").addClass("arrownow");
			}else{
				$(".arrowup").fadeOut(1000);
				$(".arrowup").removeClass("arrownow");
			}

		});

			$(".arrowup").click(function(){
				$("html").animate({
					scrollTop:0
				},1000);
			});

		//click navbar to scroll
		$(".navbar li").click(function() {

			

			$("html, body").animate({



				scrollTop: $("#" + $(this).data("cool")).offset().top
			});

			
		});







});

        $( window ).on( "load", function() {
        $(".load").fadeOut(500) ;
    });