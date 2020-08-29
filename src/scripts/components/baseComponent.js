class BaseComponent {

	constructor(obj) {
		if ( obj.el ) this.el = obj.el;
		if ( obj.id ) this.id = obj.id;
		this.children = new Map();
		this._data = obj;
		this.preconfigure();
		this.bindEvents();
	}

	constructChildren() {
	}

	preconfigure() {
	}

	bindEvents() {
	}

	destroy() {
		for(var c = 0; c < this.children.length; c++) {
			this.children[c].destroy();
		}
	}
}

export default BaseComponent;
