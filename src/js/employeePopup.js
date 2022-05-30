export const initEmployeePopup = () => {
	if (!document.querySelector('.our-team')) return;

	const employees = [...document.querySelectorAll('.our-team__person')];
	const template = document.querySelector('.popup');
	const body = document.querySelector('body');

	for (const employee of employees) {
		const photoEl = employee.querySelector('.our-team__photo');
		const name = employee.querySelector('.our-team__name');
		const title = employee.querySelector('.our-team__title');
		const content = employee.dataset.description;
		const container = employee.querySelector('.our-team__photo-container');

		container.addEventListener('click', () => {
			const imageCopy = photoEl.cloneNode(true);
			imageCopy.classList.remove('our-team__photo');
			imageCopy.classList.add('popup__employee-image');

			template.textContent = '';
			template.innerHTML = `
            <div class="popup__employee-container">
                <div class="popup__employee-image-container">
                    
                </div>
                <div class="popup__employee-content">
                    <span class="popup__employee-icon">+</span>
                    <h3 class="popup__employee-name">${name.textContent}</h3>
                    <h5 class="popup__employee-title">${title.textContent}</h5>
                    <p class="popup__employee-description">${content}</p>
                    <span class="popup__employee-close">wróc na stronę główną ></span>
                </div>
            </div>
            `;

			const imageContainer = template.querySelector(
				'.popup__employee-image-container'
			);
			imageContainer.appendChild(imageCopy);

			template.classList.remove('popup--hidden');

			body.style.overflow = 'hidden';

			template.addEventListener('click', () => {
				template.classList.add('popup--hidden');
				body.style.overflow = 'scroll';
			});
		});
	}
};

export default initEmployeePopup;
