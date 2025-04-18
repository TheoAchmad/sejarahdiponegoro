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
    // Sembunyikan semua elemen dengan class 'options'
    const allOptions = document.querySelectorAll('.options');
    allOptions.forEach(option => {
        if (option.id !== id) {
            option.style.display = 'none';
        }
    });

    // Toggle tampilan options yang diklik
    const current = document.getElementById(id);
    if (current.style.display === 'block') {
        current.style.display = 'none';
    } else {
        current.style.display = 'block';
    }
}


function scrolotomatis(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}