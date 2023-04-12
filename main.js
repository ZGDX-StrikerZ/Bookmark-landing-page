const hamMenu = document.querySelector('.hamburger-menu');
const infoList = document.querySelector('.info-list');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("change");
    infoList.classList.toggle("change")
    console.log(hamMenu)
});

const tabcontents = document.querySelectorAll('.content');
const tabLinks = document.querySelectorAll('.tab-btn');

function openTab(event, tabName) {
    tabcontents.forEach((tabcontent) => (tabcontent.style.display = "none"));
    tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));

    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}

document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent =  button.nextElementSibling;

        button.classList.toggle('accordion-btn--active');

        if (button.classList.contains('accordion-btn--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})

const email = document.querySelector('#email');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const error = document.querySelector('.error-msg');
const btn = document.querySelector('.btn');
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
    if(email.value.match(regExp)) {
        email.style.borderColor = "#green";
        icon1.style.display = "none";
        icon2.style.display = "block";
        error.style.display = "none";
        btn.style.bottom = "47px"
    } else {
        email.style.borderColor = "hsl(0, 94%, 66%)";
        icon1.style.display = "block";
        icon2.style.display = "none";
        error.style.display = "block";
        btn.style.bottom = "71px"
    }
    if(email.value === "") {
        email.style.borderColor = "lightgrey";
        icon1.style.display = "none";
        icon2.style.display = "none";
        error.style.display = "none";
        btn.style.bottom = "45px"
    }
}