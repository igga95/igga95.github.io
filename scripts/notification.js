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
