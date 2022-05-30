import './scss/app.scss';
import initMenu from './js/menu';
import initSlider from './js/slider';
import initPricing from './js/pricing';
import initSliderPopup from './js/sliderPopup';
import initEmployeePopup from './js/employeePopup';

document.addEventListener('DOMContentLoaded', function () {
	initMenu();
	initSlider();
	initSliderPopup();
	initPricing();
	initEmployeePopup();
});
