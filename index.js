/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.querySelector("#convert-btn")
const inputNum = document.querySelector("#inputNum")
const lengthCalc = document.querySelector("#length-calc")
const volCalc = document.querySelector("#volume-calc")
const massCalc = document.querySelector("#mass-calc")

function calculateLength() {
    let input = inputNum.value 
    let lengthFt = (input * 3.281).toFixed(3)
    let lengthMeter = (input * 0.3047).toFixed(3)

    lengthCalc.innerHTML = `${input} meters = ${lengthFt} feet | ${input} feet = ${lengthMeter} meters`
}

function calculateVolume() {
    let input = inputNum.value 
    let volGallons = (input * 0.264172).toFixed(3)
    let volLiters = (input * 3.78541).toFixed(3)

    volCalc.innerHTML = `${input} liters = ${volGallons} gallons | ${input} gallons = ${volLiters} liters`
}

function calculateMass() {
    let input = inputNum.value 
    let massLb = (input * 2.20462).toFixed(3)
    let massKilo = (input * 0.453592).toFixed(3)

    massCalc.innerHTML = `${input} kilos = ${massLb} pounds | ${input} pounds = ${massKilo} kilos`
}


convertBtn.addEventListener("click", function(){
    console.log("Button clicked!")

    calculateLength();
    calculateVolume();
    calculateMass();

    inputNum.value = ""

})

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log("enter button pressed!")
    
        calculateLength();
        calculateVolume();
        calculateMass();

        inputNum.value = ""
    }
});