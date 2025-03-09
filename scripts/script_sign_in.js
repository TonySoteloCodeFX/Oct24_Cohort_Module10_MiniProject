document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("sign-in-form");
    const messageContainer = document.getElementById("js-newText");

    if (signInForm && messageContainer) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            messageContainer.innerHTML = "";

            const message = document.createElement("div");
            message.textContent = "Logging In Now! ...";
            message.style.color = "white";
            message.style.fontSize = "50px";
            message.style.fontWeight = "700";
            message.style.marginTop = "50px";

            messageContainer.appendChild(message);
            
            setTimeout(() => {
                window.location.href = "../pages/search.html";
            }, 3000);
        });
    }
});
