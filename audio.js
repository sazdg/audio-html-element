

const playIcon = document.getElementById("play");
const vol = document.getElementById("muto");
const audio = document.getElementById("audio");

const bar = document.getElementById("bar");


if (audio.canPlayType("audio/mpeg")) {
    console.log("audio funge");
    console.log(audio.duration);
}

//playIcon.onclick = togglePlay;



function togglePlay() {
    console.log(playIcon.getAttribute("src"));
    if (playIcon.getAttribute("src") == "play.png") {
        console.log("play");
        playIcon.src = "pause.png";
        audio.play();
    } else {
        console.log("stop");
        playIcon.src = "play.png";
        audio.pause();
    }
}


function toggleMute() {
    if (vol.getAttribute("src") == "volume.png") {
        vol.src = "mute.png";
        //funzione per il volume silenzioso
        audio.volume = 0.0
    } else {
        vol.src = "volume.png";
        audio.volume = 1.0
    }

}

var progress = document.getElementById("progress");
var current = document.getElementById("current");

//PROGRESS BAR 
audio.addEventListener("timeupdate", function () {
    bar.style.width = parseInt(((audio.currentTime / audio.duration) * 100), 10) + "%";

    time2 = Math.floor(audio.currentTime / 60) + ":" + (audio.currentTime % 60 ? audio.currentTime % 60 : '00');
    var m = parseInt((audio.currentTime / 60) % 60);
    var s = parseInt(audio.currentTime % 60);

/*
    if (s < 10) {
        s = '0' + s;
    }
*/
    (s < 10) ? s = '0'+s : s;

    time = m + ":" + s;
    current.innerHTML = time;
});


progress.onclick = function (e) {
    //calculate the normalized position clicked
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
    var clickTime = clickPosition * audio.duration;

    //move the playhead to the correct position
    audio.currentTime = clickTime;
}


