const messageEl = document.getElementById('message');
const returnLink = document.getElementById('return-link');
const messageText = "ERROR 404: File not found. The requested resource is not available on this server.";

// Typewriter effect
let i = 0;
function typeWriter() {
    if (i < messageText.length) {
        messageEl.innerHTML += messageText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        // Show the return link after the message is typed
        returnLink.style.visibility = 'visible';
    }
}

// Run the function when the page loads
window.onload = typeWriter;