// 1 Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi le 1er caractere du prénom dans une alert.

/* let prenom = prompt("Quelle est ton prénom?")
alert(prenom.charAt(0)) */

// 2 Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi tout sauf le premier caractère du prénom dans une alert

/* let prenom = prompt("Quelle est ton prénom?")
alert(prenom.substring(1)) */

// 3 Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte si le prénom est sufisament long sinon on dit a l'utilisateur que son prénom était trop court. (prompt, pas de boucle)

/* let prenom = prompt("Quelle est ton prenom?") 

if (prenom.length >= 5) {
    alert(prenom.charAt(4))
}
else {
    alert("ton prenom est pas assez long")
}  */

// 4 Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte, si le prénom est suffisament long, sinon il renvoi le dernier caractère est prévient l'utilisateur que son prénom était trop court, qu'il n'était que de X caractère

/* let prenom = prompt("Quelle est ton prenom?")

if (prenom.length >= 5) {
    alert(prenom.charAt(4))
}
else {
    alert(prenom.substr(-1))
    alert("ton prenom est pas assez long il ne fait que " + "" + prenom.length + "" + " caractéres")
} */

// 5 Créer un programme qui renvoi ce que l'utilisateur rentre d'abord un minuscule (meme si il l'écrit en majuscule), puis la même chose en majuscule (meme si il l'écrit en minuscule), puis  avec la première lettre en majuscule et le reste en minuscule puis avec la premiere en minuscule et le reste en majuscule(toujours prompt sans boucle)

//let prenom = prompt("Quelle est ton prenom ?")
/* alert(prenom.toUpperCase)
alert(prenom.toLowerCase) */
//alert(prenom.charAt(0).toUpperCase()+prenom.slice(1).toLowerCase())
//alert(prenom.charAt(0).toLowerCase()+prenom.slice(1).toUpperCase())

