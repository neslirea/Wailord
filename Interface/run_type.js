
let Button = document.getElementById("Valider");
Button.addEventListener("click", TesterType); 


window.onload = function()		// At start
{
    let div = document.getElementById("div_types");
    div.style="";
    let types = Singleton_types.getInstance();

    
    let tag = document.createElement("p");
    let text = document.createTextNode("Tableau des types :");
    tag.appendChild(text);
    div.appendChild(tag);
    
    let hr = document.createElement("hr");
    div.appendChild(hr);

    //Affiche le tableau des effets
    let tab = document.createElement("table");
    //la première ligne
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    for (let i of types.get_types()){
        let td = document.createElement("td");

        let img = document.createElement("img");
        img.src = "Sprites_Menus/"+i+".png";
        img.style = "width:50px;height:50px;";
        td.appendChild(img);

        tr.appendChild(td);
    }
    tab.appendChild(tr);
    //le reste du tableau
    for (let i of types.get_types()){
        let tr = document.createElement("tr");
        
        let td = document.createElement("td");
        let img = document.createElement("img");
        img.src = "Sprites_Menus/"+i+".png";
        img.style = "width:50px;height:50px;";
        td.appendChild(img);

        tr.appendChild(td);
        for (let j of types.get_types()){
            let td = document.createElement("td");
            let text = document.createTextNode(types.effets(i,j));
            td.appendChild(text);
            td.style="text-align: center; vertical-align: middle;";

            tr.appendChild(td);
        }
        tab.appendChild(tr)
    }
    div.appendChild(tab);

    //Affiche la correspondance du nom et de l'icone
    for (let i of types.get_types()){
        console.log(i);
        let tag = document.createElement("p");
        let text = document.createTextNode(i);
        let img = document.createElement("img");
        img.src = "Sprites_Menus/"+i+".png";
        img.style = "width:30px;height:30px;margin-right:10px;";
        tag.appendChild(img);
        tag.appendChild(text);

        div.appendChild(tag);
    }
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


