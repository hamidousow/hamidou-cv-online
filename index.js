const btnBurger = document.querySelector('#btn-burger');
const btnCloseBtnBurger = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');

// for switch theme
const btnSwitchTheme = document.querySelector('#btn-change-mode');
const body = document.querySelector('#body');
const containerSite = document.querySelector('.container-site');



// for the burger menu 
btnBurger.addEventListener('click', () => {     
    asideMenu.classList.remove('hide');
    asideMenu.classList.add('show');  
    asideMenu.style.width = '70%';
    btnBurger.classList.add('hide');
    btnCloseBtnBurger.classList.add('show');    
});

/*btnCloseBtnBurger.addEventListener('click', () => {   
    btnCloseBtnBurger.classList.add('hide');
    asideMenu.classList.remove('show');
    asideMenu.classList.add('hide');
});*/

// switch theme
btnSwitchTheme.addEventListener('click', () => {    
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
});

// typing animation 















