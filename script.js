const notifications = document.querySelector(".notification"),
 buttons = document.querySelectorAll(".buttons .btn");


const toastDetails ={
    success: {
        icon: " fa-solid fa-circle-check ",
        text: "success: this is success toast. "
    },
    error: {
        icon: " fa-solid fa-circle-xmark ",
        text: "eroor: this is error toast. "
    },
    warning: {
        icon: " fa-solid fa-triangle-exclamation ",
        text: "warning: this is warning toast. "
    },
    info: {
        icon: " fa-solid fa-circle-info ",
        text: "info: this is information toast. "
    }
}
const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
        <i class="fa-solid ${icon}"></i>
        <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark"></i>`;
        notifications.appendChild(toast);
}
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});