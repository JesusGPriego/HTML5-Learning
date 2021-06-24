

window.addEventListener("load",init, false);



function init(){

    var c = document.getElementById("gradientCanvas");
    var ctx = c.getContext("2d");

    /*
     * Actually the gradient is bein applyed to the whole canvas.
     */

    //LinearGradient:

    /*
    var grd = ctx.createLinearGradient(0, 150, 500, 150);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 300); 
    */

    //RadialGradient:

    var grd = ctx.createRadialGradient(250, 150, 50, 250, 150, 200);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 300); 
    

}








