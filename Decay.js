
Beep = new Audio("https://www.soundjay.com/misc/censor-beep-01.mp3");
	Beep.volume = 1;
canBeep = false;

//Main Program and Loop
function MainProgram() {
	stacks = decayStackCount.textContent;
	document.title = stacks; //Decay Stacks
	if (stacks == "149" || stacks =="179" || stacks == "209" || stacks == "239") {
		canBeep = true;
	}
	if (stacks == "150" || stacks == "180" || stacks == "210" || stacks == "240") {
		if (canBeep) {
			Beep.play();
			canBeep = false;
		}
	}
	setTimeout(MainProgram, 200);
}
MainProgram();
