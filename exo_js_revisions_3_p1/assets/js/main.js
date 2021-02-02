//1. Créer un tableau avec 9 prénoms
let tableau = ["Mohammed", "Yasmina", "Amine", "Salim", "Abdel", "Majda", "Bilal", "Laurie","yahya"]
//2. Affiche chaque élément dans un console log

/* tableau.forEach(element => {
    console.log(element)
}); */

//3. Affiche chaque premiere lettre de chaque élément dans un console log

/* tableau.forEach(element =>  {
    console.log(element.charAt(0))
}); */

//4. Affiche chaque seconde lettre de chaque élément dans un console log

/* tableau.forEach(element => {
    console.log(element.charAt(1));
}); */

//5. Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme exemple : si le mot et bonjour alors on devra affiché obonjour

/* tableau.forEach(element => {
    console.log(element.charAt(1)+element);
}); */

//6. Affiche tous les prénoms dans un console log dont l'indice est pair 

/* tableau.forEach(element => {

    if (tableau.indexOf(element) %2 == 0) {
        console.log(element);
    } 
}); */

// ou

/* tableau.forEach((element,index) => {

    if (index %2 == 0) {
        console.log(element);
    } 
}); */