window.addEventListener("DOMContentLoaded", ()=> {

    // TABS

    const tabsParent = document.querySelector(".tabheader__items"),
          tabs = tabsParent.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent");
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add('tabheader__item_active');
    }
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {

                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
    hideTabContent();
    showTabContent();

    //TIMER

    const deadline = "2024-01-01 00:00:00";

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / (1000 * 60 ) % 60)),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total':t,
            'days': days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds,
        };
    }
    
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
    }

});