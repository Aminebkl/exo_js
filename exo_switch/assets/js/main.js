// # Les switchs : exercices

// ## 1. ToDo

// - À l'aide d'un prompt, récupérez un jour de la semaine.
// - Au moyen d'un `switch`, affichez ce que vous avez prévu de faire ce jour-ci.
//   > _Par exemple :_
//   >
//   > "On est vendredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us."

// let jour = prompt("Entrer un jour de la semaine")
// switch (jour) {
//     case "lundi":
//         console.log("On est " +jour+ "Tu as cours sur Discord Molengeek.")
//         break;
        
//     case "mardi":
//         console.log("On est " +jour+ "Tu dois acheter des crocs.")
//         break;
        
            
//     case "mercredi":
//         console.log("On est " +jour+ "Tu dois couper tes cheveux.") 
//         break;
        
//     case "Jeudi":
//         console.log("On est " +jour+ "Tu vas encore manger des pâtes.") 
//         break;
        
//      case "vendredi":
//         console.log("On est " +jour+ "Cousin vas faire les courses le frigo est vide.") 
//          break;
        
//     case "samedi":
//         console.log("On est " +jour+ "Vas te laver sa fait une semaine la.") 
//         break;
        
//         case "Dimanche":
//         console.log("On est " +jour+ "Ta pas honte tu te reveille à 17h?")
    
//     default : console.log("Ta pas compris le principe des jours dans une semaine ?")

// }




// ## 2. Sortez couverts

// - À l'aide d'un prompt, récupérez un type de météo.
// - Au moyen d'un `switch`, affichez une réaction appropriée au temps.
//   > _Par exemple :_
//   >
//   > "Il pleut. J'ai besoin d'un parapluie."

// let meteo = prompt("Quels temps fait t'il")
// switch (meteo) {
//     case "pleut":
//          console.log("Il " +meteo+ ". Prends une serviette")
//          break;
//          case "neige":
//             console.log("Il " +meteo+ ". Prends ton écharpe il gèle")
//             break;
//             case "ensoleiller":
//             console.log("Il fait" +meteo+ ". prends ton huile de bronzage go Okinawa beach")
//             break;
        
//         default : console.log("Gro demande moi le temps qu'i fait")
    
// }




// ## 3. Les 2 font la pair

// - À l'aide d'un prompt, récupérez un nombre.
// - Au moyen d'un `switch`, déterminez si le nombre donné est pair ou impair. Pensez à prendre en compte si l'utilisateur entre autre chose qu'un nombre.
// - Affichez une alert différente dans chaque situation.
//   > _Par exemple :_
//   >
//   > "42 est un nombre pair."

let nombre = prompt("Donne moi un nombre")
let pair = nombre%2
switch (pair) {
    case 0:
        alert(nombre + " est un nombre pair")
        break;
        default: alert(nombre + " est un nombre impair")
        break;
}


/* ## 4. Maths "avancée"

 - À l'aide d'un prompt, récupérez trois informations : un premier nombre, un opérateur mathématique et un second nombre.
 - Au moyen d'un `switch`, effectuez le calcul correspondant et affichez en le résultat sous un format : `nbr1 op nbr2` = `réponse`.
   > _Par exemple :_
   >
   > 6 \* 7 = 42*/

   let nombre = parseInt(prompt("donne moi un nombre"));
   let operation = prompt("donne moi une opérateur mathématique");
   let nombre2 = parseInt(prompt("donne moi un second nombre"));

   switch (operation) {
       case "*":
           alert(nombre*nombre2)
            break;
            case"+":
            alert(nombre+nombre2)
            break;
            case"/":
            alert(nombre/nombre2)
            break;
            case"-":
            alert(nombre-nombre2)
            break;
        default:
            alert("mets des chiffres boufons!")
            break;
   }