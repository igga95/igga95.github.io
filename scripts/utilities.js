/*
 * Bulma navbar component documentation: https://bulma.io/documentation/components/navbar/
 */

document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

/*
 * Bulma notification element documentation: https://bulma.io/documentation/elements/notification/
 */

document.addEventListener("DOMContentLoaded", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        const container = $delete.parentNode.parentNode.parentNode;
        $delete.addEventListener("click", () => {
            $notification.parentNode.removeChild($notification);
            container.remove();
        });
    });
});

/*
 * Script to set is-active in dropdown menu to deploy it
 */

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((el) => {
    el.addEventListener("click", function (event) {
        event.stopPropagation();
        el.classList.toggle("is-active");
    });
});

const textElements = [];
for (const selector in TEXTS) {
    const auxVar = document.querySelectorAll(selector);
    for (const el of auxVar) textElements.push([el, selector]);
}
const language = document.querySelectorAll(".navbar .dropdown-content .button");
const languageLabel = document.querySelector(".navbar .dropdown-trigger .button span");

for (const btn of language) {
    btn.addEventListener("click", () => {
        languageLabel.innerText = btn.innerText;
        const lowerText = btn.innerText.toLowerCase();
        textElements.map((el) => {
            el[0].innerText = TEXTS[el[1]][lowerText];
        });
    });
}
