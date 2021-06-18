var vid, seekbar, progress, play;

function init(){

    vid = document.getElementById("vid");
    seekbar = document.getElementById("seekbar");
    progress = document.getElementById("progress");
    play = document.getElementById("play");
    maxWidth = seekbar.offsetWidth;

    play.addEventListener("click", start, false);

    seekbar.addEventListener("click", seek, false);

}

function start(){
    if (vid.paused == false && vid.ended == false) {
        // Play the vid
        vid.pause();
    
        // Update the button text to 'Pause'
        play.innerHTML = "Play";
      } else {
        // Pause the vid
        vid.play();
    
        // Update the button text to 'Play'
        play.innerHTML = "Pause";
        barProgress = setInterval(state, 50);
      }

}

function state(){
    if(vid.ended == false){
        var total = parseInt(vid.currentTime*maxWidth/vid.duration);
        progress.style.width = total+"px";
    }else{
        progress.style.width = "0px";
        vid.currentTime = 0;
        play.innerHTML = "Play";
    }
    
}

function seek(position){
    if(vid.paused == false && vid.ended == false){
        var mouseInX = position.pageX-seekbar.offsetLeft;
        var pointPressed = mouseInX*vid.duration/maxWidth;

        vid.currentTime = pointPressed;
        progress.style.width = mouseInX + "px";

    }
}

window.addEventListener("load",init,false);