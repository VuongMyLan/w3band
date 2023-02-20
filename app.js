// ======== OPEN/CLOSE BUY TICKETS
const buyBtns = document.querySelectorAll('.js-buy-ticket');
console.log(buyBtns);
buyBtns.forEach((btn, index) => {
    console.log(btn);
    btn.addEventListener('click', () => {
        document.querySelector('.modal').classList.add('open');
    });
});

const closeBtn = document.querySelector('.modal-close');
closeBtn.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('open');
});

const modalEle = document.querySelector('.modal');
modalEle.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('open');
});

const modalContainerEle = document.querySelector('.modal-container');
console.log(modalContainerEle);
modalContainerEle.addEventListener('click', (e) => {
    e.stopPropagation();
});

/*OPEN NAV MENU*/
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
console.log(mobileMenu);
mobileMenu.addEventListener('click', () => {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = '46px';
    }
});

var menuItems = document.querySelectorAll("#nav li a[href*='#']");
console.log(menuItems);
menuItems.forEach((tab) => {
    console.log(tab.nextElementSibling);
    var isParentMenu =
        tab.nextElementSibling &&
        tab.nextElementSibling.classList.contains('sub-nav');
    tab.addEventListener('click', (e) => {
        if (isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    });
});
