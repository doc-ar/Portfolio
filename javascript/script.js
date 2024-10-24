// Toggle Function
function toggleMenu() {
  const menuItems = document.getElementById("menuItems");
  menuItems.style.display =
    menuItems.style.display === "flex" ? "none" : "flex";
}

// Scroll Function
function scrollToSection(event) {
  event.preventDefault(); // Prevent the default anchor click behavior
  const targetId = event.target.getAttribute("href").substring(1); // Get the ID of the target section
  const targetElement = document.getElementById(targetId); // Find the target element

  if (targetElement) {
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    toggleMenu(); // Close the menu after selecting an item
  }
}
