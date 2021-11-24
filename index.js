const btnBurger = document.querySelector('#btn-burger');
const btnCloseMenu = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');
const linkNav = document.getElementsByClassName('link-nav');
const navBg = document.getElementById('nav-mobile');

// switch theme
const btnSwitchTheme = document.querySelectorAll('.btn-change-mode');
const btnSwitchThemeMobile = document.getElementById('btn-change-mode-mbl');
const body = document.querySelector('#body');

for( i = 0 ; i < btnSwitchTheme.length ; i++ ) {
    btnSwitchTheme[i].addEventListener('click', () => {
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
});

// cards 
let dataCompetences = [
    {
        title: "React js",
        image: "./images/react-brands.svg"
        },
    {
        title: "Javascript",
        image: "./images/js-brands.svg"
    },
    {
        title: "Github",
        image: "./images/github-square-brands.svg"
    },
    {
        title: "Html5",
        image: "./images/html5-brands.svg"
    },
    {
        title: "Scss",
        image: "./images/sass-brands.svg"
    },
    {
        title: "Photoshop",
        image: "./images/photoshop-brand.svg"
    },
    {
        title: "Illustrator",
        image: "./images/illustrator-brand.svg"
    }
]


class cardContent {
    constructor(title, image) {
        this.title = title
        this.image = image
    }
}

const createNewCard = (comp) => {
    let newCard = document.createElement("div");
    const containerCards = document.querySelector('.containerCards');
    containerCards.append(newCard);
    newCard.setAttribute('class', "card");

    let cardImg = document.createElement('img');
    newCard.append(cardImg);
    cardImg.src = comp.image;

    let newTitle = document.createElement("h2");
    newCard.append(newTitle);
    newTitle.innerHTML = comp.title;        
}

for(let comp of dataCompetences) {
    createNewCard(comp);
}








































