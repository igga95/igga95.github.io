"use strict";

const logoLink = document.querySelector("#nav-logo");
const homeLink = document.querySelector("#home");
const skillsLink = document.querySelector("#skills");
const proyectsLink = document.querySelector("#proyects");
const apiLink = document.querySelector("#api-tester");

const testNotesApiBtn = document.querySelector("#test-notes-api");

logoLink.addEventListener("click", () => {
    homeLink.classList.add("active");
    skillsLink.classList.remove("active");
    proyectsLink.classList.remove("active");
    apiLink.classList.remove("active");
});

homeLink.addEventListener("click", () => {
    homeLink.classList.add("active");
    skillsLink.classList.remove("active");
    proyectsLink.classList.remove("active");
    apiLink.classList.remove("active");
});

skillsLink.addEventListener("click", () => {
    homeLink.classList.remove("active");
    skillsLink.classList.add("active");
    proyectsLink.classList.remove("active");
    apiLink.classList.remove("active");
});

proyectsLink.addEventListener("click", () => {
    homeLink.classList.remove("active");
    skillsLink.classList.remove("active");
    proyectsLink.classList.add("active");
    apiLink.classList.remove("active");
});

apiLink.addEventListener("click", () => {
    homeLink.classList.remove("active");
    skillsLink.classList.remove("active");
    proyectsLink.classList.remove("active");
    apiLink.classList.add("active");
});

testNotesApiBtn.addEventListener("click", () => {
    apiLink.click();
    notesBtn.click();
});

const links = document.querySelectorAll(".navbar .navbar-item");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    // const offsetTop = document.querySelector(href).offsetTop - 52;
    // href === "#home-section" ? (offsetTop -= 56) : "";
    window.scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}
