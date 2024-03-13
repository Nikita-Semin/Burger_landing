let links = document.querySelectorAll('a');
let sections = document.querySelectorAll('section');

document.addEventListener('DOMContentLoaded', function () {
	links.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			if (this.classList.contains('active')) {
				return;
			}

			links.forEach(function (link) {
				link.classList.remove('active');
			});

			sections.forEach(function (section) {
				section.classList.remove('active');
			});

			this.classList.add('active');
			document.querySelector(this.getAttribute('href')).classList.add('active');
		});
	});
});

$(document).ready(function () {
	$('#menuIcon').click(function () {
		$('.navigation-menu').toggleClass('active');
	});

	let tabs = $('.tabs-widget');
	let tabTitles = [];
	tabs.find('.tabs-content').each(function () {
		tabTitles.push($(this).data('tab-title'));
	});
	let ul = $('<ul class="tabs-menu"></ul>');
	$.each(tabTitles, function (index, title) {
		let li = $('<li><span>' + title + '</span></li>');
		li.on('mouseover', function () {
			tabs.find('.tabs-content').removeClass('active');
			$(this).addClass('active');
			tabs
				.find('.tabs-content[data-tab-title="' + title + '"]')
				.addClass('active');
		});
		ul.append(li);
	});
	tabs.find('.tabs-list').append(ul);
	tabs.find('.tabs-content:first').addClass('active');
});

(function ($) {
	$(document).ready(function () {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			loop: true,
			dots: false,
			margin: 10,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			},
		});

		$('.owl-next').click(function () {
			owl.trigger('next.owl.carousel');
		});

		$('.owl-prev').click(function () {
			owl.trigger('prev.owl.carousel');
		});
	});
})(jQuery);
