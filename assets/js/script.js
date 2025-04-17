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

function kebawah(id) {
    const options = document.getElementById(id);
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function scrolotomatis(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}