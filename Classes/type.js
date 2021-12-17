
/**
 * Classe permettant de connaître les effets des types d'attaques
 */
class Types {
    constructor() {
        this.liste_types = ["Eau","Feu","Plante"]
        this.effects = [
            [1,2,1/2],
            [1/2,1,2],
            [2,1/2,1]
           ];
    }  
    effets(type1, type2) {
        let index1 = this.liste_types.indexOf(Type1);
        let index2 = this.liste_types.indexOf(Type2);
        return this.effects[index1][index2]
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

