/* let valeur = prompt("entre une valeur")
while (valeur == "") {
    valeur = prompt("entre une valeur stp")
} */

/* let chiffre = parseInt(prompt("Donne un chiffre"))
while (chiffre <= 10) {
    chiffre = parseInt(prompt("mauvais"))
} */

/* let i = 0
while (i <= 20) {
    console.log(i)
    i++
    
} */

/* let i = 3
while (i <= 6) {
    console.log(i)
    i++
    
} */

/* let i = 0
while (i <= 20) {
    console.log(i)
    i+=2
} */

// exo 2
// let panierlegumes = [
//     "Carotte",
//     "Maïs",
//     "Tomate",
//     "Radis",
// ]
// let caisseLegumes = []


// while (panierlegumes.length>0) {
//     caisseLegumes.push(panierlegumes.shift())
// }
// console.log(panierlegumes)
// console.log(caisseLegumes)
//

// - ## Exo3

//   - Préparez une énigme, puis posez la à l'utilisateur via un prompt
//   - Faites une boucle `while` qui va vérifier si l'utilisateur répond correctement à l'énigme
//     - Tant qu'il se trompe, reposez la question.
//     - S'il a juste, faites une alerte qui le félicite.

// let riddle = prompt("Qu'est ce qui est jaune et qui attend ?")
// while (riddle!="Jonathan") {
//     riddle = prompt("wrong answer bruh")
// }
// alert("bien joué, malinx le lynx")


//v2
// let qst = prompt("Qui est le plus beau de la coding 17 ?")
// while (qst!= "Mahad") {
//     qst = prompt("reccomence qui est le plus beau de la C17 ?")
// }alert("Bien joué garçon")


// - ## Exo4

//   - Refaites l'exo 4 avec `do...while`

// let riddle 

// do {
//     riddle = prompt("Qu'est ce qui est jaune et qui attend ?")
    
// } while (riddle == "jonathan");
// alert("bien joué, malinx le lynx")


// - ## Exo5

//   - Créez une variable contenant l'année actuelle
//   - Créez un programme qui génère une année de façon aléatoire entre 1970 et 2018 (ex: -> `let randomYear`). L’utilisateur doit donner le bon âge en répondant à la question suivante :
//     > Si je suis né(e) en 1988(`randomYear`), quel âge ai-je aujourd’hui ?
//   - L’utilisateur a trois essais. S’il donne la bonne réponse ou qu’il échoue ses trois essais, on sort de la boucle
//   - Finir en affichant quelques chose de pertinant.

let annee = 2021

let randomyear =  Math.floor(Math.random() * (annee - 1970 +1)) + 1970;

let qst

let rep =  annee - randomyear

let i = 1

do {
    parseInt(prompt("Si je suis né(e) en "+randomYear+", quel âge ai-je aujourd’hui ?"))
    i++

} while (qst !== rep && i<=3);
if (qst == reponse) {
    alert("c'est pertinant")
} else {
(alert("c'est pas ça")
}
