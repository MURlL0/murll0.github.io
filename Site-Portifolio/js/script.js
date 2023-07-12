let dropdown = document.querySelector('.dropdown');
let toggle = document.querySelector('.toggle');
let toggleClose = document.querySelector('.toggleClose');

let open = false;

function openClose() {
    if (open === true) {
        open = false;
        dropdown.classList.remove('open');
        toggleClose.classList.remove('open');
        toggle.classList.add('open');
    } else if (open === false) {
        open = true;
        dropdown.classList.add('open');
        toggleClose.classList.add('open');
        toggle.classList.remove('open');
    }
}

toggle.onclick = openClose;

function closeMenu() {
    dropdown.classList.remove('open');
    toggleClose.classList.remove('open');
}

dropdown.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        closeMenu();
    }
});

let swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
