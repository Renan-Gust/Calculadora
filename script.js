const screen = document.querySelector(".screen-entrance")

function clikedValue(event) {
    const button = event.currentTarget 
    screen.innerHTML += button.value

    if(screen.textContent.length >= 16){
        alert("Limite de caracteres Alcançado")    
    }
}

function plus() {
    screen.innerHTML += "+"
}

function less() {
    screen.innerHTML += "-"
}

function multiply() {
    screen.innerHTML += "x"
}

function division() {
    screen.innerHTML += "/"
}

function dot() {
    screen.innerHTML += "."
}

function clearScreen() {
    screen.innerHTML = ""
}

function result() {
    const number = screen.innerHTML
    const numberToArray = number.split("")

    //Find the character in the array
    const lessSignalFound = numberToArray.find(array => array.startsWith("-"))
    const multiplySignalFound = numberToArray.find(array => array.startsWith("x"))  
    const divisionSignalFound = numberToArray.find(array => array.startsWith("/"))

    //Remove character
    const removePlus = number.split("+")
    const removeLess = number.split("-")
    const removeMultiply = number.split("x")
    const removeDivision = number.split("/")

    //calculate the entered value
    const totalLessSignal = removeLess.reduce((accumulate, finalValue) => Number(accumulate) - Number(finalValue))
    const totalPlusSignal = removePlus.reduce((accumulate, finalValue) => Number(accumulate) + Number(finalValue)) 
    const totalMultiplySignal = removeMultiply.reduce((accumulate, finalValue) => Number(accumulate) * Number(finalValue))
    const totalDivisionSignal = removeDivision.reduce((accumulate, finalValue) => Number(accumulate) / Number(finalValue))
    
    //Show on screen
    screen.innerHTML = totalPlusSignal
    if(lessSignalFound == "-") screen.innerHTML = totalLessSignal
    if(multiplySignalFound == "x") screen.innerHTML = totalMultiplySignal
    if(divisionSignalFound == "/") screen.innerHTML = totalDivisionSignal
}