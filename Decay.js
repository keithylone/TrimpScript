
Beep = new Audio("https://www.soundjay.com/misc/censor-beep-01.mp3");
	Beep.volume = 1;
canBeep = false;

//Main Program and Loop
function MainProgram() {
	document.title = decayStackCount.textContent; //Balance Stacks
	if (decayStackCount.textContent == "150" || decayStackCount.textContent == "170") {
		Beep.play();
	}
	setTimeout(MainProgram, 200);
}
MainProgram();
