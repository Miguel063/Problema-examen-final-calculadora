function addToDisplay(value) {
    document.getElementById ("Display").value += value
}
function calculate(){
    var expression = document.getElementById("Display").value
    //evalua el como se ejecutan las operaciones
    var result = eval(expression) 
    document.getElementById("Display").value = result;
}
function clearDisplay() {
    document.getElementById ("Display").value = " "
}
