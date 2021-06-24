window.addEventListener("load",init,false);

function init(){
    var element = document.getElementById("strokeCanvas");

    canvas = element.getContext("2d");

    canvas.beginPath();

    canvas.moveTo(100,200);

    canvas.lineTo(200,200);
    canvas.lineTo(150,100);
    canvas.lineTo(100,200);

    canvas.closePath();

    canvas.stroke();
}