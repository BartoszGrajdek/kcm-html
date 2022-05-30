export const initMenu = () => {
	if (!document.querySelector('.header')) return;

	const button = document.querySelector('.header__close-button');
	const menu = document.querySelector('.nav__mobile');

	button.addEventListener('click', () => {
		button.classList.toggle('active');
		menu.classList.toggle('active');
	});
};

export default initMenu;
