// Code again from Xenko

var Game = {};


Game.Beep = new Audio("https://www.soundjay.com/button/beep-02.mp3");
	Game.Beep.volume = 1;


Game.RedundaKitty = function() {
	document.title = Molpy.Redacted.toggle - Molpy.Redacted.countup;
	if (Molpy.Redacted.location > 0) {
		Game.Beep.play();
	}
}

//Main Program and Loop
function MainProgram() {
	Game.RedundaKitty();
	StartLoop();
}

StartLoop = function () {
	setTimeout(MainProgram, 900);
}

console.log("Hi");
MainProgram();
