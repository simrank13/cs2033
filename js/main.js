const validProductIDs = ["VUHOE476", "VFEDV961", "CNPSQ805", "MNTWE732"];

function toggleProductID() {
    const dropdown = document.getElementById('reasonDropdown');
    const productIDContainer = document.getElementById('productIDContainer');

    if (dropdown.value === 'product-info') {
        productIDContainer.style.display = 'block'; // Show the Product ID field
    } else {
        productIDContainer.style.display = 'none'; // Hide the Product ID field
    }
}

// Name Validation
function validateName() {
    const nameField = document.getElementById("name");
    const name = nameField.value.trim(); // Remove leading and trailing spaces
    const isValid = name.length >= 4 && /^[a-zA-Z\s]+$/.test(name);

    updateFieldStyle(nameField, isValid);
}

// Phone Number Validation
function validatePhoneNumber() {
    const phoneField = document.getElementById("phone");
    const phone = phoneField.value.trim(); // Remove leading and trailing spaces
    const isValid = /^\d{3}\s\d{3}\s\d{4}$/.test(phone); // Format: 123 456 7890

    updateFieldStyle(phoneField, isValid);
}

function validateProductID() {
    const productIDField = document.getElementById("productID");
    const productID = productIDField.value;
    const isValid = validProductIDs.includes(productID);

    updateFieldStyle(productIDField, isValid);
}

function validateMessage() {
    const messageField = document.getElementById("message");
    const message = messageField.value;
    const isValid = message.length >= 10 && message.length <= 30;

    updateFieldStyle(messageField, isValid);
}

function toggleProductID() {
    const dropdown = document.getElementById("reasonDropdown");
    const productIDContainer = document.getElementById("productIDContainer");

    if (dropdown.value === "product-info") {
        productIDContainer.style.display = "block"; // Show Product ID field
    } else {
        productIDContainer.style.display = "none"; // Hide Product ID field
    }
}

function updateFieldStyle(field, isValid) {
    if (isValid) {
        field.style.borderColor = "green"; // Valid input
    } else {
        field.style.borderColor = "red"; // Invalid input
    }
}

window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("backToTop");

    if (window.scrollY > 200) { // Show when scrolled down 200px
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

function scrollToTop() {
    const scrollInterval = setInterval(() => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            window.scrollBy(0, -scrollPosition / 10); // Smoothly decrease scroll position
        } else {
            clearInterval(scrollInterval); // Stop when reaching the top
        }
    }, 15); // Interval of 15ms for smoothness
}


document.addEventListener("DOMContentLoaded", function () {
    const dayMessageDiv = document.getElementById("dayMessage");

    // Messages for each day
    const dayMessages = {
        0: "Sunday's Special: Enjoy 20% off on all items!",
        1: "Welcome to our store on Monday: Buy 1 Get 1 Free on accessories!",
        2: "Tuesday's Deal: Free shipping on orders over $50!",
        3: "Welcome to our store on Wednesday: 30% off on denim!",
        4: "Thursday's Highlight: Exclusive new arrivals!",
        5: "Welcome to our store on Friday: 15% off on all jackets!",
        6: "Saturday's Deal: Flash sale on hoodies!"
    };

    // Get the current day of the week
    const currentDay = new Date().getDay();

    // Set the message
    dayMessageDiv.textContent = dayMessages[currentDay];
});

function scroll() { 
    var t = window.scrollY; 
    var para = document.getElementById("para"); 
    var m = 0.5; 
    var b = 0; 
    newY = m*t + b; 
    para.style.backgroundPositionY = newY + "px";  
}

document.addEventListener("DOMContentLoaded", function () {
    // Select the stiletto element and its container
    const stiletto = document.getElementById("stiletto");
    const stilettoContainer = document.getElementById("stiletto-container");

    // Variable to track if the stiletto has grown
    let hasGrown = false;

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Scroll event listener
    window.addEventListener("scroll", function () {
        if (!hasGrown && isInViewport(stilettoContainer)) {
            // Add transition and grow the stiletto
            stiletto.style.transition = "transform 1s ease";
            stiletto.style.transform = "scale(2)";

            // Mark as grown to prevent further scaling
            hasGrown = true;
        }
    });
});








