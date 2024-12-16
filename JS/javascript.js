/*
1 -- raccolgo i dati
2 -- inserisco i numeri nelle box per i numeri randomici
  -- memorizzo i numeri in un array
3 -- attraverso una funzione avvio un cout-down di 30 secondi
  -- una volta che il count down arriva a 0 svuoto le box e do la possibiltà all'utente di inserici i numeri che ha memorizzato
4 -- una volta confermate le selezioni mostro all'utente un messaggio con i numeri che è riuscito a memorizzare correttamente
*/
const countDownElm = document.querySelector(".counter")
const submitTakerElm = document.getElementById("submit_taker")
const guessesElm = document.getElementById("guesses")

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* function within (base, check) {
    resoults = []
    for (let i = 0; i < base.length; i++) {
        resoults.push(base.includes(check[i]))      tryed validator
    }
    return resoults
} */

const randomNumbers = []
for (let i = 0; i < 5; i++) {
    if (!randomNumbers.includes(randomNumbers[i])) {
        randomNumbers.push(randomizer(1, 99))
    } else {
        i--
    }
}


let boxed_numbers = []
boxed_numbers.push(document.getElementById("check_number"))
boxed_numbers.push(document.getElementById("check_number1"))
boxed_numbers.push(document.getElementById("check_number2"))
boxed_numbers.push(document.getElementById("check_number3"))
boxed_numbers.push(document.getElementById("check_number4"))

for (let i = 0; i < 5; i++) {
    boxed_numbers[i].value = randomNumbers[i]
}


let countDown = 5
const stop = setInterval(() => {
    countDown--
    countDownElm.innerHTML = countDown
    if (countDown == 0) {
        clearInterval(stop)

    for (let i = 0; i < boxed_numbers.length; i++) {
        boxed_numbers[i].value = ""
        boxed_numbers[i].removeAttribute("disabled")
    }
    }
    
}, 1000)


submitTakerElm.addEventListener("submit", function(sub) {
    sub.preventDefault()
    const userInput = []
    for (let i = 0; i < boxed_numbers.length; i++) {
        userInput.push(boxed_numbers[i].value)
    }

    let randomChild = randomNumbers
    const withIn = []
    for (let i = 0; i < boxed_numbers.length; i++) {
        if (randomChild.includes(Number(userInput[i]))) {
            if (!withIn.includes(Number(userInput[i]))) {
                withIn.push(Number(userInput[i]))
            } else {
                withIn.push("\\")
            }
        } else {
            withIn.push("\\")
        }
    }

    console.log(withIn + userInput)

    guessesElm.innerHTML = (`Hai indovinato: ${withIn}`)
})