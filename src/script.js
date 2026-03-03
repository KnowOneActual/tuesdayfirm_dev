/**
 * TUESDAYFIRM.DEV - Core Terminal Logic
 * Refactored for better modularity and mystery.
 */

class Terminal {
  constructor() {
    this.messageEl = document.getElementById('message');
    this.modal = document.getElementById('story-modal');
    this.openBtn = document.getElementById('open-story-modal');
    this.closeBtn = document.querySelector('.close-button');
    this.modalContent = document.querySelector('.modal-content');

    this.dailyMessages = {
      0: 'System recalibrating. Stand by.',
      1: 'Awaiting sequence initiation.',
      2: 'It is Tuesday. The firm is operative.',
      3: 'Transmission logged. Analysis in progress.',
      4: 'Observation phase active.',
      5: 'Network integrity at 100%.',
      6: 'Scheduled quiet period. Monitoring continues.',
    };

    this.inputBuffer = '';
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.displayDailyMessage();
      this.setupEventListeners();
      this.logFirmLore();
    });
  }

  // --- Typewriter Logic ---
  async typeWriter(text, speed = 80) {
    this.messageEl.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      this.messageEl.innerHTML += text.charAt(i);
      // Add slight randomness to typing speed for realism
      const randomSpeed = speed + (Math.random() * 40 - 20);
      await new Promise((resolve) => setTimeout(resolve, randomSpeed));
    }
  }

  displayDailyMessage() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const messageText = this.dailyMessages[dayOfWeek] || 'Connection established.';

    // Start typing after logo fade-in (2s)
    setTimeout(() => this.typeWriter(messageText), 2000);
  }

  // --- Modal Logic ---
  openModal() {
    this.modal.style.display = 'block';
    setTimeout(() => {
      this.modal.style.opacity = '1';
      this.modalContent.style.transform = 'translateY(0)';
    }, 10);
  }

  closeModal() {
    this.modal.style.opacity = '0';
    this.modalContent.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      this.modal.style.display = 'none';
    }, 400);
  }

  // --- Mystery Logic: Keystroke Listeners ---
  handleKeystroke(key) {
    this.inputBuffer += key.toUpperCase();
    if (this.inputBuffer.length > 20) this.inputBuffer = this.inputBuffer.slice(-20);

    const secrets = {
      LORE: () => this.openModal(),
      STATUS: () => this.typeWriter('All systems nominal. Tuesday status: ACTIVE.', 40),
      ECHO: () => this.typeWriter('Searching for resonance...', 100),
      HELP: () => this.typeWriter('No help available. You are exactly where you need to be.', 50),
    };

    for (const [trigger, action] of Object.entries(secrets)) {
      if (this.inputBuffer.endsWith(trigger)) {
        action();
        this.inputBuffer = ''; // Reset buffer
      }
    }
  }

  // --- Setup ---
  setupEventListeners() {
    this.openBtn.addEventListener('click', () => this.openModal());
    this.closeBtn.addEventListener('click', () => this.closeModal());

    window.addEventListener('click', (event) => {
      if (event.target === this.modal) this.closeModal();
    });

    window.addEventListener('keydown', (e) => {
      // Only capture character keys
      if (e.key.length === 1) {
        this.handleKeystroke(e.key);
      }
    });
  }

  logFirmLore() {
    const style = [
      'color: #4ade80',
      'font-family: monospace',
      'font-size: 14px',
      'line-height: 1.5',
      'background: #111',
      'padding: 10px',
      'border-left: 5px solid #4ade80',
    ].join(';');

    console.log(
      "%cOn the Nature of the Firm:\n\nWe are a binding, not a company.\nA collection of things that shouldn't exist, woven together to hold back chaos.",
      style
    );
  }
}

// Instantiate the terminal
new Terminal();
