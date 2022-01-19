class Combat{
    // On considère que le pok1 est celui de l''utilisateur
    constructor(Pokemon1, Pokemon2){
        this.pokemon1 = Pokemon1;
        this.pokemon2 = Pokemon2;
    }

    Commencer(){
        // On lance des tours jusqu'à ce qu'un des deux pokémons n'aie plus de PV
       
        while ((this.pokemon1.pv>0)&&(this.pokemon2.pv>0)){
            //On choisit les attaques
            let att1 = this.ChoixUser();
            let att2 = this.ChoixIA();

            this.Tour(att1, att2);
            const p = document.getElementById("Affichage");
            p.innerText += "\n" + this.pokemon1.nom +" : "+ this.pokemon1.pv +" PV \n";
            p.innerText += "" + this.pokemon2.nom +" : "+ this.pokemon2.pv +" PV \n\n";
        }
        // Appel de la fonction fin
        this.Fin();
    }

    Tour(att1, att2){

        //On teste quel pokémon doit commencer (rapidité)
        /**
            Pour savoir quel Pokémon attaque en premier, on regarde l'ordre de priorité de leurs attaques. 
            Si elles ont la même priorité, alors on regarde la statistique de Vitesse des deux Pokémon.
            Enfin, s'ils ont la même Vitesse, il y a ce qu'on appelle un "Speed Tie", et chacun a alors 
            une chance sur deux d'attaquer en premier.
        */
        let isUserFirst = 1;
        if (att1.vitesse==att2.vitesse){
            if(this.pokemon1.vitesse==this.pokemon2.vitesse){
                let random = Math.floor(Math.random() * 2);
                if (random==0){
                    isUserFirst = 0;
                } else {
                    isUserFirst = 1;
                }
            } else if(this.pokemon1.vitesse<this.pokemon2.vitesse){
                isUserFirst = 0;
            } else {
                isUserFirst = 1;
            }
        }else if (att1.vitesse<att2.vitesse){
            isUserFirst = 0;
        }else {
            isUserFirst =1;
        }

        // Soit il s'agit de l'IA, soit de l'utilisateur
        if(isUserFirst==1){
            // On effectue la première attaque
            this.Attaque(this.pokemon1, this.pokemon2, att1);

            //Si le pokemon en face n'a plus de PV, c'est la fin du combat        
            //Sinon, on choisit et effectue la deuxième attaque
            if (this.pokemon2.pv>0){
                this.Attaque(this.pokemon2, this.pokemon1, att2);
            }

        } else {
            // On effectue la première attaque
            this.Attaque(this.pokemon2, this.pokemon1, att2);

            //Si le pokemon en face n'a plus de PV, c'est la fin du combat        
            //Sinon, on choisit et effectue la deuxième attaque
            if (this.pokemon2.pv>0){
                this.Attaque(this.pokemon1, this.pokemon2, att1);
            }
        }
    } 

    Attaque(Attaquant, Defenseur, Attaque){
        //Affichage
        AfficherAttaque(Attaquant, Attaque);

        //On regarde si l'attaque touche
        //Preussite = PREcapacité * PREattaquant/ PREdefenseur
        let Preussite = Attaque.precision * Attaquant.precision / Defenseur.esquive;

        let random = Math.random();
        //Si oui, on inflige les dégats.
        if(random<=Preussite){
            //Nombre aléatoire entre 0.85 et 1
            let CM = Math.floor(Math.random() * 15)/100+0.85;
            //STAB
            if(Attaquant.type===Attaque.type){
                CM *= 1.5;
            }
            // efficacité de la capacité
            let types = Singleton_types.getInstance();

            CM *= types.effets(Attaque.type, Defenseur.type); 
            //Affichage
            AfficherEfficacite(types.effets(Attaque.type, Defenseur.type));

            let Niv = 50;
            let PVperdus =(20*0.4+2)*Attaquant.atk+Attaque.puissance
            PVperdus = PVperdus / (Defenseur.def*50) +2
            PVperdus *= CM;

            Defenseur.pv = Math.floor(Defenseur.pv-PVperdus);
            
            if (Defenseur.pv<0){
                Defenseur.pv=0;
            }
        }
    }

    ChoixIA(){
        let possibilites = this.pokemon2.getAttaques();
        let random = Math.floor(Math.random() * possibilites.length);
        
        return possibilites[random];
    }

    /**

    */
    ChoixUser(){
        let possibilites = this.pokemon1.getAttaques();
        let random = Math.floor(Math.random() * possibilites.length);
        return possibilites[random];
    }

    Fin(){
        //On affiche le gagnant
        if(this.pokemon1.pv>0){
            alert("Vous avez gagné !");
        } else {
            alert("Vous avez perdu !");
        }
    }

    estFini(){
        let res = false;
        if(this.pokemon1.pv==0||this.pokemon2.pv==0){
            res = true;
        }
        return res;
    }

}