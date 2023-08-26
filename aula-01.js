// --------------------EXERCICIO 1-----------------------------

let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let sexo = prompt('Digite seu sexo: ');

console.log(nome, idade, sexo);

// // --------------------EXERCICIO 2-----------------------------

let num1 = parseInt(prompt('Digite o primeiro numero: '));
let num2 = parseInt(prompt('Digite o segundo numero: '));
let num3 = parseInt(prompt('Digite o terceiro numero: '));
let num4 = parseInt(prompt('Digite o quarto numero: '));

let soma = num1 + num2 + num3 + num4;

console.log(soma)

// // --------------------EXERCICIO 3-----------------------------

let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));

let media = ((nota1 + nota2 + nota3) / 3);

console.log(media);

// // --------------------EXERCICIO 4-----------------------------

let salario = parseFloat(prompt('Digite seu salário: '));

let aumento = ((salario / 4) + salario);

console.log(aumento);

// --------------------EXERCICIO 5-----------------------------

let base = parseInt(prompt('Digite a base do triangulo: '));
let altura = parseInt(prompt('Digite a altura do triangulo: '));

let calculo = ((altura * base) / 2);

console.log(calculo);

// --------------------EXERCICIO 6-----------------------------

let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));

console.log(num1 * num2)

// --------------------EXERCICIO 7-----------------------------

let anoNascimento = parseInt(prompt('Digite seu ano de nascimento: '))

let anoAtual = new Date().getFullYear()

let mostraIdade = anoAtual - anoNascimento

console.log('Você tem ' + idade)

// --------------------EXERCICIO 8-----------------------------

// --------------------EXERCICIO 9-----------------------------

let num = parseInt(prompt('Digite um numero: '))
let quadrado = num **2
let cubo = num **3
let raiz = Math.sqrt(num)
let potencia = Math.pow(num, 10)

console.log('numero ao quadrado é ' + quadrado)
console.log('numero ao cubo é ' + cubo)
console.log('raiz quadrada do numero é ' + raiz)
console.log('numero a potencia de 10 é ' + potencia)