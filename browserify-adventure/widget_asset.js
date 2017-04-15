var domify = require('domify');
var insertCss = require('insert-css');
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = function () {
	return new Widget();
}

class Widget extends EventEmitter {
	constructor() {
		super();
		var htmlString = '<form class="send"><textarea type="text" name="msg"></textarea><input type="submit" value="submit"></form>';
		this.elem = domify(htmlString);
	}

	appendTo (target) {
		var self = this;
		target.appendChild(this.elem);	
		insertCss('.send textarea { background-color: purple; color: yellow; }');
		this.elem.addEventListener('submit', function (ev) {
			ev.preventDefault();
			self.emit("message", target.querySelector('textarea').value);
		});
	}

}

