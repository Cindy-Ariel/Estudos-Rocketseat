// const soma = function soma(number1, number2) {
// 	return number1 + number2;
// };

// let primeiro = 10;
// let segundo = 30;
// let terceiro = 3;

// console.log(`A primeira fruta é ${primeiro}`);
// console.log(`A segunda fruta é ${segundo}`);
// console.log(`A soma das frutas é ${soma(primeiro, segundo)}`);

// function saymyname() {
// 	console.log("Cindy");
// }
// saymyname();

//Arrow function

// const saymyage = () => {
// 	console.log(23);
// };

// saymyage();

//Callback function

// function saymyhistory(history) {
// 	console.log("My name is Cindy");
// 	history();
// 	console.log("I am 23 years old");
// }
// saymyhistory(() => {
// 	console.log("I live in Brazil");
// });

//Function Constructor

// function Person(name) {
// 	this.name = name;
// 	this.walk = function () {
// 		return this.name + " está andando";
// 	};
// }
// const Mayk = new Person("Mayk");
// const Joao = new Person("João");

// console.log(Mayk.walk());
// console.log(Joao.walk());

//Manipulando Array

// let techs = ["Python", "js", "java", "C"];

//adicionar um item no fim
// techs.push("Java Script");

//adicionar um item no começo
// techs.unshift("PHP");

//remover do fim
//techs.pop();

//pegar somente alguns elementos, posiçao inicial x posição final.

//console.log(techs.slice(0, 1));

//remover um ou mais itens em qualquer posiçao do array, posição x quantidade,comecando do 0.
//techs.splice(1, 2);

//encontrar a posiçao de um elemento do array
// let index = techs.indexOf("js");
// techs.splice(index, 1);

// console.log(techs);

// console.log("one" === 1);

//Operador condicional ternário

// let pão = true;
// let queijo = false;

// const nicebrakfast = pão && queijo ? "cafe top" : "cafe ruim";
// console.log(nicebrakfast);

// Maior de 18

// const age = 18;
// const canDrive = age >= 18 ? "pode dirigir" : "nao pode dirigir";

// console.log(canDrive);

//if .. else básico

// let temperatura = 36.6;

// if (temperatura >= 37) {
// 	console.log("Você esta com febre.");
// } else {
// 	console.log("Você está saudável.");
// }

//EXERCÍCIO PRATICANDO SOZINHA. (TRANSFORMAR NOTAS ESCOLARES)

let suanota = 61;

function resultado() {
	if (suanota >= 90) {
		return "A";
	} else if (suanota >= 80) {
		return "B";
	} else if (suanota >= 70) {
		return "C";
	} else if (suanota >= 60) {
		return "D";
	} else if (suanota <= 59) {
		return "uma péssima nota";
	}
	return "VALOR INCORRETO";
}

console.log(`Sua nota foi ${suanota} e você tirou ${resultado()}.`);

//EXERCÍCIO PRATICANDO SOZINHA. (SISTEMA DE GASTOS FAMILIAR)

let family = {
	receitas: [1500, 200, 100.5, 300.5],
	despesas: [200.1, 500, 100.6, 3000],
};

function sum(array) {
	let total = 0;
	for (let value of array) {
		total += value;
	}
	return total;
}

function calculo() {
	const calculoreceitas = sum(family.receitas);
	const calculodespesas = sum(family.despesas);

	const total = calculoreceitas - calculodespesas;
	const itsOk = total >= 0;
	let balancoteste = "negativo";
	if (itsOk) {
		balancoteste = "positivo";
	}
	console.log(`Seu saldo é ${balancoteste}:${total}`);
}
calculo();
