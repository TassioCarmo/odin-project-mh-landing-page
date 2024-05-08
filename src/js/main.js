/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var navBar = document.getElementById("nav-bar");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
  }