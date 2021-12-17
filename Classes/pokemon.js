class Pokemon{
    constructor(nom, type, pv, atk, def, vitesse){
        this.nom = nom;
        this.type = type;
        this.pv = pv;
        this.atk = atk;
        this.def = def;
        this.vitesse = vitesse;
    }

    getPokemon = function(){
        return "Nom : " + this.nom + "\nType : " + this.type + "\nPV : " + this.pv + "\nAttaque : " + this.atk + "\nDefense : " + this.def + "\nVitesse : " + this.vitesse; 
    };

    getType = function(){
        return this.type;
    } 

    Attaque = function(Pokemon){
        console.log(this.nom + " utilise CLOSE COMBAT !");
        
        if(Pokemon.type == "Normal"){
            console.log("c'est super efficace !");
            console.log(Pokemon.nom + " est KO");
        }
    }
}

