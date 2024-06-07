const serviceContainer = document.getElementById('serviceContainer');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

arrowLeft.addEventListener('mouseenter', () => {
    serviceContainer.scrollLeft -= 300;
    arrowLeft.classList.add('arrow-hover');
});

arrowRight.addEventListener('mouseenter', () => {
    serviceContainer.scrollLeft += 300;
    arrowRight.classList.add('arrow-hover');
});

arrowLeft.addEventListener('mouseleave', () => {
    arrowLeft.classList.remove('arrow-hover');
});

arrowRight.addEventListener('mouseleave', () => {
    arrowRight.classList.remove('arrow-hover');
});

serviceContainer.addEventListener('scroll', () => {
    arrowLeft.style.display = 'block';
    arrowRight.style.display = 'block';
    if (serviceContainer.scrollLeft === 0) {
        arrowLeft.style.display = 'none';
    }
    if (serviceContainer.scrollLeft === (serviceContainer.scrollWidth - serviceContainer.clientWidth)) {
        arrowRight.style.display = 'none';
    }
});
const serviceItems = document.querySelectorAll('.service');

serviceItems.forEach(serviceItem => {
    serviceItem.addEventListener('mouseenter', () => {
        serviceItem.classList.add('service-hover');
    });

    serviceItem.addEventListener('mouseleave', () => {
        serviceItem.classList.remove('service-hover');
    });
});

window.addEventListener('load', () => {
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = 1;
});


const aboutTitle = document.querySelector('.about-text h2');
aboutTitle.style.transform = 'translateX(0)';
aboutTitle.style.opacity = 1;

const aboutText = document.querySelectorAll('.about-text p');
aboutText.forEach((p, index) => {
    p.style.transitionDelay = `${index * 0.1}s`;
    p.style.transform = 'translateY(0)';
    p.style.opacity = 1;
});