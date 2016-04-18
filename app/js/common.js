$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var carouselTop = $('.top-slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	});
	$('.top-slider__nav_prev').click(function() {
		carouselTop.trigger('prev.owl.carousel');
	});
	$('.top-slider__nav_next').click(function() {
		carouselTop.trigger('next.owl.carousel');
	});

	var carouselPerson = $('.silder-person').owlCarousel({
		loop: true,
		nav: false,
		items: 3
	});
	$('.silder-person__nav_prev').click(function() {
		$(this).closest('.silder-person-wrap').find('.silder-person').trigger('prev.owl.carousel');
	});
	$('.silder-person__nav_next').click(function() {
		$(this).closest('.silder-person-wrap').find('.silder-person').trigger('next.owl.carousel');
	});

	$('.program-nav__item').click(function() {
		$('.occupation.active').removeClass('active');
		$('.occupation').eq($(this).index()).addClass('active');
	});


});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}