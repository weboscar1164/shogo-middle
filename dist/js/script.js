const swiper = new Swiper(".swiper", {
	// Optional parameters
	loop: true,
	slidesPerView: 4,
	spaceBetween: 24,
	centeredSlides: true,
	breakpoints: {
		// スライドの表示枚数：500px以上の場合
		// 500: {
		// 	loop: true,
		// 	slidesPerView: 3,
		// 	// centeredSlides: true,
		// },
		// 800: {
		// 	loop: true,
		// 	slidesPerView: 4,
		// 	centeredSlides: true,
		// },
	},
});
