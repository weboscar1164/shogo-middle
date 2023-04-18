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
			slidesPerView: 1.2,
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
	//header_nav_toggle操作
	const openNavToggle = $(".js_open_nav_toggle");
	const isNavOpen = "header_nav_toggle_open";
	const navSp = $(".header_nav_sp");
	const openNav = "header_nav_sp_open";

	openNavToggle.click(function () {
		if ($(this).hasClass(isNavOpen)) {
			$(this).removeClass(isNavOpen);
			navSp.removeClass(openNav);
		} else {
			$(this).addClass(isNavOpen);
			navSp.addClass(openNav);
		}
	});

	//ページ内リンク操作
	const navLink = $('a[href^="#"]');

	navLink.click(function () {
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? "html" : href);
		let position = target.offset().top;

		console.log(position);
		$("body,html").animate(
			{
				scrollTop: position,
			},
			1000,
			"swing"
		);

		setTimeout(function () {
			if (openNavToggle.hasClass(isNavOpen)) {
				openNavToggle.removeClass(isNavOpen);
				navSp.removeClass(openNav);
			}
			// else {
			// 	openNavToggle.addClass(isNavOpen);
			// 	navSp.addClass(openNav);
			// }
		}, 1000);

		return false;
	});

	//faq操作
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
