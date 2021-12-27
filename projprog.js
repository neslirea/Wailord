//box
//var context;
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

var terrain = new Image();
	terrain.src = "int_pics/battleground_test.png";

var pk1 = new Image();
    pk1.src = "int_pics/vaporeon_dos.png";

var pk2 = new Image();
	pk2.src = "int_pics/flareon.png";

// sur l intreface
var backgroundInt; // le Background de l'interface
var btnAtk; 
var btnBag;
var btnSwap;
var btnFlee; 

function addInterface() {					// a revoir avec Clea

	btnAtk.x = 500;
	btnAtk.y = 720;

	btnBag.x = btnStart.x - 200;
	btnBag.y = btnAtk.y - 100;

	btnSwap.x = btnAtk.x;
	btnSwap.y = 200;

	btnBag.x = btnStart.x + 200;
	btnBag.y = btnAtk.y - 100;

	// ajoute les boutons sur l'interface 
	Inteface_cbt.addChild(backgroundInt, btnAtk, btnBag, btnSwap, btnFlee);
	
	// écouteur sur les boutons
	btnAtk.onPress = FonctionAttaque;
	//btnBag.onPress = NotDevelopedYet;
	//btnSwap.onPress = NotDevelopedYet;
	//btnFlee.onPress = NotDevelopedYet;

}
/*
function FonctionAttaque() {	

	Atk1.x = 400;
	Atk1.y = 800;

	Atk2.x = Atk1.x + 100;
	Atk2.y = Atk1.y;

	Atk3.x = Atk1.x;
	Atk3.y = Atk1.y + 100;

	Atk4.x = Atk1.x + 100;
	Atk4.y = Atk1.y + 100;

	// ajoute les boutons sur l'interface 
	Inteface_cbt.addChild(backgroundInt, Atk1, Atk2, Atk3, Atk3);
	
	// écouteur sur les boutons
	Atk1.onPress = FonctionAttaque1;
	Atk2.onPress = FonctionAttaque2;
	Atk3.onPress = FonctionAttaque3;
	Atk4.onPress = FonctionAttaque4;
}
*/
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


}
addInterface();		// a developper....