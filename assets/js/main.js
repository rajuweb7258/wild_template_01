jQuery(document).ready(function($) {
	$(".header").owlCarousel({
		items : 1,
		loop : true,
		autoplay :true,
		dots : true,
		nav :false,
	});

	$(".slider-area").owlCarousel({
		items :1,
		loop: true,
		autoplay: true,
		nav: true,
		dots: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	});

	$(".footer-top-carousel").owlCarousel({
		items: 8,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
	});

	$(".counter").counterUp({
    	delay: 10,
    	time: 1000,
	});
});