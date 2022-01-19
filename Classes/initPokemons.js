	
Pokemons = function(){
	//nom, type, pv, atk, def, vitesse, precision, esquive)
	let poke1 = new Pokemon("Carapuce", "squirtle.png", "squirtle_dos.png", "Eau", 44, 48, 65, 43);
	let poke2 = new Pokemon("Bulbizarre", "bulbasaur.png", "bulbasaur_dos.png", "Plante", 45, 49, 49, 45);
	let poke3 = new Pokemon("Salamèche", "charmander.png", "charmander_dos.png", "Feu", 39, 52, 43, 65);

	//nom, type, vitesse, precision, puissance
	let atk1 = new Capacite("Pistolet à O", "Eau", 25, 100, 40);
	let atk2 = new Capacite("Fouet Lianes", "Plante", 25, 100, 45);
	let atk3 = new Capacite("Flammèche", "Feu", 25, 100, 40);

	poke1.ajouterAttaque(atk1);
	poke3.ajouterAttaque(atk2);
	poke2.ajouterAttaque(atk2);
	poke3.ajouterAttaque(atk3);
	let a = [poke1, poke2, poke3];
	
	return [poke1, poke2, poke3];
}