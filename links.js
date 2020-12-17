const findStore = document.getElementById('find-store');
const hamButton = document.getElementById('ham');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const MobileNav = document.getElementById("myNav");
const close = document.getElementById('close');

//? Redirecting to Starbucks website
findStore.addEventListener('click', () => {
    url = 'http://www.starbucks.in/store-locator';
    window.open(url);
});

hamButton.addEventListener('click', ()=>{

    // hamButton.classList.toggle("change");
    openNav();
});

close.addEventListener('click', ()=>{
    closeNav();
});

function openNav() {
    MobileNav.style.height = "100%";
}

function closeNav() {
    MobileNav.style.height = "0%";
}