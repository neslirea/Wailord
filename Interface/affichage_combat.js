function AfficherAttaque(Attaquant, Attaque){
    
    const p = document.getElementById("Affichage");
        p.innerText += Attaquant.nom + " utilise " + Attaque.nom +"!\n";
}

function AfficherEfficacite(Efficacite){
    const p = document.getElementById("Affichage");

    if (Efficacite<1){
        p.innerText += "Ce n'est pas très efficace...\n";
    } else if (Efficacite==1){

    } else {
        p.innerText += "C'est super efficace ! \n";
    }
}