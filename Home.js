document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
const items = document.querySelectorAll(".item");

window.addEventListener("load", () => {
    items.forEach((item, i) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(10px)";

        setTimeout(() => {
            item.style.transition = "0.4s";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, i * 50);
    });
});
       // ── Mobile hamburger toggle ──────────────────────────────────────
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.onclick = function () {
        navLinks.classList.toggle("open");
    };
}