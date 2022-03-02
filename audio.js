

const playIcon = document.getElementById("play");
const vol = document.getElementById("muto");
const playIcon2 = document.getElementById("play2");
const vol2 = document.getElementById("muto2");
const playIcon3 = document.getElementById("play3");
const vol3 = document.getElementById("muto3");

const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");

function togglePlay(x) {
    switch(x) {
      case "audio":
        if (playIcon.getAttribute("src") == "play.png") {
            console.log("play");
            playIcon.src = "pause.png";
            audio.play();
        } else {
            console.log("stop");
            playIcon.src = "play.png";
            audio.pause();
        }
        break;
      case "audio2":
        if (playIcon2.getAttribute("src") == "play.png") {
            console.log("play");
            playIcon2.src = "pause.png";
            audio2.play();
        } else {
            console.log("stop");
            playIcon2.src = "play.png";
            audio2.pause();
        }
        break;
      case "audio3":
        if (playIcon3.getAttribute("src") == "play.png") {
            console.log("play");
            playIcon3.src = "pause.png";
            audio3.play();
        } else {
            console.log("stop");
            playIcon3.src = "play.png";
            audio3.pause();
        }
        break;
    }

}


function toggleMute(x) {

    switch(x) {
      case "audio":
        if (vol.getAttribute("src") == "volume.png") {
            vol.src = "mute.png";
            audio.volume = 0.0;
            } else {
                vol.src = "volume.png";
                audio.volume = 1.0;
            }
        break;
      case "audio2":
        if (vol2.getAttribute("src") == "volume.png") {
            vol2.src = "mute.png";
            audio2.volume = 0.0;
            } else {
                vol2.src = "volume.png";
                audio2.volume = 1.0;
            }
        break;
      case "audio3":
        if (vol3.getAttribute("src") == "volume.png") {
                vol3.src = "mute.png";
                audio3.volume = 0.0;
            } else {
                vol3.src = "volume.png";
                audio3.volume = 1.0;
            }
        break;
    }
    

}

var progress = document.getElementById("progress");
var progress2 = document.getElementById("progress2");
var progress3 = document.getElementById("progress3");

var current = document.getElementById("current");
var current2 = document.getElementById("current2");
var current3 = document.getElementById("current3");

const bar = document.getElementById("bar");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

//PROGRESS BAR 
audio.addEventListener("timeupdate", function () {
    bar.style.width = parseInt(((audio.currentTime / audio.duration) * 100), 10) + "%";

    //time2 = Math.floor(audio.currentTime / 60) + ":" + (audio.currentTime % 60 ? audio.currentTime % 60 : '00');
    var m = parseInt((audio.currentTime / 60) % 60);
    var s = parseInt(audio.currentTime % 60);

/*
    if (s < 10) {
        s = '0' + s;
    }
*/
    (s < 10) ? s = '0'+ s : s;

    time = m + ":" + s;
    current.innerHTML = time;
});

audio2.addEventListener("timeupdate", function () {
    bar2.style.width = parseInt(((audio2.currentTime / audio2.duration) * 100), 10) + "%";

    var m = parseInt((audio2.currentTime / 60) % 60);
    var s = parseInt(audio2.currentTime % 60);

    (s < 10) ? s = '0'+ s : s;

    time = m + ":" + s;
    current2.innerHTML = time;
});
audio3.addEventListener("timeupdate", function () {
    bar3.style.width = parseInt(((audio3.currentTime / audio3.duration) * 100), 10) + "%";

    var m = parseInt((audio3.currentTime / 60) % 60);
    var s = parseInt(audio3.currentTime % 60);

    (s < 10) ? s = '0'+ s : s;

    time = m + ":" + s;
    current3.innerHTML = time;
});


progress.onclick = function (e) {
    //calculate the normalized position clicked
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
    var clickTime = clickPosition * audio.duration;

    //move the playhead to the correct position
    audio.currentTime = clickTime;
}
progress2.onclick = function (e) {
    //calculate the normalized position clicked
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
    var clickTime = clickPosition * audio2.duration;

    //move the playhead to the correct position
    audio2.currentTime = clickTime;
}
progress3.onclick = function (e) {
    //calculate the normalized position clicked
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
    var clickTime = clickPosition * audio3.duration;

    //move the playhead to the correct position
    audio3.currentTime = clickTime;
}


