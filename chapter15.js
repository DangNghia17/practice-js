// File: events-practice.js

// Example 1: Event Handlers
document.addEventListener("DOMContentLoaded", () => {
    // Example 1.1: Click Event on the Window
    window.addEventListener("click", () => {
        console.log("Window clicked!");
    });

    // Example 1.2: Click Event on a Button
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        console.log("Button clicked!");
    });

    // Example 1.3: Remove Event Listener
    const handleButtonClick = () => {
        console.log("Button clicked - Event Removed!");
    };
    button.addEventListener("click", handleButtonClick);
    // Remove the event listener
    button.removeEventListener("click", handleButtonClick);

    // Example 2: Event Objects
    const mouseButton = document.querySelector("#mouseButton");
    mouseButton.addEventListener("mousedown", (event) => {
        switch(event.button) {
            case 0:
                console.log("Left mouse button");
                break;
            case 1:
                console.log("Middle mouse button");
                break;
            case 2:
                console.log("Right mouse button");
                break;
        }
    });

    // Example 3: Propagation
    const outerDiv = document.querySelector("#outerDiv");
    const innerDiv = document.querySelector("#innerDiv");
    
    outerDiv.addEventListener("click", () => {
        console.log("Outer div clicked!");
    });
    
    innerDiv.addEventListener("click", (event) => {
        console.log("Inner div clicked!");
        event.stopPropagation();  // Prevents outerDiv click event
    });

    // Example 4: Default Actions
    const link = document.querySelector("#preventLink");
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Link click prevented!");
    });

    // Example 5: Key Events
    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    document.addEventListener("keyup", (event) => {
        console.log(`Key released: ${event.key}`);
    });

    // Example 6: Mouse Events
    const mouseArea = document.querySelector("#mouseArea");
    mouseArea.addEventListener("mousemove", (event) => {
        console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
    });

    // Example 7: Touch Events
    const touchArea = document.querySelector("#touchArea");
    touchArea.addEventListener("touchstart", (event) => {
        console.log("Touch started");
        console.log(event.touches);
    });
    
    touchArea.addEventListener("touchmove", (event) => {
        console.log("Touch moving");
        console.log(event.touches);
    });
    
    touchArea.addEventListener("touchend", () => {
        console.log("Touch ended");
    });

    // Example 8: Scroll Events
    window.addEventListener("scroll", () => {
        console.log(`Scroll position: ${window.pageYOffset}`);
    });

    // Example 9: Focus and Blur Events
    const inputField = document.querySelector("#inputField");
    inputField.addEventListener("focus", () => {
        console.log("Input field focused");
    });

    inputField.addEventListener("blur", () => {
        console.log("Input field lost focus");
    });

    // Example 10: Load Event
    window.addEventListener("load", () => {
        console.log("Page loaded!");
    });

    // Example 11: Debouncing
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    const handleResize = debounce(() => {
        console.log("Window resized!");
    }, 200);

    window.addEventListener("resize", handleResize);
});
