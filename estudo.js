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
// const mayk = new Person("Mayk");
// const joao = new Person("João");

// console.log(Mayk.walk());
// console.log(Joao.walk());

//Manipulando Array

// let techs = ["Python", "js", "java", "C"];

// // adicionar um item no fim
// techs.push("Java Script");

// //adicionar um item no começo
// techs.unshift("PHP");

// //remover do fim
// techs.pop();

// //pegar somente alguns elementos, posiçao inicial x posição final.

// console.log(techs.slice(0, 1));

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

// let suanota = 61;

// function resultado() {
// 	if (suanota >= 90) {
// 		return "A";
// 	} else if (suanota >= 80) {
// 		return "B";
// 	} else if (suanota >= 70) {
// 		return "C";
// 	} else if (suanota >= 60) {
// 		return "D";
// 	} else if (suanota <= 59) {
// 		return "uma péssima nota";
// 	}
// 	return "VALOR INCORRETO";
// }

// console.log(`Sua nota foi ${suanota} e você tirou ${resultado()}.`);

//EXERCÍCIO PRATICANDO SOZINHA. (SISTEMA DE GASTOS FAMILIAR)

// let family = {
// 	receitas: [1500, 200, 100.5, 300.5],
// 	despesas: [200.1, 500, 100.6, 3000],
// };

// function soma(array) {
// 	let total = 0;
// 	for (let value of array) {
// 		total += value;
// 	}
// 	return total;
// }

// function calculo() {
// 	const calculoreceitas = soma(family.receitas);
// 	const calculodespesas = soma(family.despesas);

// 	const total = calculoreceitas - calculodespesas;
// 	const epositivo = total >= 1;
// 	let balancoteste = "negativo";
// 	if (epositivo) {
// 		balancoteste = "positivo";
// 	}
// 	console.log(`Seu saldo é ${balancoteste}:${total}`);
// }
// calculo();

//EXERCÍCIO PRATICANDO SOZINHA. (SISTEMA DE GASTOS FAMILIAR)

// const empresa = {
// 	funcionarios: [
// 		{
// 			funcionario_1: {
// 				nome: "João",
// 				sobrenome: "Paulo",
// 				profissao: "motorista",
// 				sexo: "masculino",
// 			},
// 		},
// 		{
// 			funcionario_2: {
// 				sexo: "feminino",
// 				nome: "Ana",
// 				sobrenome: "Clara",
// 				profissao: "faxineira",
// 			},
// 		},
// 		{
// 			funcionario_3: {
// 				nome: "Pedro",
// 				sexo: "masculino",
// 				sobrenome: "Bortollo",
// 				profissao: "medico",
// 			},
// 		},
// 	],
// 	nome: "Loop",
// 	cnpj: "39.636.696/0001-20",
// };

// function nomecompleto(nome, sobrenome) {
// 	let nomeesobrenome = nome + sobrenome;

// 	return nomeesobrenome;
// }
// nomecompleto(empresa.funcionarios.funcionario_1);
// nomecompleto();

// function calculo() {
// 	const calculoreceitas = soma(family.receitas);
// 	const calculodespesas = soma(family.despesas);

// 	const total = calculoreceitas - calculodespesas;
// 	const epositivo = total >= 1;
// 	let balancoteste = "negativo";
// 	if (epositivo) {
// 		balancoteste = "positivo";
// 	}
// 	console.log(`Seu saldo é ${balancoteste}:${total}`);
// }
// calculo();

//Scope

// const banana = "catura";
// const leite = "integral";

// function fazer_vitamina_de_banana(leite) {
// 	const banana = "prata";

// 	return ` Vitamina de banana feita com banana ${banana} e leite ${leite}.`;
// }
// console.log(
// 	`Os ingredientes que foram feito a vitamina foram banana ${banana} e leite ${leite}.`
// );

// console.log(fazer_vitamina_de_banana(leite));

// console.log(
// 	`Os ingredientes que foram feito a vitamina foram banana ${banana} e leite ${leite}.`
// );

//

// Callback Function

// const callback = (number2) => {
// 	console.log("Sou o numero um e estou antes da callback.");

// 	number2();

// 	console.log("Sou o numero tres e estou depois da callback.");
// };

// callback(() => {
// 	console.log("Sou o numero dois e estou dentro da callback.");
// });

// console.log(Number("9") + 5);

//Transformar uma cadeia de caracteres em elementos de um array

//  let word = "paralelepipedo";
//  console.log(Array.from(word));

// let nome = "cindy";
// console.log(Array.from(nome));

//Criar Array com construtor

// let myArray = new Array("a", "b", "c");
// console.log(myArray);

// New

// let endereço = new String("Rua flor,55 caiçara");
// endereço.complemento = "casa";

// console.log(endereço);

//Falsy e truthy

let soumaior = () => {
	idade = 50;
	const resultado = idade >= 18;
};
const idade = 2;
console.log(idade);
soumaior();
console.log(idade);

// if e else

// let age = 2;

// if (age > 18) {
// 	console.log("Você é maior de age");
// } else {
// 	console.log("Você é menor de age");
// }
