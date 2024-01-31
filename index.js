
// change navbar styles on scrolling
window.addEventListener('scroll',() => {
    document.querySelector('navbar').classList.toggle
    ('window-scroll',window.scrollY > 0)
});

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// Slider 
var counter =1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;

    if(counter>5){
        counter = 1;
    }
},5000)

let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');
if(style == null){
    setTheme('light');
}else{
    setTheme;
}
for(let i of switches){
    i.addEventListener('click', function(){
        var theme = this.dataset.theme;
        setTheme(theme);
    });
}
function setTheme(theme){
    if(theme == 'light'){
        document.getElementById('switcher-id').href = './themes/light.css';
    }else if(theme == 'sky'){
        document.getElementById('switcher-id').href = './themes/sky.css';
    }else if(theme == 'dark'){
        document.getElementById('switcher-id').href = './themes/dark.css';
        // localStorage.setItem('style',theme);
    }else if(theme == 'green'){
        document.getElementById('switcher-id').href = './themes/green.css';
        localStorage.setItem('style',theme);
    }
}















