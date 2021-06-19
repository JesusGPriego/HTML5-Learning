var track, seekbar, progress, play;

function init(){

    track = document.getElementById("track");
    seekbar = document.getElementById("seekbar");
    progress = document.getElementById("progress");
    play = document.getElementById("play");
    maxWidth = seekbar.offsetWidth;

    play.addEventListener("click", start, false);

    seekbar.addEventListener("click", seek, false);

}

function start(){
    if (track.paused == false && track.ended == false) {
        // Play the track
        track.pause();
    
        // Update the button text to 'Pause'
        play.innerHTML = "Play";
      } else {
        // Pause the track
        track.play();
    
        // Update the button text to 'Play'
        play.innerHTML = "Pause";
        barProgress = setInterval(state, 50);
      }

}

function state(){
    if(track.ended == false){
        var total = parseInt(track.currentTime*maxWidth/track.duration);
        progress.style.width = total+"px";
    }else{
        progress.style.width = "0px";
        track.currentTime = 0;
        play.innerHTML = "Play";
    }
    
}

function seek(position){
    
    var mouseInX = position.pageX-seekbar.offsetLeft;
    var pointPressed = mouseInX*track.duration/maxWidth;

    track.currentTime = pointPressed;
    progress.style.width = mouseInX + "px";

    
}

window.addEventListener("load",init,false);