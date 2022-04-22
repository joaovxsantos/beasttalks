var participantes = ["ThexD", "Dekis", "Vic"]


var advinhe = prompt("Quem você acha que estará no BeastTalks essa semana? Digite a primeira letra maiúscula")



if(advinhe==participantes[0] || advinhe==participantes[1] || advinhe==participantes[2]){
    var correto = alert("Acertou! Essa pessoa estará essa semana :)")
}
else//(advinhe !=participantes)
{
    var errado = alert("Infelizmente essa pessoa não estará no podcast dessa semana :(")
}
var sugestao = prompt("Deseja sugerir alguém para o BeastTalks? Digite no espaço abaixo: ")

alert("Voce sugeriu " + sugestao + ", Obrigado! Vamos tentar o máximo chama-lo")