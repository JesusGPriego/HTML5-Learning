window.addEventListener("load", init, false);

var image = new Array;
var imageDestiny;

var fileDestiny;

var imageContainer;

var correctImage = false;

var draggedImage;

function init() {

    image = document.getElementsByClassName("image");
    imageContainer = document.getElementById("object");

    //Events for element origin are: dragstart, dragend, drag.
    setImageDragStart();
    //Events for element imageDestiny are: dragenter, dragover, dragleave
    imageDestiny = document.getElementById("destiny");
    imageDestiny.addEventListener("dragenter", enterOk, false);
    imageDestiny.addEventListener("dragover", function (e) {
        e.preventDefault();
    }
    ,false);
    imageDestiny.addEventListener("dragleave", leaveOk, false);
    imageDestiny.addEventListener("drop", dropped, false);

    fileDestiny = document.getElementById("fileSection");
    fileDestiny.addEventListener("dragenter",function(e){e.preventDefault();},false);
    fileDestiny.addEventListener("dragover",function(e){e.preventDefault();},false);
    fileDestiny.addEventListener("drop",fileDropped,false);

}

function setImageDragStart(){
    for (var i=0;i<image.length;i++){
        image[i].addEventListener("dragstart",dragstart,false);
    }
}

function dragstart(e) {
    var element = e.target;
    var code = "<img src='" + element.getAttribute("src") + "'/>";
    e.dataTransfer.setData("Text", code);
    draggedImage = element;
    checkImage();
}

function dropped(e) {

    e.preventDefault();
    if(correctImage){
        imageDestiny.innerHTML = e.dataTransfer.getData("Text");
        draggedImage.style.visibility="hidden";
        imageContainer.style.resize="25px";
    }
    imageDestiny.style.background = "#FFF";

    
}

function enterOk(e) {
    e.preventDefault();
    imageDestiny.innerHTML="<p>Drag the image here.</p>"
    if(correctImage){
        imageDestiny.style.background = "rgba(4,262,25,0.8)";
    }else{
        imageDestiny.style.background = "#F00";
    }


}

function leaveOk(e) {
    imageDestiny.style.background = "#FFF";
}

function checkImage(){
    if(draggedImage.src.endsWith("1.jpg") 
         || draggedImage.src.endsWith("2.jpg")
         || draggedImage.src.endsWith("3.jpg")){
        correctImage = true;
    }else{
        correctImage = false;
    }
}

function fileDropped(e){
    e.preventDefault();

    var fileDropped = e.dataTransfer.files;

    var fileList="";

    for(var i=0;i<fileDropped.length;i++){
        fileList += "Name: " + fileDropped[i].name + "; Wight: "  + (fileDropped[i].size/1024).toFixed(2) +" kBs"
        + "; Format: " + fileDropped[i].type + "<br/>";
    }

    fileDestiny.innerHTML=fileList;

}