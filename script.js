var music = document.getElementById('bg-music');
var video = document.getElementById('video-bg');

video.addEventListener('click', function() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
