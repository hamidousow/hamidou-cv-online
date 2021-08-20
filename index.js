const btnBurger = document.querySelector('#btn-burger');
const btnCloseMenu = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');
const linkNav = document.getElementsByClassName('link-nav');
const navBg = document.getElementById('nav-mobile');

// switch theme
const btnSwitchTheme = document.querySelectorAll('.btn-change-mode');
const btnSwitchThemeMobile = document.getElementById('btn-change-mode-mbl');
const body = document.querySelector('#body');
//const containerSite = document.querySelector('.container-site');

for( i = 0 ; i < btnSwitchTheme.length ; i++ ) {
    btnSwitchTheme[i].addEventListener('click', () => {
        console.log('yes');
        body.classList.toggle('dark-mode');
    });
}

// open and close aside menu on mobile devices 
btnBurger.addEventListener('click', () => {   
    asideMenu.classList.add('show');    
    asideMenu.style.width = '50%';
    asideMenu.style.transition = '.5s';
    btnBurger.style.display = "none";
    btnCloseMenu.style.display = "flex";       
});

btnCloseMenu.addEventListener('click', () => {     
    asideMenu.classList.remove('show');
    asideMenu.style.width = '0%';    
    asideMenu.style.transition = '.5s';
    btnBurger.style.display = "flex";
    btnCloseMenu.style.display = "none";
});

// close aside menu if click on link nav mobile devices

for(let j = 0 ; j < linkNav.length ; j++){
    linkNav[j].addEventListener('click', () => {     
        asideMenu.classList.remove('show');
        asideMenu.style.width = '0%';    
        asideMenu.style.transition = '.5s';
        btnBurger.style.display = "flex";
        btnCloseMenu.style.display = "none";
    });
};

// bg-color nav when scroll

window.addEventListener('scroll', () => {
    if(window.scrollY >= 80) {
        navBg.classList.add('navBg');
    } else {
        navBg.classList.remove('navBg');
    }
})






















