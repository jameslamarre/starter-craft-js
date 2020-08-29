class App {

	constructor() {
    this.body = document.querySelector('body');
		this.loader = document.querySelector('.loader');
		this.view = document.querySelector('.view-wrapper');

		this.bindGlobalEvents();
	}

	bindGlobalEvents() {
		window.addEventListener('load', this.turnOffLoader.bind(this));
	}

	turnOffLoader() {
		this.loader.parentNode.removeChild(this.loader);
		this.view.style.display = 'block';
	}

	// trackScroll() {
	// 	let offset = window.pageYOffset;
	// }
}

new App();
