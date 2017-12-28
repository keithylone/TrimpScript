
Beep = new Audio("https://www.soundjay.com/misc/censor-beep-01.mp3");
	Beep.volume = 1;
canBeep = false;

//Main Program and Loop
function MainProgram() {
	document.title = balanceStack.textContent; //Balance Stacks
	if (balanceStack.textContent == "79") {
		canBeep = true;
	}
	if (balanceStack.textContent == "80" && canBeep == true) {
		Beep.play(); //beep beep beep
		canBeep = false;
	}
	setTimeout(MainProgram, 200);
}
MainProgram();
