/* Desafio Classificador de nível de herói.
# o que deve ser utilizado:
- variáveis
- operadores
- laços de repetição
- estruturas de decisões

# Objetivo:
- criar uma variável para armazenar o nome e quantidade de experiência de um herói e depois utilizar uma estrutura de decisão para apresentar uma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve se exibir uma mensagem:
"O Herói de nome (nome do jogador) está no nível (nível do jogador)"*/

let nomePlayer = "JonnyThePy"
var nivelXp = 9.008
var rotuloXp = ""

if (nivelXp <= 1.000) {
        rotuloXp = "Ferro";
        console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}

if (nivelXp >= 1.001 && nivelXp <= 2.000) {
        rotuloXp = "Bronze";
        console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}
if (nivelXp >= 2.001 && nivelXp <= 5.000) {
        rotuloXp = "Prata";
        console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}
if (nivelXp >= 5.001 && nivelXp <= 7.000) {
    rotuloXp = "Ouro";
    console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}
if (nivelXp >= 7.001 && nivelXp <= 8.000) {
    rotuloXp = "Diamante";
    console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}
if (nivelXp >= 8.001 && nivelXp <= 10.000) {
    rotuloXp = "Platinum";
    console.log ("O herói " + nomePlayer + " está no nível " + rotuloXp)
}

else if (nivelXp > 10.001) {
    console.log ("O herói " + nomePlayer + " ultrapassou todos os níveis galáticos!")
}