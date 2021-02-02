/* let codingSchool17 = []

let ajouterEleve = (eleve) => {
codingSchool17.push(eleve)
console.log(eleve + " entre dans la clase");
}

let retirerEleve = (eleve) => {
codingSchool17.splice(codingSchool17.indexOf(eleve), 1)
console.log(eleve + " sort de la classe");
}

ajouterEleve("Antoine");
ajouterEleve("Saïd");
ajouterEleve("Abdel");
ajouterEleve("Nathan");
ajouterEleve("Yasmina");
retirerEleve("Abdel")
ajouterEleve("Gauthier");
retirerEleve("Saïd")
retirerEleve("Yasmina") */

let estPremier = (nombre) => {

    if (nombre<2) {
      return "Le nombre n'est pas premier";
    }
    
    for (let i = 2; i < nombre; i++) { 
        if (nombre % i == 0) return "Le nombre n'est pas premier";
    }
    
    return "Le nombre est premier";
}

console.log(estPremier(prompt("Entrer un nombre?")))