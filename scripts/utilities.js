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

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("is-active");
});
