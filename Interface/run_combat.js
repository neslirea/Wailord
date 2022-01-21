let combat_init = false;
let combat_transit = true ;
let combat_objet = null;
let adversaire = null;

const combat_duree_affichage = 1000;
let combat_main_interval_ID;
let combat_fin_interval_ID;

let combat_user_Interval_ID;

let current_pkm;
let current_atk;

const combat_hauteur_menu = 200;
const combat_marge = 10;
const combat_ratio_menu = 0.4;

let battle = new Audio('Musiques/BattleTheme.mp3');
battle.loop=true;
battle.volume=0.5;
let victoire = new Audio('Musiques/Victory.mp3');
victoire.volume=0.5;
let defaite = new Audio('Musiques/Defeat.mp3');
defaite.volume=0.5;
/*
//D�roulement du comabt :
    -> affichage des attaques + choix de l'attaques
        dur�e indetermin�e
    -> affichage du texte 1
        2 secondes ou on click
    -> affichage de l'attaque et r�duction des pvs
        2 secondes
    -> affichage du texte 1
        2 secondes ou on click
    -> affichage de l'attaque et r�duction des pvs
        2 secondes
*/
combats = function()
{
    //window.onclick = () => Gamerunning = true
  battle.play();
  context.fillStyle = "grey";
	context.fillRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);

    if (!combat_init){
        let possibilites = Pokemons();
        let random = Math.floor(Math.random() * possibilites.length);
        adversaire=possibilites[random];

        context.font = "bold 40px courier";
        context.fillStyle='black';
        context.fillText(current_pkm.nom +" contre "+ adversaire.nom, 100, 170);
        combat_init=true;
        AfficherCombat();
    }
    setTimeout(AfficherCombat, 100);
    setTimeout(Deb_Tour, 1000);

}

Fin = function(){
    //context.clearRect(0, 0, canvas.width, canvas.height);
    AfficherCombat();
        //context.font = "bold 50px courier";
        //context.fillStyle='black';
        if (current_pkm.pv>0){
            battle.pause();
            if(is_Sound){victoire.play();}
            AfficherTexte("Vous avez gagne !");
            //context.fillText("Vous avez gagné !", 300, 170);
        } else {
            battle.pause();
            if(is_Sound){defaite.play();}
            AfficherTexte("Vous avez perdu...");
            //context.fillText("Vous avez perdu...", 300, 170);
        }
    context.drawImage(skip,canvas.width-150,canvas.height-80,50,50);
}

Deb_Tour = function(){
	context.clearRect(0, 0, canvas.width, combat_hauteur_menu);
    AfficherCombat();
    AfficherStatut(current_pkm.pv, adversaire.pv);
    context.fillStyle = "grey";
	context.fillRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
    //11111
    console.log("Deb_Tour");
    //On regarde si le combat est fini
    if(current_pkm.pv==0||adversaire.pv==0){
        //si oui, on affiche le r�sultat puis on passe � l'�cran des cr�dits
        combat_init=false;
        combat_fin_interval_ID=setInterval(Fin,100);
        //permet de pouvoir cliquer pour passer � l'autre �cran
        choix_pokemons = null;
        window.onclick = () => {
          defaite.pause();
          victoire.pause();



            clearInterval(combat_fin_interval_ID);
		    Credits_Interval_ID=setInterval(credits,40);
            if(is_Sound){
			    creditsound.play();
		    }
		    credits();
        }
    } else {    //si non, on lance un tour
        //On commence par saisir le choix utilisateur, ce qui lancera ensuite le tour
        combat_user_Interval_ID = setInterval(Combat_Choix, 100);
    }
}

