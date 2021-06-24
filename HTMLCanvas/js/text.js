

function init(){
    var element = document.getElementById("textCanvas");

    canvas = element.getContext("2d");
    //shadows
    canvas.shadowColor="rgba(0,0,0,0.5)";
    canvas.shadowOffsetX=3;
    canvas.shadowOffsetY=3;
    canvas.shadowBlur=4;

    //text
    canvas.font="bold 24px verdana";
    canvas.textAlign="start";
    canvas.textBaseline="top";

    canvas.fillText("Hello World!", 100, 100);
    
    var textWidth = canvas.measureText("Hello World!");

    /*canvas.strokeRect(100, 100, textWidth.width+15, 24+15);*/


}



window.addEventListener("load",init,false);