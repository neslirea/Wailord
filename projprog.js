//box
//var context;
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var terrain = new Image();
	terrain.src = "int_pics/battleground_test.png";

var pk1 = new Image();
    pk1.src = "int_pics/vaporeon_dos.png";

var pk2 = new Image();
	pk2.src = "int_pics/flareon.png";

// sur l interface
var backgroundInt = new Image();
	backgroundInt.src = "int_pics/fond_int.png"; // le Background de l'interface
var btnAtk = new Image();
	btnAtk.src = "int_pics/but_attack.png"; 
var btnBag = new Image();
	btnBag.src = "int_pics/but_bag.png";
var btnSwap = new Image();
	btnSwap.src = "int_pics/but_pokemon.png";
var btnFlee = new Image();
	btnFlee.src = "int_pics/but_escape.png"; 

function addInterface() {					// espace de travail (100, 700, 1300, 300);

	context = canvas.getContext("2d");
	context.drawImage(backgroundInt,400,710, 600, 280);

	context.drawImage(btnAtk,500,715, 400, 160);
	context.drawImage(btnBag,405,885, 190, 80);
	context.drawImage(btnSwap,805,885, 190, 80);
	context.drawImage(btnFlee,605,905, 190, 80);
	
	// écouteur sur les boutons
	//btnAtk.onclick = FonctionAttaque();				// Déterminer quand est-ce que ça clique
	//btnBag.onPress = NotDevelopedYet;
	//btnSwap.onPress = NotDevelopedYet;
	//btnFlee.onPress = NotDevelopedYet;

}

function FonctionAttaque() {	

	//context.clearRect(400,710, 600, 280);	// on clear la zone d'interface			//le clear fonctionne, mais s'active tout seul

	context = canvas.getContext("2d");
	context.drawImage(backgroundInt,400,710, 600, 280);						// on re dessine illico la zone

	context.drawImage(btnAtk,410,720, 285, 125);
	context.drawImage(btnAtk,705,720, 285, 125);
	context.drawImage(btnAtk,410,855, 285, 125);
	context.drawImage(btnAtk,705,855, 285, 125);
	
	// écouteur sur les boutons
	//Atk1.onPress = FonctionAttaque1;
	//Atk2.onPress = FonctionAttaque2;
	//Atk3.onPress = FonctionAttaque3;
	//Atk4.onPress = FonctionAttaque4;
}

window.onload = function()	{	// At start

const white = canvas.getContext('2d');
white.fillStyle= 'rgba(255,255,255)';
white.fillRect(100, 0, 1300, 600);
console.log(canvas);
 
const background = canvas.getContext("2d");	
background.drawImage(terrain,150,100, 1150, 500);
console.log(canvas);

context = canvas.getContext("2d");	
context.drawImage(pk1,300,150, 500, 500);
context.drawImage(pk2,880,0, 300, 300);

const text_box = canvas.getContext('2d');
text_box.fillStyle= 'rgba(230,230,230)';
text_box.fillRect(100, 600, 1300, 100);

const Interface_cbt = canvas.getContext('2d');	// l inteface qui accueille les boutons
Interface_cbt.fillStyle= 'rgba(200,200,200)';
Interface_cbt.fillRect(100, 700, 1300, 300);

addInterface();	// a developper....
}
		


// le repertoire des id des images
/*
var imgInterfaceRepertoireId;						a faire fonctionner

imgInterfaceRepertoireId = [
	{src:"int_pics/but_attack.png", id:"btnAtk"},		
	{src:"int_pics/but_bag.png", id:"btnBag"},
	{src:"int_pics/but_pokemon.png", id:"btnSwap"},
	{src:"int_pics/but_escape.png", id:"btnFlee"},
	{src:"int_pics/fond_int.png", id:"fondInt"}
	//à remplir avec les boutons colorés selon le type des attaques
];	
*/
