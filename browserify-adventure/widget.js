var domify = require('domify');

module.exports = function () {
	return new Widget();
}

class Widget {
	constructor() {
		this.elem = domify('<div>Hello <span class="name"></span>!</div>');
	}
	
	setName (name) {
		this.elem.querySelector('.name').innerHTML = name;
	}

	appendTo (target) {
		target.appendChild(this.elem);	
	}
}
