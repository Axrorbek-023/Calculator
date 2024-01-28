var elResult = document.querySelector('.answer')
var elNum1 = document.querySelector('.num1')
var elValConver = document.querySelector('.karra')
// var elForm = document.querySelector('.form')

function fn() {
    var value = elValConver.value
    var val = elNum1.value
    var javob = value * val
    elResult.textContent = "Javob - " + javob
}