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


// --- Modal functionality for the story ---

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const modal = document.getElementById('story-modal');
    const openBtn = document.getElementById('open-story-modal');
    const closeBtn = document.querySelector('.close-button');
    const modalContent = document.querySelector('.modal-content');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
        // Use a tiny timeout to allow the display property to apply before starting the transition
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'translateY(0)';
        }, 10);
    }

    // Function to close the modal
    function closeModal() {
        modal.style.opacity = '0';
        modalContent.style.transform = 'translateY(-50px)';
        // Wait for the transition to finish before hiding it completely
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // This should match the transition duration in CSS
    }

    // Event Listeners
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Also close the modal if the user clicks outside of the content box
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});