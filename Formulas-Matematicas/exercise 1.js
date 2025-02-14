//1. Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.

// Solicitando os números para o usuário
let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite um número:"));

// Fazendo as operações
let soma = num1 + num2;
let subtracao = num1 - num2;
let divisao = num1 / num2;
let multiplicacao = num1 * num2;

//mostra as informações na dela
alert(`
  A soma desse números é ${soma} 
  A Subtração desse números é ${subtracao}
  A Divisão desse números é ${divisao}
  A Multiplicação desse números é ${multiplicacao}`);
