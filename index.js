const btnBurger = document.querySelector('#btn-burger');
const btnCloseBtnBurger = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');

btnBurger.addEventListener('click', () => {
    /*console.log('yes');*/   
    asideMenu.classList.remove('hide');
    asideMenu.classList.add('show');
    /*asideMenu.style.visibility = 'show';*/
    asideMenu.style.width = '70%';
    btnBurger.classList.add('hide');
    btnCloseBtnBurger.classList.add('show');
});

/*btnCloseBtnBurger.addEventListener('click', () => {   
    btnCloseBtnBurger.classList.add('hide');
    asideMenu.classList.remove('show');
    asideMenu.classList.add('hide');
});*/
