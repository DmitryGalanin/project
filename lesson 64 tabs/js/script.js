window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),  
          tabsParent = document.querySelector('.tabcontainer');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

    }         

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        };
    });





    // Timer

    // const deadline = '2023-01-18T00:00:00.000+03:00';

    // function getTimeRemaining(endTime) {
    //     const t = Date.parse(endTime) - Date.parse(new Date()),
    //           days = Math.floor(t / (1000 * 60 *60 * 24)),
    //           hours = Math.floor((t / (1000 *60 *60) % 24)),
    //           minutes = Math.floor((t / 1000 / 60) % 60),
    //           seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };      
    // };

    // function getZero(num) {
    //     if (num > 0 & num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // };

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //     days = timer.querySelector('#days'),
    //     hours = timer.querySelector('#hours'),
    //     minutes = timer.querySelector('#minutes'),
    //     seconds = timer.querySelector('#seconds'),
    //     timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock () {
    //         const t = getTimeRemaining(endTime);

    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.total <= 0) (
    //             clearInterval(timeInterval)
    //         )
    //     };
    // };

    // setClock('.timer', deadline);

// ----------  мой таймер -------------------

const deadline = '2023-01-17T00:00:00.000+03:00';

getTimeRemaining(deadline);
setClock('.promotion__timer', deadline);

function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor( t / (1000 * 60 * 60 * 24)),
          hours = Math.floor( t / (1000 * 60 * 60) % 24),
          minutes = Math.floor( t / (1000 * 60) % 60),
          seconds = Math.floor( t / (1000) % 60); 
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };    
}

function getZero(num) {
    if (num < 10 ) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),          
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
        const t = getTimeRemaining(endTime),
              total = t.total;
        days.innerHTML = getZero(t.days); 
        hours.innerHTML = getZero(t.hours); 
        minutes.innerHTML = getZero(t.minutes); 
        seconds.innerHTML = getZero(t.seconds); 
        if (total <= 0) {
            clearInterval(timeInterval);
            days.innerHTML = '00'; 
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    }  
       
}




});

