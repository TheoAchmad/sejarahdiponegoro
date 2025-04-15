// tambah class aktif
const navnav = document.querySelector('.navigasi');

// ketika hamburger di klik
document.querySelector('#hamburger').onclick = () => {
    navnav.classList.toggle('active');
};

// klik dimana saja untuk menghilangkan side bar
const menu = document.querySelector('#hamburger');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navnav.contains(e.target)) {
        navnav.classList.remove('active');
    }
})