const button = document.querySelector('.card-btn');
const cards = document.querySelectorAll('#card-title-elem');
let minutesElem = document.querySelector('#timer-minutes');
let secondsElem = document.querySelector('#timer-seconds');
let cardElem = document.querySelector('.card')

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
        if (cards[i].classList.contains('short-card')) {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('true')
            button.classList.add('false')
            seconds = 60;
            minutes = 5;
            minutesElem.innerHTML = '05';
            secondsElem.innerHTML = '00';
            

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#4c9195';
            cardElem.style.background = '#5e9ca0'
            cards[i].style.background = '#4c9195'
            button.style.color = '#4c9195'

        } else if (cards[i].classList.contains('long-card')) {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('true')
            button.classList.add('false')
            seconds = 60;
            minutes = 10;
            minutesElem.innerHTML = '10';
            secondsElem.innerHTML = '00';

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#457ca3';
            cardElem.style.background = '#5889ac';
            cards[i].style.background = '#457ca3'
            button.style.color = '#457ca3'
        } else {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('true')
            button.classList.add('false')
            seconds = 60;
            minutes = 25;
            minutesElem.innerHTML = '25';
            secondsElem.innerHTML = '00';

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#bc5752';
            cardElem.style.background = '#dd6662'
            cards[i].style.background = '#bc5752'
            button.style.color = '#bc5752'
        }

    }
}

button.onclick = function () {
    if (button.classList.contains('false')) {
        clearInterval(Interval)
        Interval = setInterval(decreaseTime, 1000)
        button.classList.remove('false')
        button.classList.add('true')
        button.innerHTML = 'Стоп'
    } else if (button.classList.contains('true')) {
        clearInterval(Interval)
        button.classList.add('false')
        button.classList.remove('true')
        button.innerHTML = 'Продолжить'
    }
}



function decreaseTime() {
    if (seconds == 60 && minutes > 1) {
        minutes--
        minutesElem.innerHTML = minutes
    }

    seconds--

    if (seconds < 10 && seconds !== 0) {
        secondsElem.innerHTML = '0' + seconds
    }

    if (seconds >= 10) {
        secondsElem.innerHTML = seconds
    }

    if (seconds == 0 && minutes >= 10) {
        minutes--
        minutesElem.innerHTML = minutes
        seconds = 60
    }

    if (seconds == 0 && minutes < 10 && minutes > 0) {
        minutes--
        minutesElem.innerHTML = '0' + minutes
        seconds = 60
    }

    if (seconds == 0 && minutes == 0) {
        clearInterval(Interval)
        secondsElem.innerHTML = '00'
        minutesElem.innerHTML = '00'
        seconds = 0
        minutes = 0
    }
}