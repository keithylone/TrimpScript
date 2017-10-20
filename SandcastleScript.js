// Code again from Xenko

var Game = {};


//BB Audio Alerts Variables
Game.Beep = new Audio("http://keithylone.github.io/beep.mp3");
	BeachBall.Beep.volume = 1;

Game.RKTimer = Molpy.Redacted.toggle - Molpy.Redacted.countup;

Game.PlayRKAlert = function() {
	
	if (BeachBall.RKTimer == 0) {
		BeachBall.Beep.play();
	}

}

if (Molpy.Redacted.location > 0) {
	Game.PlayRKAlert();
}
