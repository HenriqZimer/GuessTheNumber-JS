let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function newGame(){
    window.location.reload()
}

function compareNumbers() {
    const userNumber = Number(document.
    getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attempts < maxGuesses) {

        if (attempts > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is to high'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts

        } else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is to low'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts

        } else { 
        document.getElementById('textOutput').innerHTML = 'Your number is correct'
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') = ''
        }

    } else {
        document.getElementById('textOutput').innerHTML = 'You have reached the maximum number of attempts ' + computerNumber
    }
}