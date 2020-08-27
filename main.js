let playing = false;

PAUSE_TEXT = "<i class=\"fa fa-pause\" aria-hidden=\"true\"></i> Pause"
PLAY_TEXT = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i> Play"


class Stream {

    constructor(audio) {
        this.audio = audio;
        this.started = false
        this.pauseAudio()
    }

    setAudioLevel(audioLevel) {
        if (audioLevel > 1 || audioLevel < 0) {
            return;
        }
        this.audio.volume = audioLevel;
    };


    playAudio() {
        if (!this.started) {
            this.started = true;
            this.audio.play()
        }
        this.playing = true;
        this.setAudioLevel(1);
        document.getElementById('pause-button').innerHTML = PAUSE_TEXT;
    };

    pauseAudio(){
        this.playing = false;
        this.setAudioLevel(0);
        document.getElementById('pause-button').innerHTML = PLAY_TEXT;
    };

   toggleAudio() {
        if (this.playing) {
            this.pauseAudio();
        } else {
            this.playAudio();
        }
    };
}
var s;

jQuery(document).ready(function() {
    var audio = document.getElementById('music');
    s = new Stream(audio);
    jQuery('#pause-button').click(() => {
        s.toggleAudio();
    });
})