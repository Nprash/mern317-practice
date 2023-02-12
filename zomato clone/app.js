const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const logo = document.querySelector(".logo")
navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
    logo.classList.toggle("d-none");
});

var btnicon = document.getElementById("turnX");

function changeIcon() {
    btnicon.classList.toggle("fa-xmark")
    // if (btnicon.classList.contains("fa-bars")){
    //     btnicon.classList.remove("fa-bars")
    //     btnicon.classList.add("fa-xmark")
    // }
    // else{
    //     btnicon.classList.add("fa-bars")
    //     btnicon.classList.remove("fa-xmark")
    // }
}
