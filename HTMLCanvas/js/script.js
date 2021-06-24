

function init(){

    var elem = document.getElementById("canvas");

    canvas = elem.getContext("2d");

    canvas.globalAlpha=0.50;

    canvas.fillStyle= "black";
    canvas.fillRect(100, 100, 100, 100);

    canvas.strokeStyle= "#66a3ff";
    canvas.strokeRect(105, 105, 90, 90);

    canvas.clearRect(110, 110, 80, 80);
    
}





window.addEventListener("load",init,false);
