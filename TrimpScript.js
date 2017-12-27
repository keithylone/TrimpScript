
Beep = new Audio("https://www.soundjay.com/button/beep-02.mp3");
	Beep.volume = 1;
beeped = false;

//Main Program and Loop
function MainProgram() {
	document.title = balanceStack.textContent; //RK countdown
	if (balanceStack.textContent = "80") {
		if (beeped == false) {
			Beep.play(); //beep beep beep
			beeped = true;
		}
	} else {
		beeped = false;
	}
	setTimeout(MainProgram, 1000);
}
MainProgram();
