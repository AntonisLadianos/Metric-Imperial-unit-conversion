// javascript

let One_Meter_To_Feet = 3.2808399
let One_Liter_To_Gallon = 0.264172052
let One_Kilo_To_Pound = 2.20462262

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function UpdateInput(value){
    
    function Length(){
        let meter = value / One_Meter_To_Feet
        let feet = value * One_Meter_To_Feet
        
        return value + " meters = " + feet.toFixed(3) + " feet " +  " | " 
        + value + " feet = " + meter.toFixed(3) + " meter"
        
    } 
    
    function Volume(){
        let liters = value / One_Liter_To_Gallon
        let gallons = value * One_Liter_To_Gallon
        
        return  value + " liters = " + gallons.toFixed(3) + " gallons " +  " | " 
        + value + " gallons = " + liters.toFixed(3) + " liters"
        
    }
    
    function Mass(){
        let kilograms = value / One_Kilo_To_Pound
        let pounds = value * One_Kilo_To_Pound 
        
        return  value + " kilos = " + pounds.toFixed(3) + " pounds " +  " | " 
        + value + " pounds = " + kilograms.toFixed(3) + " kilos"
    }
    
    lengthEl.textContent = Length()
    volumeEl.textContent = Volume()
    massEl.textContent = Mass()
    
}

function Listener() {
    let value = inputEl.value
    
    if(value == "" || value == 0){
        UpdateInput(0)
    }
    else {
        UpdateInput(value)
    }
    
}

UpdateInput(0)
inputEl.addEventListener("input", Listener)

