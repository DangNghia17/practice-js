// 1. Basic HTML interaction
// This example creates an HTML element dynamically and adds it to the page.
function createElement() {
    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello, I am dynamically added to the page!";
    
    // Append the new element to the body
    document.body.appendChild(newDiv);
}

// 2. Handling Click Events
// This function changes the background color of the page when a button is clicked.
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// 3. Working with URLs
// This function extracts and displays the URL of the current page.
function showCurrentURL() {
    const url = window.location.href;
    alert("Current URL is: " + url);
}

// 4. HTML and JavaScript Integration
// Example: Adding an image element with JavaScript.
function addImage() {
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/150";
    img.alt = "Placeholder Image";
    document.body.appendChild(img);
}

// 5. Simple HTTP Request
// This function makes a basic HTTP request using the Fetch API.
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
            alert("Fetched title: " + data.title);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// 6. Event Listener Practice
// This function logs a message when the user scrolls the page.
function logScrollEvent() {
    window.addEventListener("scroll", () => {
        console.log("You scrolled the page!");
    });
}

// 7. Button Interaction Example
// Example of using the 'onclick' attribute in HTML and triggering a JavaScript function.
function buttonClicked() {
    alert("Button was clicked!");
}

// 8. Creating and Removing Elements
// This function adds and then removes a paragraph element.
function addAndRemoveParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "This paragraph will be removed in 2 seconds.";
    
    document.body.appendChild(paragraph);
    
    setTimeout(() => {
        document.body.removeChild(paragraph);
    }, 2000);
}

// To practice:
// - Attach these functions to various HTML elements (e.g., buttons, images) in an HTML file.
// - Explore modifying HTML content dynamically, handling events, and interacting with URLs.
