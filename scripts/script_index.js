document.addEventListener("DOMContentLoaded", function () {
    const heroButton = document.querySelector(".ts-hero-button");
    
    if (heroButton) {
        heroButton.addEventListener("click", function () {
            window.location.href = "./pages/sign_in.html";
        });
    }
});
