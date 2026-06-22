function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

alert("Welcome to Amazon clone Website");

const signInButton = document.querySelector(".sign button");
const popup = document.getElementById("signin-popup");
const closeBtn = document.querySelector(".close-btn");

signInButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});
const signinSubmitBtn = document.querySelector(".signin-btn");

signinSubmitBtn.addEventListener("click", () => {
    popup.style.display = "none";
});