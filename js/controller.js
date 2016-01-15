portfolio.controller('mainCtrl', function($scope, $location, $timeout) {
	var path = window.location.pathname;
	var nH;
	var vW = $(window).width();
	console.log("vW = ",vW);
	var numImg = $(".proj-previews img").length;

	//set preview img widths:
	if(numImg == 1 || path === "/projects/bubbalist") {
		$(".proj-previews img").css("width", "100%");
	}

	if(numImg == 2 && path != "/projects/bubbalist") {
		$(".proj-previews img").css("width", "49%");
	}

	if(numImg === 3) {
		$(".proj-previews img").width('32.25%');
	}

	if(numImg == 4) {
		$(".proj-previews img").css("width", "24%");
	}

	evalNameHeight = function(){
		path = window.location.pathname;
		nH = $('#name').height();
		
		if ($(window).scrollTop() < nH) {
			$('.nav').css('top', nH+40+'px');

			if($(window).width() <= 550) {
				$('.nav').css('top', nH+20+'px');
			}
		}

		if($(window).width() > 550) {
			$('#ngview').css('margin-top', nH+100+'px');
		}

		if($(window).width() <= 550) {
			$('#ngview').css('margin-top', nH+60+'px');
		}
	}

	evalNameHeight();

	$(window).resize(function(){
		evalNameHeight();
		vW = $(window).width();
	});

	//nav bar & categories scrolling/fading:
	$(window).bind('scroll', function () {
		//nav -
		if($(window).width() > 550) {
			if ($(window).scrollTop() > nH+40) {
				$('.nav').removeClass('absolute');
				$('.nav').addClass('fixed');
				$('.nav').css('top','0px');
			} else {
				$('.nav').addClass('absolute');
				$('.nav').removeClass('fixed');
				$('.nav').css('top', nH+40+'px');
			}
		}
		if($(window).width() <= 550) {
			if ($(window).scrollTop() > nH+20) {
				$('.nav').removeClass('absolute');
				$('.nav').addClass('fixed');
				$('.nav').css('top','0px');
			} else {
				$('.nav').addClass('absolute');
				$('.nav').removeClass('fixed');
				$('.nav').css('top',nH+20+'px');
			}
		}
	});

	//fade out other project previews on hover:
	$('.preview-img').hover(function() {
		$('.preview').not($(this)).stop().animate({opacity: .5}, 400);
	}, function() {
		$('.preview-img').stop().animate({opacity: 1});
	}, 100);

	//scroll back to top:
	// $(".scrolly").click(function () {
 //   	$("html, body").animate({scrollTop: 0}, 500);
	// }); 

	//fade out other links on hover:
	if($(window).width() > 600) {
		$('.nav-links').hover(function() {
			$('.nav-links').not($(this)).stop().animate({opacity: .25}, 400);
		}, function() {
			$('.nav-links').stop().animate({opacity: 1});
		}, 100);
	}

	if($(window).width() <= 600) {
		$('.nav-links').hover(function() {
		}, function() {
			$('.nav-links').stop().animate({opacity: 1});
		}, 100);
	}

	$(document).click(function(e) {
		path = window.location.pathname; //update path variable

		//page link indicators:
		if(path === "/contact"){
			$('#nav-contact').css("color",'#66E0FF');
			$('.nav-links').not("#nav-contact").css("color",'#a5a7ee');
			$('.nav-links').not("#nav-contact").css("opacity",'1');
		} 
		if(path === "/about"){
			$('#nav-about').css("color",'#66E0FF');
			$('.nav-links').not("#nav-about").css("color",'#a5a7ee');
			$('.nav-links').not("#nav-about").css("opacity",'1');
		}
		if(path === "/projects"){
			$('#nav-projects').css("color",'#66E0FF');
			$('.nav-links').not("#nav-projects").css("color",'#a5a7ee');
			$('.nav-links').not("#nav-projects").css("opacity",'1');
		}
		if(path === "/"){
			$('#nav-home').css("color",'#66E0FF');
			$('.nav-links').not("#nav-home").css("color",'#a5a7ee');
			$('.nav-links').not("#nav-home").css("opacity",'1');
		}
	});

});