const button = document.querySelector('#card-btn');
const cards = document.querySelectorAll('.card-title-elem');
let minutesElem = document.querySelector('#timer-minutes');
let secondsElem = document.querySelector('#timer-seconds');

let seconds = 60;
let minutes = 25;
let Interval;

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        if (!cards[i].classList.contains('selected')) {
            cards.forEach(card => {
                card.classList.remove('selected')
            })
            cards[i].classList.add('selected')
        }
    }
}

button.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(decreaseTime, 1000)
}

function stopTimer() {
    clearInterval(Interval)
}

function decreaseTime() {
    if(seconds == 60 && minutes == 25){
        minutes--
        minutesElem.innerHTML = minutes
    }

    seconds--

    if (seconds < 10 && seconds !== 0) {
        secondsElem.innerHTML = '0' + seconds
    }

    if(seconds >= 10){
        secondsElem.innerHTML = seconds
    }

    if(seconds == 0 && minutes >= 10){
        minutes--
        minutesElem.innerHTML = minutes
        seconds = 60
    }

    if(seconds == 0 && minutes < 10 && minutes > 0){
        minutes--
        minutesElem.innerHTML = '0' + minutes
        seconds = 60
    }

    if(seconds == 0 && minutes == 0){
        clearInterval(Interval)
        secondsElem.innerHTML = '00'
        minutesElem.innerHTML = '00'
        seconds = 0
        minutes = 0
    }
}