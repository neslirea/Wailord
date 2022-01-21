//crédits affiche un écran fixe qu'on peut quitter en cliquant
credits = function()
{
	context.drawImage(crd,0,0,canvas.width,canvas.height);

	 context.drawImage(programmers,490,340,170,25);
	 context.drawImage(clea,493,385,160,25);
	 context.drawImage(mattew,493,420,160,25);
	 context.drawImage(yann,493,455,160,25);
	 context.drawImage(stephane,480,490,185,28);
	 context.drawImage(skip,canvas.width-50,canvas.height-50,50,50);
	window.onclick =() => {
		clearInterval(CREDITS_Interval_ID);
		MENU_Interval_ID=setInterval(menus,40);
		creditsound.pause();
		creditsound.currentTime=0;
		gener.currentTime=0;
		if(sound_ON){
			gener.play();
		}
	}
}