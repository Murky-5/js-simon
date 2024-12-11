/*
1 -- raccolgo i dati
2 -- inserisco i numeri nelle box per i numeri randomici
  -- memorizzo i numeri in un array
3 -- attraverso una funzione avvio un cout-down di 30 secondi
  -- una volta che il count down arriva a 0 svuoto le box e do la possibiltà all'utente di inserici i numeri che ha memorizzato
4 -- una volta confermate le selezioni mostro all'utente un messaggio con i numeri che è riuscito a memorizzare correttamente
*/
const countDownElm = document.querySelector(".counter")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randomNumbers = []
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRndInteger(1, 99))
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


let countDown = 1
const stop = setInterval(() => {
    countDownElm.innerHTML = countDown
    if (countDown == 0) {
        clearInterval(stop)
    }
    countDown--
}, 1000)





