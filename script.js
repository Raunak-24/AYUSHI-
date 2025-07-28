document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.getElementById('typing-text');
    const openButton = document.getElementById('open-button');
    const initialContainer = document.getElementById('initial-container');
    const flowerContainer = document.getElementById('flower-container');

    // **** THIS LINE IS CHANGED ****
    const textToType = "A special message for my dear friend...";
    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 80); // Adjust typing speed here
        } else {
            // Typing finished, show the button
            typingTextElement.style.borderRight = 'none'; // Remove cursor
            openButton.classList.remove('hidden');
        }
    }

    // Start typing animation
    type();

    // Handle button click
    openButton.addEventListener('click', () => {
        // Fade out initial screen
        initialContainer.style.transition = 'opacity 1s';
        initialContainer.style.opacity = '0';

        setTimeout(() => {
            initialContainer.classList.add('hidden');
            // Show the flower screen
            flowerContainer.classList.remove('hidden');
        }, 1000); // Wait for fade out to complete
    });
});
