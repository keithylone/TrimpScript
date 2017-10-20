// Code taken from Xenko

Beep = new Audio("https://www.soundjay.com/button/beep-02.mp3");
	Beep.volume = 1;
beeped = false;

//Main Program and Loop
function MainProgram() {
	document.title = Molpy.Redacted.toggle - Molpy.Redacted.countup; //RK countdown
	if (Molpy.Redacted.location > 0) {
		if (beeped == false) {
			Beep.play(); //beep beep beep
			beeped = true;
		}
	} else {
		beeped = false;
	}
	setTimeout(MainProgram, 900);
}
MainProgram();
