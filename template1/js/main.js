$(function (){
	"use strict";
	
	$("html").niceScroll({
			cursorcolor: "#ff8b38",
			cursorborder: "#ff8b38",
			cursorwidth: "10px"
		 });
	 $("#boxscroll").niceScroll({horizrailenabled:false});
	//star navbar top 
	
	$(window).scroll(function (){
		
		var navbar = $(window).scrollTop();
		
		console.log(navbar);
		
		
		if(navbar >= 100){
			
			$(".navbar").addClass("navbar-fixed-top"),
			$(".navbar").addClass("silde");
		}else(
		$(".navbar").removeClass("navbar-fixed-top"),
		$(".navbar").removeClass("silde")
		);
		
	});
	
	// star tabs seleatet
	 
	 $(".tabs .lest-tab li").click(function (){
		 
		 $(this).addClass("selected").siblings().removeClass("selected");
		 
		 $(".tabs .tabs-tow > div").hide();
		 
		 $(".tabs .im > div").hide();
		 
		 
		 $("." + $(this).data('class')).fadeIn(1000);
		 
		
		 
		 console.log($(this).data('class'))
		 
		 
		 
		 
		 // star load
		 $(window).on('load',function() { 
		 $(".sp").css("display","none");
		 });
		 
		 
		 
		 
		 
		 
	 });
	
	

});