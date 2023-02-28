function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS

    const tabsParent = document.querySelector(tabsParentSelector),
          tabs = tabsParent.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.remove("show");
            item.classList.add("hide");
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add('tabheader__item_active');
    }
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

export default tabs;