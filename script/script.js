'use strict';

var buttons = document.getElementById('buttons'),
	operators = document.getElementById('operators'),
	operator = operators.getElementsByTagName('input'),
	inputs = buttons.getElementsByTagName('input'),
	display = document.getElementById('display'),
	cancel = document.getElementById('cancel'),
	savedVal = document.getElementById('showSavedValue'),
	eq = document.getElementById('eq'),
	isClicked = false;

var buttonVal, operatorVal, memory, sender, result;

for (var i = 0; i < inputs.length; i++) {
	inputs[i].onclick = (function(e) {
		return function(e) {
			if (this.value == '.') {
				dotFunc(this.value)
			} else {
				addDigit(this.value)
			}
		}
	})();
}

function dotFunc() {
	if (display.value == '0' && display.value.indexOf('.') == -1) {
		return display.value = '0.'
	} else {
		if (display.value.indexOf('.') == -1) {
			return display.value = display.value + '.';
		}
	}
}

function addDigit(arg) {
	if (display.value == '0' && display.value.indexOf('.') == -1) {
		display.value = arg;
		return display.value;
	} else {
		return display.value += arg;
	}
}

for (var i = 0; i < operator.length; i++) {		
	operator[i].onclick = function (e) {
		var op = this.value;
		memory = display.value;

		display.value = '0';
		sender = {
			mem: memory,
			op: op
		}

		return sender;
	}
}

eq.onclick = function() {
	var first = parseFloat(sender.mem),
		second = parseFloat(display.value);

	if (sender.op == '+') {
		return display.value = first + second;
	} else if(sender.op == '-') {
		return display.value = first - second;
	} else if(sender.op == '/') {
		return display.value =  first / second
	} else {
		return display.value = first * second
	}
}



















