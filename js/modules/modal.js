function openModal(modalSelector, modalTimerId) {
    const  modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const  modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    

    //MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');


    function openModalByscroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', openModalByscroll);
            clearTimeout(modalTimerId);
        }
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {openModal(modalSelector, modalTimerId)});
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') =='') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);   
        }
    });

    window.addEventListener('scroll', openModalByscroll);
}

export default modal;
export {closeModal};
export {openModal};