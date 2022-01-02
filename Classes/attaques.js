class Capacite{
    constructor(nom, type, vitesse, precision, puissance){
        this.nom = nom;
        this.type = type;
        this.vitesse = vitesse;
        this.precision = precision;
        this.puissance = puissance;
    } 

    getNom = function(){
        return this.nom; 
    };

    getType = function(){
        return this.type;
    } 

    getDegats = function(){
        return this.degats;
    } 
}
