


function init(){

    var element = document.getElementById("curveCanvas");
    canvas = element.getContext("2d");

    canvas.beginPath();

    canvas.arc(100, 100, 50, 0, 1, false);
    canvas.stroke();

}




window.addEventListener("load",init,false);