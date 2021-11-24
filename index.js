const btnBurger = document.querySelector('#btn-burger');
const btnCloseMenu = document.querySelector('#btn-close-menu')
const asideMenu = document.querySelector('#aside-menu');
const linkNav = document.getElementsByClassName('link-nav');
const navBg = document.getElementById('nav-mobile');

// variables switch theme
const btnSwitchTheme = document.querySelectorAll('.btn-change-mode');
const btnSwitchThemeMobile = document.getElementById('btn-change-mode-mbl');
const body = document.querySelector('#body');

for( i = 0 ; i < btnSwitchTheme.length ; i++ ) {
    btnSwitchTheme[i].addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
}

let toggleMenu = () => {    
    asideMenu.classList.toggle('show');
}

// open and close aside menu on mobile devices 
btnBurger.addEventListener('click', () => {
    console.log('yes')
    toggleMenu();
});

//close aside menu onclick on linknav for mobile device
for(let link of linkNav){
    link.addEventListener('click', () => {     
        toggleMenu();
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

// competences data  
let dataCompetences = [
    {
        title: "React js",
        image: "./images/react-js-brands.svg"
        },
    {
        title: "Javascript",
        image: "./images/javascript-brands.svg"
    },
    {
        title: "Github",
        image: "./images/github-brands.svg"
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
        image: "./images/photoshop-brands.svg"
    },
    {
        title: "Illustrator",
        image: "./images/illustrator-brands.svg"
    }
]

class cardContent {
    constructor(title, image) {
        this.title = title
        this.image = image
    }
}

let comp = new cardContent(
    dataCompetences.image,
    dataCompetences.title
)

const createNewCard = (item) => {  

    let newCard = document.createElement("div");    
    document.querySelector(".containerCards").append(newCard);
    newCard.setAttribute('class', "card");

    let cardImg = document.createElement('img');
    newCard.append(cardImg);
    cardImg.src = item.image;

    let newTitle = document.createElement("h2");
    newCard.append(newTitle);
    newTitle.innerHTML = item.title;        
}

for(let comp of dataCompetences) {
    createNewCard(comp);
}












































