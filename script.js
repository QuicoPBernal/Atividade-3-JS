// ATIVIDADE PRÁTICA

// Atividade 01
// Crie um programa que solicita ao usuário um número e, em seguida,
// conta regressivamente até zero, imprimindo cada número no console.
// O programa deve terminar quando atingir zero.
let num = Number(prompt("Digite um número: "))
for (let i = num; i >= 0; i--){
  console.log(i)
}

// Atividade 02
// Desenvolva um programa que solicita ao usuário que insira suas
// notas de uma série de disciplinas. O programa deve calcular e
// imprimir a média das notas, o usuário pode continuar adicionando
// notas até decidir parar.
let nota = Number(prompt("Digite a nota:__ Quando finalizar o cadastro das notas, digite fim"))
let soma = 0
let cont = 0
while (nota != "fim"){
  soma += Number(nota)
  cont++
  nota = prompt("Digite a nota:__ Quando finalizar o cadastro das notas, digite fim")
}
let media = soma / cont
console.log(`A média das notas é ${media}`)
  
// Atividade 03
// Peça ao usuário para inserir números continuamente e imprima o
// somatório dos números inseridos. O programa deve continuar executando
// até que o usuário insira zero.
let num = Number(prompt("Digite um número: "))
let soma = 0
while (num != 0){
  soma += num
  num = Number(prompt("Digite um número: "))
}
console.log(soma)

// Atividade 04
// Faça um programa que leia um nome de usuário e a sua senha e não
// aceite a senha igual ao nome do usuário, mostrando uma mensagem de
// erro e voltando a pedir as informações.
let nome = prompt("Digite seu nome: ")
let senha = prompt("Digite sua senha: ")
while (nome == senha){
  console.log("Erro! A senha não pode ser igual ao nome!")
  senha = prompt("Digite sua senha: ")
}
console.log("Cadastro realizado com sucesso!")

// Atividade 05
// Faça um programa que peça para 5 pessoas a sua idade, ao final o
// programa devera verificar se a média de idade da turma varia entre 0 e 25,
// 26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa,
// conforme a média calculada.
let idade = Number(prompt("Digite a idade: "))
let soma = 0
let cont = 0
while (cont < 5){
  soma += idade
  cont++
  idade = Number(prompt("Digite a idade: "))
}
let media = soma / cont
if (media >= 0 && media <= 25){
  console.log("A turma é jovem")
}

// Atividade 06
// Calcule a soma dos números de 1 a 50
let soma = 0
for (let i = 1; i <= 50; i++){
  soma += i
}
console.log(soma)

// Atividade 06
// Crie um programa que solicite um número de 1 a 7, representando
// o dia da semana. Use uma estrutura switch (ou equivalente) para
// imprimir o nome do dia correspondente.
let dia = Number(prompt("Digite um número de 1 a 7: "))
switch (dia){
  case 1:
    console.log("Domingo")
    break
  case 2:
    console.log("Segunda-feira")
    break
  case 3:
    console.log("Terça-feira")
    break
  case 4:
    console.log("Quarta-feira")
    break
  case 5:
    console.log("Quinta-feira")
    break
  case 6:
    console.log("Sexta-feira")
    break
  case 7:
    console.log("Sábado")
    break
  default:
    console.log("Número inválido")
}

// Atividade 07
// Escreva um programa que solicite um número e determine se ele é
// um número primo.
let num = Number(prompt("Digite um número: "))
let cont = 0
for (let i = 1; i <= num; i++){
  if (num % i == 0){
    cont++
    console.log("Não é número primo")
  }
}
if (cont == 2){
  console.log("É primo")
}


