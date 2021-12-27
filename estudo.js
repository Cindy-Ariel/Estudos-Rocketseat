const soma = function soma(number1, number2) {
	return number1 + number2;
};

let primeiro = 10;
let segundo = 30;
let terceiro = 3;

console.log(`A primeira fruta é ${primeiro}`);
console.log(`A segunda fruta é ${segundo}`);
console.log(`A soma das frutas é ${soma(primeiro, segundo)}`);

function saymyname() {
	console.log("Cindy");
}
saymyname();

//Arrow function

const saymyage = () => {
	console.log(23);
};

saymyage();

//Callback function

function saymyhistory(history) {
	console.log("My name is Cindy");
	history();
	console.log("I am 23 years old");
}
saymyhistory(() => {
	console.log("I live in Brazil");
});

//Function Constructor

function Person(name) {
	this.name = name;
	this.walk = function () {
		return this.name + " está andando";
	};
}
const Mayk = new Person("Mayk");
const Joao = new Person("João");

console.log(Mayk.walk());
console.log(Joao.walk());
