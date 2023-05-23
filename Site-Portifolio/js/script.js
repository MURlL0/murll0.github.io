let dropdown = document.querySelector('.dropdown');

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

let toggle = document.querySelector('.toggle');

toggle.onclick = openClose;

let swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
