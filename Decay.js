
Beep = new Audio("https://www.soundjay.com/misc/censor-beep-01.mp3");
	Beep.volume = 1;
canBeep = false;

//Main Program and Loop
function MainProgram() {
	document.title = decayStackCount.textContent; //Balance Stacks
	if (decayStackCount.textContent == "149" || decayStackCount.textContent =="179") {
		canBeep = true;
	}
	if (decayStackCount.textContent == "150" || decayStackCount.textContent == "180") {
		if (canBeep) {
			Beep.play();
			canBeep = false;
		}
	}
	setTimeout(MainProgram, 200);
}
MainProgram();
