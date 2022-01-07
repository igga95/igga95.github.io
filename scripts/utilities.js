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

        const div = document.querySelector("#api-tester-notification");
        $delete.addEventListener("click", () => {
            $notification.parentNode.removeChild($notification);
            div.parentNode.removeChild(div);
        });
    });
});

/*
 * Script to set icons to medium or large
 */

// let mql = window.matchMedia("(max-width: 768px)");
// const listIcons = document.querySelectorAll(".icon");

// function screenTest(e) {
//     console.log(e);
//     if (e.matches) {
//         listIcons.forEach((el) => el.classList.add("is-medium"));
//         listIcons.forEach((el) => el.classList.remove("is-large"));
//     } else {
//         listIcons.forEach((el) => el.classList.add("is-large"));
//         listIcons.forEach((el) => el.classList.remove("is-medium"));
//         console.log("not mobile");
//     }
// }

// if (mql.matches) screenTest();
// mql.addEventListener("change", screenTest);
