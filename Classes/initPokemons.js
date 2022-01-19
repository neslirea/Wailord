	
Pokemons = function(){
	//nom, type, pv, atk, def, vitesse)
	let poke1 = new Pokemon("Milobellus", "milobellus.png", "milobellus_dos.png", "Eau", 295, 80, 100, 81);               //eau
	let poke2 = new Pokemon("Jungko", "jungko.png", "jungko_dos.png", "Plante", 270, 95, 75, 120);                        //plante
	let poke3 = new Pokemon("Typhlosion", "typhlosion.png", "typhlosion_dos.png", "Feu", 278, 95, 82, 100);               //feu

    let poke4 = new Pokemon("Cizayox", "cizayox.png", "cizayox_dos.png", "Insecte", 275, 115, 95, 70);                    //Insecte
    let poke5 = new Pokemon("Zororark", "zoroark.png", "zoroark_dos.png", "Tenebres", 260, 110, 60, 105);                  //Tenebres
    let poke6 = new Pokemon("Carchacrok", "carchacrok.png", "carchacrok_dos.png", "Dragon", 308, 115, 90, 102);            //Dragon

    let poke7 = new Pokemon("Ohmassacre", "ohmassacre.png", "ohmassacre_dos.png", "Electrik", 285, 110, 80, 50);          //Electric
    let poke8 = new Pokemon("Gardevoir", "gardevoir.png", "gardevoir_dos.png", "Fee", 268, 90, 80, 80);                  //Fee
    let poke9 = new Pokemon("Lucario", "lucario.png", "lucario_dos.png", "Combat", 270, 115, 70, 90);                     //combat

    let poke10 = new Pokemon("Etouraptor", "etouraptor.png", "etouraptor_dos.png", "Vol", 285, 90, 65, 100);              //vol
    let poke11 = new Pokemon("Magireve", "magireve.png", "magireve_dos.png", "Spectre", 260, 85, 80, 100);                //Spectre
    let poke12 = new Pokemon("Rhinastoc", "rhinastoc.png", "rhinastoc_dos.png", "Sol", 315, 110, 105, 40);                 //Sol

    let poke13 = new Pokemon("Lokhlass", "lapras.png", "lapras_dos.png", "Glace", 330, 85, 90, 60);                      //Glace
    let poke14 = new Pokemon("Ronflex", "ronflex.png", "ronflex_dos.png", "Normal", 360, 85, 85, 30);                    //Normal
    let poke15 = new Pokemon("Nidoking", "nidoking.png", "nidoking_dos.png", "Poison", 281, 95, 77, 85);                 //Poison

    let poke16 = new Pokemon("Mentali", "mentali.png", "mentali_dos.png", "Psy", 265, 100, 80, 110);                       //Psy
    let poke17 = new Pokemon("Gigalithe", "gigalithe.png", "gigalithe_dos.png", "Roche", 285, 95, 110, 25);               //Roche
    let poke18 = new Pokemon("Metaloss", "metaloss.png", "metaloss_dos.png", "Acier", 280, 115, 110, 70);                  //Acier

	//nom, type, vitesse, precision, puissance//nom, type, vitesse, precision, puissance
   //nom, type, puissance, precision
       let atk1eau = new Capacite("Cascade", "Eau", 60, 100);
    let atk2eau = new Capacite("Hydrocannon", "Eau", 110, 90);
    let atk3eau = new Capacite("Surf", "Eau", 90, 95);
 
    let atk1pla = new Capacite("Balle-Graine", "Plante", 60, 100);
    let atk2pla = new Capacite("Phytomixeur", "Plante", 110, 90);
    let atk3pla = new Capacite("Lame-Feuille", "Plante", 90, 95);
 
    let atk1feu = new Capacite("Crocs-Feu", "Feu", 60, 100);
    let atk2feu = new Capacite("Deflagration", "Feu", 110, 90);
    let atk3feu = new Capacite("Lance-Flamme", "Feu", 90, 95);
 
    let atk1ins = new Capacite("Piqure", "Insecte", 60, 100);
    let atk2ins = new Capacite("Megacorne", "Insecte", 110, 90);
    let atk3ins = new Capacite("Plaie Croix", "Insecte", 90, 95);
 
    let atk1ten = new Capacite("Represailles", "Tenebres", 60, 100);
    let atk2ten = new Capacite("Explonuit", "Tenebres", 110, 90);
    let atk3ten = new Capacite("Tranche-Nuit", "Tenebres", 90, 95);
 
    let atk1dra = new Capacite("Draco-Souffle", "Dragon", 60, 100);
    let atk2dra = new Capacite("Colère", "Dragon", 110, 90);
    let atk3dra = new Capacite("Draco-Griffe", "Dragon", 90, 95);
 
    let atk1ele = new Capacite("Etincelle", "Electrik", 60, 100);
    let atk2ele = new Capacite("Fatal-Foudre", "Electrik", 110, 90);
    let atk3ele = new Capacite("Tonnerre", "Electrik", 90, 95);
 
    let atk1fee = new Capacite("Vent Feerique", "Fee", 60, 100);
    let atk2fee = new Capacite("Pouvoir Lunaire", "Fee", 110, 90);
    let atk3fee = new Capacite("Eclat Magique", "Fee", 90, 95);
 
    let atk1com = new Capacite("Balayette", "Combat", 60, 100);
    let atk2com = new Capacite("Close-Combat", "Combat", 110, 90);
    let atk3com = new Capacite("Aurasphère", "Combat", 90, 95);
 
    let atk1vol = new Capacite("Tranch-Air", "Vol", 60, 100);
    let atk2vol = new Capacite("Rapace", "Vol", 110, 90);
    let atk3vol = new Capacite("Vol", "Vol", 90, 95);
 
    let atk1spe = new Capacite("Vent Mauvais", "Spectre", 60, 100);
    let atk2spe = new Capacite("Griffe Ombre", "Spectre", 110, 90);
    let atk3spe = new Capacite("Ball' Ombre", "Spectre", 90, 95);
 
    let atk1sol = new Capacite("Pietisol", "Sol", 60, 100);
    let atk2sol = new Capacite("Seisme", "Sol", 110, 90);
    let atk3sol = new Capacite("Telluriforce", "Sol", 90, 95);
 
    let atk1gla = new Capacite("Avalanche", "Glace", 60, 100);
    let atk2gla = new Capacite("Blizzard", "Glace", 110, 90);
    let atk3gla = new Capacite("Laser-Glace", "Glace", 90, 95);
 
    let atk1nor = new Capacite("Griffe", "Normal", 60, 100);
    let atk2nor = new Capacite("Ultralaser", "Normal", 110, 90);
    let atk3nor = new Capacite("Plaquage", "Normal", 90, 95);
 
    let atk1poi = new Capacite("Détritus", "Poison", 60, 100);
    let atk2poi = new Capacite("Détricanon", "Poison", 110, 90);
    let atk3poi = new Capacite("Direct Toxic", "Poison", 90, 95);
 
    let atk1psy = new Capacite("Choc Mental", "Psy", 60, 100);
    let atk2psy = new Capacite("Prescience", "Psy", 110, 90);
    let atk3psy = new Capacite("Psyko", "Psy", 90, 95);
 
    let atk1roc = new Capacite("Anti-Air", "Roche", 60, 100);
    let atk2roc = new Capacite("Roc-Boulet", "Roche", 110, 90);
    let atk3roc = new Capacite("TombeRoche", "Roche", 90, 95);
 
    let atk1aci = new Capacite("Griffe Acier", "Acier", 60, 100);
    let atk2aci = new Capacite("Choc Meteore", "Acier", 110, 90);
    let atk3aci = new Capacite("Tete de Fer", "Acier", 90, 95);

	poke1.ajouterAttaque(atk1eau);
    poke1.ajouterAttaque(atk2eau);
    poke1.ajouterAttaque(atk3eau);
    poke1.ajouterAttaque(atk3gla);

	poke2.ajouterAttaque(atk1pla);
    poke2.ajouterAttaque(atk2pla);
    poke2.ajouterAttaque(atk3pla);
    poke2.ajouterAttaque(atk3ins);

	poke3.ajouterAttaque(atk1feu);
    poke3.ajouterAttaque(atk2feu);
    poke3.ajouterAttaque(atk3feu);
    poke3.ajouterAttaque(atk1com);

    poke4.ajouterAttaque(atk3ins);
    poke4.ajouterAttaque(atk3aci);
    poke4.ajouterAttaque(atk1vol);
    poke4.ajouterAttaque(atk3ten);

    poke5.ajouterAttaque(atk3ten);
    poke5.ajouterAttaque(atk2ten);
    poke5.ajouterAttaque(atk1psy);
    poke5.ajouterAttaque(atk2nor);

    poke6.ajouterAttaque(atk3dra);
    poke6.ajouterAttaque(atk2dra);
    poke6.ajouterAttaque(atk3sol);
    poke6.ajouterAttaque(atk2vol);

    poke7.ajouterAttaque(atk1ele);
    poke7.ajouterAttaque(atk2ele);
    poke7.ajouterAttaque(atk3ele);
    poke7.ajouterAttaque(atk1aci);

    poke8.ajouterAttaque(atk1fee);
    poke8.ajouterAttaque(atk2fee);
    poke8.ajouterAttaque(atk2psy);
    poke8.ajouterAttaque(atk3psy);

    poke9.ajouterAttaque(atk1com);
    poke9.ajouterAttaque(atk2com);
    poke9.ajouterAttaque(atk3com);
    poke9.ajouterAttaque(atk3aci);

    poke10.ajouterAttaque(atk1vol);
    poke10.ajouterAttaque(atk2vol);
    poke10.ajouterAttaque(atk3vol);
    poke10.ajouterAttaque(atk2com);

    poke11.ajouterAttaque(atk3psy);
    poke11.ajouterAttaque(atk2psy);
    poke11.ajouterAttaque(atk3spe);
    poke11.ajouterAttaque(atk3ele);

    poke12.ajouterAttaque(atk3roc);
    poke12.ajouterAttaque(atk2roc);
    poke12.ajouterAttaque(atk1sol);
    poke12.ajouterAttaque(atk2sol);

    poke13.ajouterAttaque(atk1gla);
    poke13.ajouterAttaque(atk2gla);
    poke13.ajouterAttaque(atk1eau);
    poke13.ajouterAttaque(atk3eau);

    poke14.ajouterAttaque(atk3nor);
    poke14.ajouterAttaque(atk2nor);
    poke14.ajouterAttaque(atk1spe);
    poke14.ajouterAttaque(atk3com);

    poke15.ajouterAttaque(atk2poi);
    poke15.ajouterAttaque(atk3poi);
    poke15.ajouterAttaque(atk1sol);
    poke15.ajouterAttaque(atk3sol);

    poke16.ajouterAttaque(atk1psy);
    poke16.ajouterAttaque(atk2psy);
    poke16.ajouterAttaque(atk3ele);
    poke16.ajouterAttaque(atk3spe);

    poke17.ajouterAttaque(atk1roc);
    poke17.ajouterAttaque(atk2roc);
    poke17.ajouterAttaque(atk3roc);
    poke17.ajouterAttaque(atk3sol);

    poke18.ajouterAttaque(atk1aci);
    poke18.ajouterAttaque(atk2aci);
    poke18.ajouterAttaque(atk1poi);
    poke18.ajouterAttaque(atk3psy);

	return [poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8, poke9, poke10, poke11, poke12, poke13, poke14, poke15, poke16, poke17, poke18];
}