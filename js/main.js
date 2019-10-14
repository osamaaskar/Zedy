$(function(){
    "use strict"
	
	
	// add active class to navbar 
	
	$('.header .nav ul li a').click(function(){
		$(this).addClass('active').parent().siblings().find("a").removeClass("active");
	});
	
	//toggle class of hamurger menu
	
	$(".header .navbaro .humburger").click(function(){
		$(this).toggleClass("activato");
		$(".header .nav").toggleClass('activato2');
		$(".header").css("overflow","visible");
	});
	
	
	//Sticky navbar
	
	$(window).scroll(function(){
		var x=$(this).scrollTop();
		console.log(x);
		if(x >100){
			$(".header .navbaro").addClass("activetooo");
		}
		else{
			$(".header .navbaro").removeClass("activetooo");
		}
		
	});
	
	//Scroll To Section
	
	$(".header .nav ul li a").click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $('#'+$(this).data("scroll")).offset().top
    	},1000);
	});
	
	//Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 500){
          $('.sroll-button i').fadeIn();
        } else{
          $('.sroll-button i').fadeOut();
        }
      });
    //Scroll To Top By Button
      $('.sroll-button i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },1000);
      });
	
});
	