Combat_Choix = function(){
    //11111
    console.log("Choix");
    AfficherCombat();
	context.clearRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
    context.fillStyle = "grey";
	context.fillRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
    window.onclick = () => {}
    //Affiche le cadre et le texte
    context.drawImage(cadre,combat_marge,canvas.height-combat_hauteur_menu+combat_marge, canvas.width*(1-combat_ratio_menu)-combat_marge*2, combat_hauteur_menu-2*combat_marge);
    context.font = "bold 30px courier";
    context.fillStyle='black';
    context.fillText("Que doit faire "+current_pkm.nom+" ?", combat_marge+70, canvas.height-combat_hauteur_menu+combat_marge+70);

    //Affiche les possibilit�s
    AffichageChoixAttaque(current_pkm);


    // zone de choix
    let y0 = canvas.height-combat_hauteur_menu+combat_marge
	let y1 = canvas.height-combat_marge
	let x0 = canvas.width*(1-combat_ratio_menu)+combat_marge
	let x1 = canvas.width-combat_marge
	let lineaire = context.createLinearGradient(x0, y0, x1, y1);
    //taille des bo�tes d'affichage des attaques
	let width =  (x1-x0-3*combat_marge)/2
	let height = (y1-y0-3*combat_marge)/2

    /*coordinates
    context.fillRect(x0+marge, y0+marge, width, height);
	context.fillRect(x0+width+2*marge, y0+marge, width, height);
	context.fillRect(x0+marge, y0+height+2*marge, width, height);
	context.fillRect(x0+width+2*marge, y0+height+2*marge, width, height);*/
    // variable pour savoir si on est pass� sur un des rectangles d'attaques et si oui lequel
    let selected=-1;
    if((posSourisX>x0+combat_marge)&(posSourisX<x0+combat_marge+width)&(posSourisY>y0+combat_marge)&(posSourisY<y0+combat_marge+height)){
        window.onclick = () => {};
        selected=0;
    } else if ((posSourisX>x0+width+2*combat_marge)&(posSourisX<x0+width+2*combat_marge+width)&(posSourisY>y0+combat_marge)&(posSourisY<y0+combat_marge+height)){
        selected =1;
    } else if ((posSourisX>x0+combat_marge)&(posSourisX<x0+combat_marge+width)&(posSourisY>y0+height+2*combat_marge)&(posSourisY<y0+height+2*combat_marge+height)){
        selected =2;
    } else if ((posSourisX>x0+width+2*combat_marge)&(posSourisX<x0+width+2*combat_marge+width)&(posSourisY>y0+height+2*combat_marge)&(posSourisY<y0+height+2*combat_marge+height)){
        selected =3;
    }
    if ((selected!=-1)&(selected<=current_pkm.getAttaques().length-1)){
        // si on est pass� sur un des rectangles d'attaques
        window.onclick = () => {
            window.onclick = () => {}
            clearInterval(combat_user_Interval_ID);
            context.clearRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
            context.fillStyle = "grey";
	        context.fillRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
            setTimeout(() => {
            //On g�n�re des �v�nements si on a bien s�lectionn� l'attaque :
                //on arr�te le timer
                //on s�lectionne l'attaque correspondant
                let att1  = current_pkm.getAttaques()[selected];
                let att2 = ChoixIA();
                //on lance le tour
                Tour(att1, att2);
            }, 1000);
        }
    } else {
        //sinon
        window.onclick = () => {}
    }
}

Tour = function(att1, att2)
{
    //11111
    console.log("Tour");
    let pokemon1 = current_pkm;
        let pokemon2 = adversaire;
        let isUserFirst = 1;
        if (att1.vitesse==att2.vitesse){
            if(pokemon1.vitesse==pokemon2.vitesse){
                let random = Math.floor(Math.random() * 2);
                if (random==0){
                    isUserFirst = 0;
                } else {
                    isUserFirst = 1;
                }
            } else if(pokemon1.vitesse<pokemon2.vitesse){
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
            // On effectue la premi�re attaque
            Attaque(pokemon1, pokemon2, att1);

            //Si le pokemon en face n'a plus de PV, c'est la fin du combat
            //Sinon, on effectue la deuxi�me attaque
            if (pokemon2.pv>0){
                setTimeout(() => {
                    Attaque(pokemon2, pokemon1, att2);
                }, combat_duree_affichage*3);
            }

        } else {
            // On effectue la premi�re attaque
            Attaque(pokemon2, pokemon1, att2);

            //Si le pokemon en face n'a plus de PV, c'est la fin du combat
            //Sinon, on effectue la deuxi�me attaque
            if (pokemon1.pv>0){
                setTimeout(() => {
                    Attaque(pokemon1, pokemon2, att1);
                }, combat_duree_affichage*3);
            }
        }
        setTimeout(() => {
            Deb_Tour();
        },6*combat_duree_affichage)
}

Attaque = function(Attaquant, Defenseur, Attaque){
        //Affichage de l attaque
        AfficherAttaque(Attaquant,Attaque);


        //On regarde si l'attaque touche
        //Preussite = PREcapacit� * PREattaquant/ PREdefenseur
        let Preussite = Attaque.precision * Attaquant.precision / Defenseur.esquive;

        let random = Math.random();
        //Si oui, on inflige les d�gats et on affiche
        if(random<=Preussite){
            //Nombre al�atoire entre 0.85 et 1
            let CM = Math.floor(Math.random() * 15.)/100.+0.85;
            //STAB
            if(Attaquant.type===Attaque.type){
                CM *= 1.5;
            }
            // efficacit� de la capacit�
            let types = Singleton_types.getInstance();

            CM *= types.effets(Attaque.type, Defenseur.type);
            //Affichage de l'�fficacit�
            setTimeout(()=>{
                AfficherEfficacite(types.effets(Attaque.type, Defenseur.type));
            }, combat_duree_affichage)

            let Niv = 50;
            let PVperdus =(Niv*0.4+2)*Attaquant.atk*Attaque.puissance
            PVperdus = PVperdus / (Defenseur.def*50) +2
            PVperdus *= CM;

            //affichage des d�gats
            let PV_Init = Defenseur.pv;


            Defenseur.pv = Math.floor(Defenseur.pv-PVperdus);

            if (Defenseur.pv<0){
                Defenseur.pv=0;
            }

            setTimeout(() => {
                AfficherDegats(Defenseur==current_pkm, PV_Init, PVperdus);
            }, combat_duree_affichage*2);
        } else {
            //sinon, on affiche manqu�
            setTimeout(() => {
                AfficherManque();
            }, combat_duree_affichage*2);
        }

    }
ChoixIA = function(){
        let possibilites = adversaire.getAttaques();
        let random = Math.floor(Math.random() * possibilites.length);

        return possibilites[random];
}
