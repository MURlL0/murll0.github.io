let dropdown = document.querySelector('.dropdown');
let toggle = document.querySelector('.toggle');

let open = false;

function openClose() {
    if (open === true) {
        open = false;
        dropdown.classList.remove('open');
    } else if (open === false) {
        open = true;
        dropdown.classList.add('open');
    }
}

toggle.onclick = openClose;

function closeMenu() {
    dropdown.classList.remove('open');
}

dropdown.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        openClose();
    }
});

let swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
