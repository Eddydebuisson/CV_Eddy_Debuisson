
function menuMobile() {
    const btn = document.querySelector('.burger')
    const header = document.querySelector('header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {


        header.classList.toggle('show-nav');

    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skill .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s"
    });

    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "all 2s"
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                let elem = entry.target;
                elem.style.width = elem.dataset.width + "%";
                

            };
        });
    });

    skills.forEach(skill => {
        skillObserver.observe(skill);
    });
}

observerIntersectionAnimation();