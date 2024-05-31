/*===== MENU SHOW =====*/
// Function to show/hide the navigation menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), // Get the toggle element by its ID
        nav = document.getElementById(navId); // Get the navigation element by its ID
    // Check if both elements exist
    if (toggle && nav) {
        // Add a click event listener to the toggle element
        toggle.addEventListener("click", () => {
            // Toggle the 'show' class on the navigation element
            nav.classList.toggle("show");
        });
    }
};
// Initialize the showMenu function with specific IDs
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
// Select all elements with the class 'nav__link'
const navLink = document.querySelectorAll(".nav__link");

// Function to remove the 'show' class from the navigation menu
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When a nav__link is clicked, remove the 'show' class from the navigation menu
    navMenu.classList.remove("show");
}
// Add a click event listener to each nav__link
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all sections that have an ID attribute
const sections = document.querySelectorAll("section[id]");

// Function to highlight the active link in the navigation menu based on scroll position
function scrollActive() {
    const scrollY = window.pageYOffset;

    // Loop through each section
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight; // Get the height of the section
        const sectionTop = current.offsetTop - 50; // Get the top position of the section, minus 50px for offset
        const sectionId = current.getAttribute("id"); // Get the ID of the section

        // Check if the current scroll position is within the section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add 'active' class to the corresponding navigation link
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            // Remove 'active' class from the corresponding navigation link
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
// Add a scroll event listener to the window
window.addEventListener("scroll", scrollActive);

/*===== WHATSAPP MESSAGE =====*/
// Add a click event listener to the 'send-button'
document
    .getElementById("send-button")
    .addEventListener("click", function (event) {
        // Get values from the contact form fields
        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;

        // WhatsApp number and text message format
        const whatsappNumber = "+27658183616";
        const text = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappUrl, "_blank");
    });
/*===== SCROLL REVEAL ANIMATION =====*/
// Initialize ScrollReveal with specific options
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    // reset: true
});

// Reveal elements with specific classes with the default options
sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
// Reveal elements with a delay of 400ms
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
    delay: 400,
});
// Reveal elements with an interval of 200ms
sr.reveal(".home__social-icon", { interval: 200 });
// Reveal elements with an interval of 200ms
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
