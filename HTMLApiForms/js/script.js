function init(){

    var insertedName = document.getElementById("insertedName");
    var surname = document.getElementById("surname");

    surname.addEventListener("input", validate, false);
    insertedName.addEventListener("input",validate,false);
    
    var sendButton = document.getElementById("send");

    sendButton.addEventListener("click", send,false);

    var age = document.getElementById("age");
    age.addEventListener("input",rangeChanger,false);
    document.register_form.addEventListener("invalid",validateForm,true);
    document.register_form.addEventListener("input",validateOnInput,false);
    validate();
    rangeChanger();
}

function rangeChanger(){
    var output = document.getElementById("range");
    var result = age.value-30;
    if(result<30){
        result = 0;
        age.value=30;
    }

    output.innerHTML = "Range: <br/>" +  result + " a " + age.value;

}

function validate(){
    if(insertedName.value=="" && surname.value == ""){
        insertedName.setCustomValidity("Please insert name");
        insertedName.style.background= "#FFDDDD";
        surname.setCustomValidity("Please insert surname");
        surname.style.background= "#FFDDDD";
    } else if(insertedName.value == ""){
        insertedName.setCustomValidity("Please insert name");
        insertedName.style.background= "#FFDDDD";
        surname.setCustomValidity("");
        surname.style.background= "#FFFFFF";
    } else if(surname.value == ""){
        surname.setCustomValidity("Please insert surname");
        surname.style.background= "#FFDDDD";
        insertedName.setCustomValidity("");
        insertedName.style.background= "#FFFFFF";
    } else{
        insertedName.setCustomValidity("");
        surname.setCustomValidity("");
        surname.style.background= "#FFFFFF";
        insertedName.style.background= "#FFFFFF";
    }
}
//e stands for error
function validateForm(e){
    var element = e.target;
    element.style.background = "#FFDDDD";
}


function send(){
    var correct = document.register_form.checkValidity();

    if(correct){
        document.register_form.submit();
    }
}

function validateOnInput(e){
    var element = e.target;
    if(element.validity.valid == true){
        element.style.background="#FFFFFF";
    } else{
        element.style.background="#FFDDDD";
    }
}

window.addEventListener("load", init, false);