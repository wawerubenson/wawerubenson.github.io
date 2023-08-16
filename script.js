

(() => {

  // Get the header element
const header = document.querySelector('.main-header');

// Get the offset where the header should become sticky
const stickyOffset = header.offsetTop + header.offsetHeight;

// Function to handle scrolling and make the header sticky
function handleScroll() {
    if (window.pageYOffset >= stickyOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);



 

  const openNav = document.querySelector(".open_nav_menu"),
    closeNav = document.querySelector(".close_menu"),
    navMenu = document.querySelector(".main_menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 1000;

  openNav.addEventListener("click", toggleMenu);
  closeNav.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Add keydown event listener to the document to listen for the "o" key
  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is "o" (case insensitive)
    if (event.key.toLowerCase() === "o") {
      toggleMenu(); // Open the menu
    }
  });

  function toggleMenu() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {

      event.preventDefault();
      const menuHasChildren = event.target.parentElement;

      // if item has children is already open collapse it
      if (menuHasChildren.classList.contains("active")) {
        collapseMenu();
      } else {
        // collappse existing menu
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseMenu();
        }
        menuHasChildren.classList.add("active");
        const subMenu = menuHasChildren.querySelector(".sub__menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });

  function collapseMenu() {
    navMenu.querySelector(".menu-item-has-children.active .sub__menu").removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
  }
  function resizeFix() {
    // if nav menu is open, close it
    if(navMenu.classList.contains("open")) {
      toggleMenu();
    }

    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseMenu();
    }

  }

  window.addEventListener("resize", function() {
    if(this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();


