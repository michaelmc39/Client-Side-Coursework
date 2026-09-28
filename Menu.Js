// Filter which menu items show based off the category
const buttons = document.querySelectorAll('.category-btn');
const items = document.querySelectorAll('.menu-item');

// Show the menu items that match the selected category.
function filterMenu(category) {
  items.forEach(item => {
    const itemCategory = item.dataset.category;
    // If the item's category matches, show it; otherwise hide it.
    item.style.display = itemCategory === category ? 'block' : 'none';
  });
}

// Highlights the current button/menu selection
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active highlight from the current button
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterMenu(button.dataset.category);
  });
});

// Load in the starter menu category when the page loads.
const activeButton = document.querySelector('.category-btn.active');
if (activeButton) {
  filterMenu(activeButton.dataset.category);
}

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

       // ── Mobile hamburger toggle ──────────────────────────────────────
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.onclick = function () {
        navLinks.classList.toggle("open");
    };
}