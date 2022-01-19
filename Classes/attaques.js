class Capacite{
    constructor(nom, type, puissance, precision){
        this.nom = nom;
        this.type = type;
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
