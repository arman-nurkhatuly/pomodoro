const button = document.querySelector('.card-btn');
const cards = document.querySelectorAll('#card-title-elem');
const resetBtn = document.querySelector('#reset-btn');
let minutesElem = document.querySelector('#timer-minutes');
let secondsElem = document.querySelector('#timer-seconds');
let cardElem = document.querySelector('.card')
let isActiveTimer = false;


let seconds = 60;
let minutes = 25;
let Interval;
let currentWindow = 'pomodoro-card';

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        if (cards[i].classList.contains('short-card')) {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('activated')
            button.classList.add('non-active')
            seconds = 60;
            minutes = 5;
            minutesElem.innerHTML = '05';
            secondsElem.innerHTML = '00';
            currentWindow = 'short-card'

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#4c9195';
            cardElem.style.background = '#5e9ca0'
            cards[i].style.background = '#4c9195'
            button.style.color = '#4c9195'
            resetBtn.style.background = '#5e9ca0'

        } else if (cards[i].classList.contains('long-card')) {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('activated')
            button.classList.add('non-active')
            seconds = 60;
            minutes = 10;
            minutesElem.innerHTML = '10';
            secondsElem.innerHTML = '00';
            currentWindow = 'long-card'

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#457ca3';
            cardElem.style.background = '#5889ac';
            cards[i].style.background = '#457ca3'
            button.style.color = '#457ca3'
            resetBtn.style.background = '#5889ac'

        } else if (cards[i].classList.contains('pomodoro-card')) {
            clearInterval(Interval)
            button.innerHTML = 'Старт'
            button.classList.remove('activated')
            button.classList.add('non-active')
            seconds = 60;
            minutes = 25;
            minutesElem.innerHTML = '25';
            secondsElem.innerHTML = '00';
            currentWindow = 'pomodoro-card'

            // Стили 

            cards.forEach(card => card.style.background = 'none')
            document.body.style.background = '#bc5752';
            cardElem.style.background = '#dd6662'
            cards[i].style.background = '#bc5752'
            button.style.color = '#bc5752'
            resetBtn.style.background = '#dd6662'

        }

    }
}

// ЗАПУСК ТАЙМЕРА

button.onclick = function () {
    if (button.classList.contains('non-active')) {
        clearInterval(Interval)
        Interval = setInterval(decreaseTime, 1000)
        button.classList.remove('non-active')
        button.classList.add('activated')
        button.innerHTML = 'Стоп'
        isActiveTimer = true;
    } else if (button.classList.contains('activated')) {
        clearInterval(Interval)
        button.classList.add('non-active')
        button.classList.remove('activated')
        button.innerHTML = 'Продолжить'
        button.style.fontSize = '15px'
        isActiveTimer = false;
    }
}

// СБРОС ТАЙМЕРА

resetBtn.addEventListener('click', () => {
    if (isActiveTimer == true) {
        clearInterval(Interval)
        if (currentWindow === 'pomodoro-card') {
            minutesElem.innerHTML = '25';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 25;
        } else if (currentWindow === 'short-card') {
            minutesElem.innerHTML = '5';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 5;
        } else if (currentWindow === 'long-card') {
            minutesElem.innerHTML = '10';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 10;
        }

        button.innerHTML = 'Старт'
        isActiveTimer = false;
    } else if (isActiveTimer == false && button.classList.contains('non-active')) {
        clearInterval(Interval)
        if (currentWindow === 'pomodoro-card') {
            minutesElem.innerHTML = '25';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 25;
        } else if (currentWindow === 'short-card') {
            minutesElem.innerHTML = '5';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 5;
        } else if (currentWindow === 'long-card') {
            minutesElem.innerHTML = '10';
            secondsElem.innerHTML = '00';
            seconds = 60;
            minutes = 10;
        }

        button.innerHTML = 'Старт'
    }

})

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