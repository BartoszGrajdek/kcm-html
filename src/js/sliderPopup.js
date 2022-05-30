export const initSliderPopup = () => {
	if (!document.querySelector('.slider__slide')) return;

	const slides = [...document.querySelectorAll('.slider__slide')];
	const template = document.querySelector('.popup');
	const body = document.querySelector('body');

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			const imageEl = slide.querySelector('img');
			const imageCopy = imageEl.cloneNode(true);
			imageCopy.classList.remove('slider__photo');

			template.textContent = '';
			template.appendChild(imageCopy);
			template.classList.remove('popup--hidden');

			body.style.overflow = 'hidden';

			template.addEventListener('click', () => {
				template.classList.add('popup--hidden');
				body.style.overflow = 'scroll';
			});
		});
	}
};

export default initSliderPopup;
