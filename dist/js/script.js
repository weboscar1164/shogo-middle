// swiper
const swiper = new Swiper(".swiper", {
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

// jQuery
$(function () {
	//logoの表示
	$(window).on("load", function () {
		$("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
		$("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
	});

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

	// js-validate
	$.validator.addMethod(
		"phoneNum",
		function (value, element) {
			return this.optional(element) || /\d{2,4}-?\d{2,4}-?\d{4}/.test(value);
		},
		"有効な電話番号を入力してください"
	);

	$.validator.addMethod(
		"addressNum",
		function (value, element) {
			return this.optional(element) || /^[0-9]{3}-?[0-9]{4}$/.test(value);
		},
		"有効な郵便番号を入力してください"
	);

	$("form").validate({
		rules: {
			about: {
				required: true,
			},
			name: {
				required: true,
			},
			address: {
				addressNum: true,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				phoneNum: true,
				required: true,
			},
			contact: {
				required: true,
			},
		},

		messages: {
			about: {
				required: "必須項目です。",
			},
			name: {
				required: "必須項目です。",
			},
			address: {
				number: "数字を入力してください。",
			},
			email: {
				required: "必須項目です。",
				email: "メールアドレスを入力してください。",
			},
			phone: {
				required: "必須項目です。",
			},
			contact: {
				required: "必須項目です。",
			},
		},

		errorClass: "validationError",

		errorElement: "span",

		errorPlacement: function (error, element) {
			error.appendTo(element.data("error_place"));
		},

		onfocusout: function (element) {
			$(element).valid();
		},
	});

	if (validator.valid()) {
		$(".contact_form_button").addClass("contact_form_button_active");
	} else {
		validator.focusInvalid();
		$(".contact_form_button").removeClass("contact_form_button_active");
	}
});
