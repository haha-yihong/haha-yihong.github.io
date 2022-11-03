// JavaScript source code
var bgaudiocount = 0;
function bgaudio() {
    ++bgaudiocount;
    if (bgaudiocount % 2 == 1) {
        document.getElementById("music").play();
    } else {
        document.getElementById("music").pause();
    }

}

