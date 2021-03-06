let button = document.querySelector('.button')
let numText = document.querySelector('.numText')

button.onclick = function calc() {
	let math = prompt('введите оператор', 'сложение, вычитание, деление, умножение, возведение в степень'); 
function Sum(numOne, numTwo) {
	let answer = parseInt(numOne) + parseInt(numTwo);
	numText.textContent = 'ваше число: ' + answer;
}

function Difference(numOne, numTwo) {
	let answer = parseInt(numOne) - parseInt(numTwo);
	numText.textContent = 'ваше число: ' + answer;
}

function Division(numOne, numTwo) {
	let answer = parseInt(numOne) / parseInt(numTwo);
	numText.textContent = 'ваше число: ' + answer;
}

function Multiplication(numOne, numTwo) {
	let answer = parseInt(numOne) * parseInt(numTwo);
	numText.textContent = 'ваше число: ' + answer;
}

function Degree(numOne, numTwo) {
	let answer = Math.pow(parseInt(numOne), parseInt(numTwo))
	numText.textContent = 'ваше число: ' + answer;
}

if (math == 'сложение') {
	Sum(prompt('введите первое число'),prompt('введите второе число'))
} else if (math == 'вычитание') {
	Difference(prompt('введите первое число'),prompt('введите второе число'))
} else if (math == 'деление') {
	Division(prompt('введите первое число'),prompt('введите второе число'))
} else if (math == 'умножение') {
	Multiplication(prompt('введите первое число'),prompt('введите второе число'))
} else if (math == 'возведение в степень') {
	Degree(prompt('введите число'),prompt('введите степень'))
} else {
	alert('такого оператора не существует')
}
}