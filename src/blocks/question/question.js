const question = {
	init() {
		$('.questions__item').eq(1).hide();

		$('body').on('click', '.main-btn--hdiw', event => {
			let elem = event.target;
			event.preventDefault();

			if (!$(elem).hasClass('main-btn--hdiw')) {
				elem = $(elem).closest('.main-btn--hdiw');
			}
			
			if (!$(elem).hasClass('main-btn--active')) {
				$(elem)
					.addClass('main-btn--active')
					.siblings()
					.removeClass('main-btn--active');
			
				$('.questions__item')
					.eq($(elem).index() - 2)
					.fadeIn(300)
					.siblings()
					.fadeOut(300);

				$('.questions__item')
					.find('.question__body')
					.slideUp(300);
			}
		});

		$('body').on('click', '.question__header', event => {
			let elem = event.target;
			event.preventDefault();

			if (!$(elem).hasClass('question__header')) {
				elem = elem.closest('.question__header');
			}
			
			$(elem)
				.siblings('.question__body')
				.slideToggle(300)
				.closest('.question')
				.siblings('.question')
				.find('.question__body')
				.slideUp(300);
		});
	},
};

module.exports = question;