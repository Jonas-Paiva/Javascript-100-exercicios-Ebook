//3. Crie um programa que calcule e exiba a média aritmética de três notas informadas pelo usuário.

// Solicitando os números para o usuário
let num1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
let num2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
let num3 = parseFloat(prompt("Digite a nota do 3º bimestre:"));

// Média Aritmética de 2 números
let media = (num1 + num2 + num3) / 3;

//mostra as informações na dela
alert(`A média das notas é ${media}`);
