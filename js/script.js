$(document).ready(function() {

	AOS.init();

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});
	
	// Hamburger START
	$('body').on('click', '.hamburger', function() {
		$(this).toggleClass('is-active');
		$('.menu-static').slideToggle(500);
	});
    // Hamburger END

	// Header dynamic START
	$(window).on('scroll', function() {
		var top = $(document).scrollTop();
		var headerHeight = $('.header').height();
		var menu = $('.menu-static');
		var menuDynamic = $('.menu-dynamic');
    var x = window.matchMedia("(max-width: 768px)");

    if (top < headerHeight) {
    	menuDynamic.removeClass('trf-none');
    }
    else if (x.matches) {
    	return false;
    }
    else {
    	menuDynamic.addClass('trf-none');
    }
	});
	// Header dynamic END


	// Landing owl carousel START
	$(function() {
		var owl = $(
			'.features__landing .carousel__wrap'
			);
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots',
		});

		// next carousel
    $('.features__landing .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features__landing .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Landing owl carousel END


	// Online magazin owl carousel START
	$(function() {
		var owl = $('.features-content__online-magazine .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-magazine',
		});

		// next carousel
    $('.features-content__online-magazine .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__online-magazine .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	});
	// Online magazin owl carousel END

	// Cashback owl carousel START
	$(function() {
		var owl = $('.features-content__cashback .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-cashback',
		});

		// next carousel
    $('.features-content__cashback .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__cashback .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Cashback owl carousel END

	// Catalog owl carousel START
	$(function() {
		var owl = $('.features-content__catalog .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-catalog',
		});

		// next carousel
    $('.features-content__catalog .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__catalog .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Catalog owl carousel END

	// Online recording owl carousel START
	$(function() {
		var owl = $('.features-content__online-recording .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-online-recording',
		});

		// next carousel
    $('.features-content__online-recording .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__online-recording .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Online recording owl carousel END
	
});