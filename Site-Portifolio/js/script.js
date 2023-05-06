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
