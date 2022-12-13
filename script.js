// Funtion to toggle the nav menu at mobile
(function toggleNav() {
    // Creating the variables
    const navMenu = document.querySelector(".menu");
    const navBox = document.querySelector(".nav-links");
    const closeNav = document.querySelector("#nav-close-btn");
    const navOverlay = document.querySelector(".overlay-nav");
  
    navMenu.addEventListener("click", (event) => {
      navBox.classList.add("show-nav");
      navOverlay.classList.add("show-overlay");
    });
  
    closeNav.addEventListener("click", (event) => {
      navBox.classList.remove("show-nav");
      navOverlay.classList.remove("show-overlay");
    });
  })();
  
  
 