const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('nav-link-list')[0];
const navBar = document.getElementsByTagName('nav')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navBar.classList.toggle('active');
})

// typewriter animation
const type = document.getElementById('type');
const typewriter = new Typewriter(type, {
    loop: false
});

typewriter.typeString('a designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('a web developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('a mobile developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('a data scientist')
    .pauseFor(2500)
    .start();
