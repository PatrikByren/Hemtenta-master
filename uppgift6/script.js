
const showResult = document.querySelector("#resultat")
const inputNumber = document.querySelector("input")
function double(){
    if(inputNumber.value/2){
        var result =inputNumber.value * inputNumber.value;
        
    }else{
        result = "Not a number!"
    }
        showResult.innerText = result;
}