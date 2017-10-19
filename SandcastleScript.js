// Code again from Xenko

var Game = {};

// NOTE: Tons of audio code has been commented.
// NOTE: To re-enable audio, uncomment 'AudioAlert' comments.
/* Removed: AudioAlert
//BB Audio Alerts Variables
Game.audio_Bell = new Audio("http://xenko.comxa.com/Ship_Bell.mp3");
	BeachBall.audio_Bell.volume = 1;
BeachBall.audio_Chime = new Audio("http://xenko.comxa.com/Chime.mp3");
	BeachBall.audio_Chime.volume = 1;
BeachBall.RKAlertFrequency = 8;
if (Molpy.Got('Kitnip') == 1){BeachBall.RKAlertFrequency = 10;}
BeachBall.RKPlayAudio = 1;
BeachBall.RKNewAudio = 1;
*/

Game.PlayRKAlert = function() {
	//If proper mNP and hasn't yet played this mNP (can happen if refresh Rate < mNP length)
	if (Math.floor(BeachBall.RKTimer % BeachBall.RKAlertFrequency) == 0 && BeachBall.RKPlayAudio == 1) {
		BeachBall.audio_Bell.play();
		BeachBall.RKPlayAudio = 0;
	}
	//Otherwise reset played this mNP
	else {
		BeachBall.RKPlayAudio = 1;
	}
}

if (Molpy.Redacted.location > 0) 
