const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const resultMeterFeetEl = document.getElementById('meter-feet')
const resultLitersGallonsEl = document.getElementById('liters-gallons')
const resultKilogramsPoundsEl = document.getElementById('kilograms-pounds')

const renderResults = () => {
    // save value from input
    const basicValue = inputEl.value
    if (basicValue > 0) {
        // calculation meters/feet
        const meterFeet = (basicValue * 3.281).toFixed(3)
        const feetMeter = (basicValue / 3.281).toFixed(3)
        // calculation liters/gallons
        const literGallon = (basicValue * 0.264).toFixed(3)
        const gallonLiter = (basicValue / 0.264).toFixed(3)
        // calculation kilograms/pounds
        const kiloPound = (basicValue * 2.204).toFixed(3)
        const poundKilo = (basicValue / 2.204).toFixed(3)
        resultMeterFeetEl.textContent = `${basicValue} meters = ${meterFeet} feet | ${basicValue} feet = ${feetMeter} meters`
        resultLitersGallonsEl.textContent = `${basicValue} liters = ${literGallon} gallons | ${basicValue} gallons = ${gallonLiter} liters`
        resultKilogramsPoundsEl.textContent = `${basicValue} kilos = ${kiloPound} pounds | ${basicValue} pounds = ${poundKilo} kilos`
    } else {
        resultMeterFeetEl.textContent = resultLitersGallonsEl.textContent = resultKilogramsPoundsEl.textContent = "Insert only positive number"
    }
}

const deleteInput = (event) => {
    event.target.value = ""
}

inputBtn.addEventListener('click', renderResults)
inputEl.addEventListener('click', deleteInput)

