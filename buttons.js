// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls, execute the scrollFunction
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollPercentage > 50) { // Show the button when 80% down the page
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll to top
};