
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