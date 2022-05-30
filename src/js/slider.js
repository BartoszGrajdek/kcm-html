import Swiper, { Autoplay } from 'swiper';

export const initSlider = () => {
	Swiper.use([Autoplay]);
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 2000,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			450: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});
};

export default initSlider;
