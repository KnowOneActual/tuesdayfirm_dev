// --- Script to display a cryptic message based on the day ---

const messageEl = document.getElementById('message');
const logoEl = document.querySelector('.logo-container');

// Array of messages for different days
const messages = {
    0: "System recalibrating. Stand by.",
    1: "Awaiting sequence initiation.",
    2: "It is Tuesday. The firm is operative.",
    3: "Transmission logged. Analysis in progress.",
    4: "Observation phase active.",
    5: "Network integrity at 100%.",
    6: "Scheduled quiet period. Monitoring continues."
};

function displayMessage() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.

    const messageText = messages[dayOfWeek] || "Connection established.";

    // Typewriter effect
    let i = 0;
    function typeWriter() {
        if (i < messageText.length) {
            messageEl.innerHTML += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    // Start the typewriter effect after the logo's fade-in animation (2 seconds)
    setTimeout(typeWriter, 2000);
}

// Run the function when the page loads
window.onload = displayMessage;