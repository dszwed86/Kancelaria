import '../sass/main.scss'

// *****************
// Comments navbar  //
// *****************
const commLeft = document.querySelector(".content__right__box__nav--left");
const commRight = document.querySelector(".content__right__box__nav--right");
const commText = document.querySelector(".content__right__box--text");
const commWho = document.querySelector(".content__right__box__person--who");
const commWhat = document.querySelector(".content__right__box__person--what");
const commBox = document.querySelector(".comment");

let commCount = 0;

//nawigacja

commLeft.addEventListener("click", function () {
    if (commCount === 0) {
        return
    } else {
        commText.classList.add('commentOff');

        setTimeout(() => {
            commCount--;
            commentBox(commentArray[commCount].text, commentArray[commCount].who, commentArray[commCount].what);
        }, 500);

        setTimeout(() => {
            commText.classList.remove('commentOff');
        }, 500);
    }
})

commRight.addEventListener("click", function () {
    if (commCount === commentArray.length - 1) {
        return
    } else {
        commText.classList.add('commentOff');

        setTimeout(() => {
            commCount++;
            commentBox(commentArray[commCount].text, commentArray[commCount].who, commentArray[commCount].what)
        }, 500);

        setTimeout(() => {
            commText.classList.remove('commentOff');
        }, 500);
    }
})

//baza z komentami

class Comment {
    constructor(text, who, what) {
        this.text = text;
        this.who = who;
        this.what = what;
    }
}

const commentArray = [
    new Comment("Miałam okazję współpracować z adwokat Joanną Bizuń już wiele razy, zawsze była terminowa, pomocna i bardzo profesjonalna. W każdą, nawet najdrobniejszą sprawę, angażuje się w stu procentach. Jej indywidualne podejście do każdegoklienta owocuje wysoką skutecznością działań. Jestem pod ogromnym wrażeniemjej warsztatu. Chęć pomocy i konkretna propozycja rozwiązania problemuzakończonego sukcesem. Nic dodać nic ująć", 'karolina kowalska', 'bizneswoman'),
    new Comment('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi, voluptatibus enim saepe unde reprehenderit? Error, suscipit rem. Mollitia, veritatis? Sequi dignissimos enim voluptatem ipsum illum, eaque labore repellendus velit iste nulla. Id quasi nesciunt voluptates exercitationem tempora. Dignissimos, architecto!', 'Andrzej Gubernat', 'Kierowca'),
    new Comment('Lorem ipsum dolor ndus velit iste nulla. Id quasi nesciunt voluptates exercitationem tempora. Dignissimos, architecto!', 'Marzena Lipnicka', 'aktorka'),
]

//zmienianie komenta

function commentBox(text, who, what) {
    commText.textContent = text;
    commWho.textContent = who;
    commWhat.textContent = what;
}
commentBox(commentArray[0].text, commentArray[0].who, commentArray[0].what)



// *****************
// licznik osiągnieć  //
// *****************

let counter1 = document.querySelector('.count1');
let counter2 = document.querySelector('.count2');
let counter3 = document.querySelector('.count3');
let counter4 = document.querySelector('.count4');
let c1, c2, c3, c4

function counter(target, name, number, limit, speed, symbol) {
    name = setInterval(() => {
        if (number !== limit) {
            number++;
            target.textContent = number + symbol;
        } else {
            clearInterval(name);
        }
    }, speed);
}

function counterInit(){
    counter(counter1, c1, 0, 10, 500, '+');
    counter(counter2, c2, 0, 482, 8, '');
    counter(counter3, c3, 0, 35, 150, '+');
    counter(counter4, c1, 0, 1203, 2, '');
}

// *****************
// Lazy images i nawigacja //
// *****************

const sections = document.querySelectorAll('section .content');
const header = document.querySelector('header');
const sectionsArr = [...sections];

const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-350px',
}

const observer = new IntersectionObserver((entry, observer) => {
    let isIntersecting = entry[0].isIntersecting;
    let nav = document.querySelector('.nav__toggle')
    let target = entry[0].target;

    if(isIntersecting) {
        target.classList.add('visible');
        
        if(target.id == 'home'){
            nav.classList.remove('nav__toggleOn');
            uncheck();
        }else{
            nav.classList.add('nav__toggleOn')
        }

        if(target.id == 'count'){
            counterInit()
        }
        } else {
            target.classList.remove('visible');
        }
    }, obsOptions)

observer.observe(header);
sectionsArr.forEach(el => {
    observer.observe(el);
})

let navItems = [...document.querySelectorAll('.navbar__compact__item')]

navItems.forEach(el=>{
    el.addEventListener('click', function(){
        uncheck()
    })
});

function uncheck() {
    document.querySelector('.nav__toggle--toggler').checked = false;
}