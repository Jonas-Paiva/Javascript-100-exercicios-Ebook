//5. Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso/altura².

// Solicitando os números para o usuário
let num1 = parseFloat(prompt("Qual é o seu peso: "));
let num2 = parseFloat(prompt("Qual é a sua altura: "));


// Média Aritmética de 2 números
let IMC = parseFloat(num1 / (num2*num2));

//mostra as informações na dela
alert(`O seu IMC é ${IMC}`);