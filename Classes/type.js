
/**
 * Classe permettant de connaître les effets des types d'attaques
 */
class Types {
    constructor() {
        this.liste_types = ["Normal", "Feu", "Eau","Plante","Electrik","Glace","Combat","Poison","Sol", "Vol", "Psy", "Insecte","Roche","Spectre","Dragon","Tenebres","Acier","Fee"]
        this.effects = [
            [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,1/2,  0,  1,  1,1/2,  1], //Normal
            [1,1/2,1/2,  2,  1,  2,  1,  1,  1,  1,  1,  2,1/2,  1,1/2,  1,  2,  1], //Feu
            [1,  2,1/2,1/2,  1,  1,  1,  1,  2,  1,  1,  1,  2,  1,1/2,  1,  1,  1], //Eau
            [1,1/2,  2,1/2,  1,  1,  1,1/2,  2,1/2,  1,1/2,  2,  1,1/2,  1,1/2,  1], //Plante
            [1,  1,  2,1/2,1/2,  1,  1,  1,  0,  2,  1,  1,  1,  1,1/2,  1,  1,  1], //Electrik
            [1,1/2,1/2,  2,  1,1/2,  1,  1,  2,  2,  1,  1,  1,  1,  2,  1,1/2,  1], //Glace
            [2,  1,  1,  1,  1,  2,  1,1/2,  1,1/2,1/2,1/2,  2,  0,  1,  2,  2,1/2], //Combat
            [1,  1,  1,  2,  1,  1,  1,1/2,1/2,  1,  1,  1,1/2,1/2,  1,  1,  0,  2], //Poison
            [1,  2,  1,1/2,  2,  1,  1,  2,  1,  0,  1,1/2,  2,  1,  1,  1,  2,  1], //Sol
            [1,  1,  1,  2,1/2,  1,  2,  1,  1,  1,  1,  2,1/2,  1,  1,  1,1/2,  1], //Vol
            [1,  1,  1,  1,  1,  1,  2,  2,  1,  1,1/2,  1,  1,  1,  1,  0,1/2,  1], //Psy
            [1,1/2,  1,  2,  1,  1,1/2,1/2,  1,1/2,  2,  1,  1,1/2,  1,  2,1/2,1/2], //Insecte
            [1,  2,  1,  1,  1,  2,1/2,  1,1/2,  2,  1,  2,  1,  1,  1,  1,1/2,  1], //Roche
            [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1,  1,  2,  1,1/2,  1,  1], //Spectre
            [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1,1/2,  0], //Dragon 
            [1,  1,  1,  1,  1,  1,1/2,  1,  1,  1,  2,  1,  1,  2,  1,1/2,  1,1/2], //Tenebres
            [1,1/2,1/2,  1,1/2,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1,  1,1/2,  2], //Acier
            [1,1/2,  1,  1,  1,  1,  2,1/2,  1,  1,  1,  1,  1,  1,  2,  2,1/2,  1], //Fee
           ];
    }  
    effets(type1, type2) {
        let index1 = this.liste_types.indexOf(type1);
        let index2 = this.liste_types.indexOf(type2);
        return this.effects[index1][index2];
    }
    get_types(){
        return this.liste_types.map((x) => x);
    }
  }

/**
 * Singleton incorrporant la classe Types
 */
let Singleton_types = (function () {
    let instance;
    function createInstance() {
        let objet = new Types();
        return objet;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

