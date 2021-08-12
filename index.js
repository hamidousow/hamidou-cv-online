const btnBurger = document.querySelector('#btn-burger');
const btnCloseMenu = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');
const linkNav = document.getElementsByClassName('link-nav');

/* make nav change color when scrolling down
const navBg = document.getElementById('nav-mobile');
let lightMode = document.querySelector('.light-mode #nav-mobile');
let darkMode = document.querySelector('.dark-mode #nav-mobile');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        lightMode.style.backgroundColor = '#dddddd';
        lightMode.style.boxShadow = '0px 1px 5px #000000'
        darkMode.style.backgroundColor = '#080808';       
    } else {
        navBg.style.backgroundColor = 'transparent';        
    }
});*/

// switch theme variables
const btnSwitchTheme = document.querySelector('#btn-change-mode');
const btnSwitchThemeMobile = document.getElementById('btn-change-mode-mbl');
const body = document.querySelector('#body');
const containerSite = document.querySelector('.container-site');

btnSwitchTheme.addEventListener('click', () => {    
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
});

// button switch mode on mobile version 
btnSwitchThemeMobile.addEventListener('click', () => {    
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
});


// open and close aside menu on mobile devices 
btnBurger.addEventListener('click', () => {   
    asideMenu.classList.add('show');    
    asideMenu.style.width = '70%';
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



















