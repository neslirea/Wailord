
let Button = document.getElementById("Valider");
Button.addEventListener("click", TesterType); 


/**
 * Fonction appelée dans la page de test des types 
 */
 function TesterType(){
    Type1 = document.getElementById("type1").value;
    Type2 = document.getElementById("type2").value;

    let types = Singleton_types.getInstance();
    let p = document.getElementById("Affichage");
    p.innerText = Type1 + ' sur ' + Type2 + ' = x'+types.effets(Type1, Type2);
}