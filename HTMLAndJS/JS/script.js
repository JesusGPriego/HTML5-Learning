//coment

/*
 * comment
 */



function firstFunction(){
    alert("js file script executed");
}
    

//Targetted scripts:
function pHover(){

    var h2s = document.querySelectorAll("#slice h2");
    for(var i=0; i<h2s.length;i++){
        h2s[i].onclick=changeColor;
    }

    var z = document.getElementsByClassName("mainh1")[0];
    z.onclick=changeColor;
    document.getElementsByTagName("p")[0].onclick=firstFunction;
    document.getElementById("idIdentified").onclick=firstFunction;
    /*
     * querySelector calls classes
     */
    document.querySelector(".calledByQuerySelector").onclick=changeColor;
    

    var mybtn = document.getElementById("btn");
    mybtn.addEventListener("click", mybtnFunction, false);

    for(var i=0;i<3;i++){
        document.getElementsByTagName("a")[i].onclick=firstFunction;
    }
   
    var imagenes = document.getElementsByTagName("img");
    for (var i = 0; i < imagenes.length; i++) {
		
        imagenes[i].addEventListener("click",imgPath,false);
        imagenes[i].addEventListener("mouseover",grow,false);
        imagenes[i].addEventListener("mouseout",decrease,false);
    }
}

function changeColor(){

    if(this.style.color == 'blue'){
        this.style.color = 'red'
    }else{
        this.style.color = 'blue'
    }
}

function mybtnFunction(){

    alert("event has been triggered!");

}

function imgPath(){  
    alert(this.src);
 }
 
 function grow(){
    this.width = 230;
    this.height = 230;
 }
 
 function  decrease(){
    this.width = 200;
    this.height = 200;
 }


window.onload=pHover;
