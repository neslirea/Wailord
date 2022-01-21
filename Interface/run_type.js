
let Button = document.getElementById("Valider");
Button.addEventListener("click", TesterType); 


window.onload = function()		// At start
{
    let div = document.getElementById("div_types");
    var tag = document.createElement("p");
    var text = document.createTextNode("");
    var img = document.createElement("img");
    img.src = "Sprites_Menus/"+"Feu.png";
    tag.appendChild(text);

    div.appendChild(tag);
    div.appendChild(img);
}


/**
 * Fonction appelée dans la page de test des types 
 */
 function TesterType(){
    const Type1 = document.getElementById("type1").value;
    const Type2 = document.getElementById("type2").value;

    let types = Singleton_types.getInstance();
    const p = document.getElementById("Affichage");
    p.innerText = Type1 + ' sur ' + Type2 + ' = x'+types.effets(Type1, Type2);

    types.get_types();
}


