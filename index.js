const btnBurger = document.querySelector('#btn-burger');
const btnCloseMenu = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');
const linkNav = document.getElementsByClassName('link-nav');

// switch theme
const btnSwitchTheme = document.querySelector('#btn-change-mode');
const body = document.querySelector('#body');
const containerSite = document.querySelector('.container-site');

btnSwitchTheme.addEventListener('click', () => {    
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
});


// for the burger menu 
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

for(let i = 0 ; i < linkNav.length-1 ; i++){
    linkNav[i].addEventListener('click', () => {     
        asideMenu.classList.remove('show');
        asideMenu.style.width = '0%';    
        asideMenu.style.transition = '.5s';
        btnBurger.style.display = "flex";
        btnCloseMenu.style.display = "none";
    });
};

// typing animation 















