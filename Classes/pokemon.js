class Pokemon{
    constructor(nom, sprite, sprite_dos, type, pv, atk, def, vitesse){
        this.nom = nom;
        this.type = type;
        this.maxpv = pv;
        this.pv = pv;
        this.atk = atk;
        this.def = def;
        this.vitesse = vitesse;
        this.precision = 100
        this.esquive = 100;
        this.sprite = sprite;
        this.sprite_dos = sprite_dos;

        this.attaques = [];
    }

    getPokemon = function(){
        return "Nom : " + this.nom + "\nType : " + this.type + "\nPV : " + this.pv + "\nAttaque : " + this.atk + "\nDefense : " + this.def + "\nVitesse : " + this.vitesse; 
    };

    getType = function(){
        return this.type;
    } 
    
    //Ajoute une attaque au pokemon
    ajouterAttaque(Attaque){
        if (this.attaques.length<4){
            this.attaques.push(Attaque);
        }
    }
    
    //Retourne la liste des attaques du pokemon (Copie)
    getAttaques = function(){
        return this.attaques.map((x) => x);

    }

}

