(function ($) {$(document).ready(function() {
	// var path = window.location.pathname;
	// var nH;
	// var vW = $(window).width();
	// console.log("vW =",vW);

	// evalNameHeight = function(){
	// 	nH = $('#name').height();
	// 	// console.log("image height is",nH);
	// 	if($(window).width() > 600) { nH += 40; }
	// 	if($(window).width() <= 600) { nH += 10; }
	// 	console.log("space provided should be",nH);
	// 	$('.nav').css('top', nH+'px');
	// 	$('#ngview').css('margin-top', nH+'px');
	// }

	// evalNameHeight();

	// $('#ngview').css('margin-top', nH+'px');

	// $(window).resize(function(){
	// 	evalNameHeight();
	// 	var vW = $(window).width();
	// 	console.log("vW =",vW);
	// });

	// $(document).click(function(e) {
	// 	path = window.location.pathname; //update path variable
	// 	//page link indicators:
	// 	if(path === "/contact"){
	// 		$('#nav-contact').css("color",'#66E0FF');
	// 		$('.nav-links').not("#nav-contact").css("color",'#a5a7ee');
	// 		$('.nav-links').not("#nav-contact").css("opacity",'1');
	// 	} 
	// 	if(path === "/about"){
	// 		$('#nav-about').css("color",'#66E0FF');
	// 		$('.nav-links').not("#nav-about").css("color",'#a5a7ee');
	// 		$('.nav-links').not("#nav-about").css("opacity",'1');
	// 	}
	// 	if(path === "/projects"){
	// 		$('#nav-projects').css("color",'#66E0FF');
	// 		$('.nav-links').not("#nav-projects").css("color",'#a5a7ee');
	// 		$('.nav-links').not("#nav-projects").css("opacity",'1');
	// 	}
	// 	if(path === "/"){
	// 		$('#nav-home').css("color",'#66E0FF');
	// 		$('.nav-links').not("#nav-home").css("color",'#a5a7ee');
	// 		$('.nav-links').not("#nav-home").css("opacity",'1');
	// 	}
	// });

	// // setTimeout(function(){
	// // 	$('#backsplash').animate({
	// // 		'opacity':1
	// // 	}, function(){
	// // 		setTimeout(function(){
	// // 			$('#name').animate({'opacity':1})
	// // 		},300);
	// // 	});
	// // })

	// //nav bar & categories scrolling/fading:
	// $(window).bind('scroll', function () {
	// 	curNameHeight = nH;
	// 	//nav -
	// 	if($(window).width() > 600) {
	// 		if ($(window).scrollTop() > nH) {
	// 			$('.nav').removeClass('absolute');
	// 			$('.nav').addClass('fixed');
	// 			$('.nav').css('top','0px');
	// 		} else {
	// 			$('.nav').addClass('absolute');
	// 			$('.nav').removeClass('fixed');
	// 			$('.nav').css('top', nH+'px');
	// 		}
	// 	}
	// 	if($(window).width() <= 600) {
	// 		if ($(window).scrollTop() > nH) {
	// 			$('.nav').removeClass('absolute');
	// 			$('.nav').addClass('fixed');
	// 			$('.nav').css('top','0px');
	// 		} else {
	// 			$('.nav').addClass('absolute');
	// 			$('.nav').removeClass('fixed');
	// 			$('.nav').css('top',nH+'px');
	// 		}
	// 	}
	// });

	// //scroll back to top:
	// $("#nav-home,#nav-projects,#nav-about,#nav-contact,#nav-resume,#link").click(function () {
 //   	$("html, body").animate({scrollTop: 0}, 500);
	// });

	// //fade out other links on hover:
	// if($(window).width() > 600) {
	// 	$('.nav-links').hover(function() {
	// 		$('.nav-links').not($(this)).stop().animate({opacity: .25}, 400);
	// 	}, function() {
	// 		$('.nav-links').stop().animate({opacity: 1});
	// 	}, 100);
	// }

	// if($(window).width() <= 600) {
	// 	$('.nav-links').hover(function() {
	// 	}, function() {
	// 		$('.nav-links').stop().animate({opacity: 1});
	// 	}, 100);
	// }

});}(jQuery));