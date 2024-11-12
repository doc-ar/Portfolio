// Toggle Function
function toggleMenu() {
  const menuIcon = document.getElementById("hamburger-icon");
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menuIcon.style.display = menuIcon.style.display === "none" ? "flex" : "none";
}

// Scroll Function
function scrollToSection(event) {
  event.preventDefault(); // Prevent the default anchor click behavior
  const targetId = event.target.getAttribute("href").substring(1); // Get the ID of the target section
  const targetElement = document.getElementById(targetId); // Find the target element

  if (targetElement) {
    // Scroll to the target element
    toggleMenu(); // Close the menu after selecting an item
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
