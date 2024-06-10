let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar")

menu.oneclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}