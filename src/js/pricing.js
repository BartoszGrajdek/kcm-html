export const initPricing = () => {
	if (!document.querySelector('.pricing')) return;

	const container = document.querySelector('.pricing');
	const button = document.querySelector('.pricing__open-button');
	const lists = [...document.querySelectorAll('.pricing__list')];
	const doctors = [...document.querySelectorAll('.pricing__doctor')];

	for (let i = 1; i < lists.length; i++) {
		lists[i].classList.add('pricing__list--hidden');
		doctors[i].classList.add('pricing__doctor--hidden');
	}

	const maxHeight = container.offsetHeight;
	container.style.maxHeight = maxHeight + 'px';

	const hiddenLists = [
		...document.querySelectorAll('.pricing__list--hidden'),
	];
	const hiddenDoctors = [
		...document.querySelectorAll('.pricing__doctor--hidden'),
	];
	container.style.overflow = 'hidden';

	button.addEventListener('click', () => {
		console.log('fired');
		for (const list of hiddenLists) {
			list.classList.remove('pricing__list--hidden');
		}

		for (const doc of hiddenDoctors) {
			doc.classList.remove('pricing__doctor--hidden');
		}

		button.classList.add('pricing__open-button--hidden');
		container.style.overflow = 'visible';
	});

	document.addEventListener('click', e => {
		var path = e.path || (e.composedPath && e.composedPath());
		const options = document.querySelector('.pricing__options');
		if (path.includes(options)) return;
		for (const list of hiddenLists) {
			list.classList.add('pricing__list--hidden');
		}

		for (const doc of hiddenDoctors) {
			doc.classList.add('pricing__doctor--hidden');
		}

		button.classList.remove('pricing__open-button--hidden');
		container.style.overflow = 'hidden';
	});
};

export default initPricing;
