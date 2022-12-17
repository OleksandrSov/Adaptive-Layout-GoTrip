// слайдер
const owl = $('.owl-carousel');
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1,
	items: 3,
	responsive: {
	// breakpoint from 0 up
	0 : {

	},
	// breakpoint from 850 up
	850 : {

	},
	// breakpoint from 768 up
	1000 : {
		margin: 20,
	},
	// breakpoint from 768 up
	1200 : {
		margin: 30,
	} 
}
});

// Go to the previous item
$('.slider__btn--prev').click(function() {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	owl.trigger('prev.owl.carousel');
});

// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header__nav');
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('header__nav--mobile');
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};