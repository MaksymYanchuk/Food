function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    
    // SLIDER

    const slider = document.querySelector(container),
          slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;
    

      if (slides.length <10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })

    const carouselIndicator = document.createElement('ol');
    carouselIndicator.classList.add('carousel-indicators');
    
    slider.style.position = 'relative';

    slidesWrapper.append(carouselIndicator);

    slides.forEach(slide => {
        const indicatorElement = document.createElement('li');
        indicatorElement.classList.add('dot');
        carouselIndicator.append(indicatorElement);
    })

    const indicatorElements = document.querySelectorAll('.dot');

    const paintIndicator = function() {
        indicatorElements.forEach((item, i) => {
            item.classList.remove('active')
        });
        indicatorElements[slideIndex - 1].classList.add('active');
    }

    const setCurrentNubmer = function() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    const deleteNoDigits = function(str) {
        return +str.replace(/\D/g, '')
    }

    paintIndicator();

    next.addEventListener('click', () => {
        if (offset == deleteNoDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }

        slidesField.style.transform = `translatex(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCurrentNubmer();
    
        paintIndicator();
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            
            offset = deleteNoDigits(width) * (slides.length - 1)
        } else {
            offset -= deleteNoDigits(width);
        }

        if (slides.length <10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        slidesField.style.transform = `translatex(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCurrentNubmer();

        paintIndicator();
    })

    indicatorElements.forEach((item, i) => {
        item.addEventListener('click', (e) =>{
            const slideTo = i + 1;

            slideIndex = slideTo;

            offset = deleteNoDigits(width) * (slideTo-1);
            slidesField.style.transform = `translatex(-${offset}px)`

        setCurrentNubmer();
        paintIndicator();
        })
    })
}

export default slider;