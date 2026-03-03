/**
 * TUESDAYFIRM.DEV - 404 Logic
 * Realistic typing for error states.
 */

const messageEl = document.getElementById('message');
const returnLink = document.getElementById('return-link');
const messageText = "ERROR 404: Resource inaccessible. File missing from the firm's records.";

async function typeWriter(text, speed = 50) {
  messageEl.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    messageEl.innerHTML += text.charAt(i);
    const randomSpeed = speed + (Math.random() * 40 - 20);
    await new Promise((resolve) => setTimeout(resolve, randomSpeed));
  }
  // Show the return link after the message is typed
  returnLink.style.visibility = 'visible';
  returnLink.classList.add('animate-pulse');
}

// Run the function when the page loads
window.onload = () => {
  setTimeout(() => typeWriter(messageText), 500);
};
