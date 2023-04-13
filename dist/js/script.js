const swiper = new Swiper(".swiper", {
	// Optional parameters
	// loop: true,
	// slidesPerView: 4,
	// spaceBetween: 24,
	// centeredSlides: true,
	breakpoints: {
		// スライドの表示枚数：500px以上の場合
		0: {
			loop: true,
			spaceBetween: 24,
			slidesPerView: 1.5,
			centeredSlides: true,
		},
		500: {
			loop: true,
			spaceBetween: 24,
			slidesPerView: 2,
			centeredSlides: true,
		},
		768: {
			loop: true,
			spaceBetween: 24,
			slidesPerView: 4,
			centeredSlides: true,
		},
	},
});

$(function () {
	const openAnswerToggle = $(".js_open_answer_toggle");
	const answer = $("answer");
	let isOpen = "js_is_open";
	openAnswerToggle.click(function () {
		if ($(this).hasClass(isOpen)) {
			$(this).next(answer).slideUp();
			$(this).removeClass(isOpen);
		} else {
			$(this).next(answer).slideDown();
			$(this).next(answer).fadeIn();
			$(this).addClass(isOpen);
		}
	});
});
