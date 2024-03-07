// JavaScript code to make the links move randomly
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
// Define a function to move a single link randomly
function moveLinkRandomly(link) {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    let speedX = 2 + Math.random() * 3.86; // Random speed for X direction
    let speedY = 2 + Math.random() * 3.98; // Random speed for Y direction

    function updateLinkPosition() {
        let currentX = parseFloat(link.style.left) || screenWidth / 2;
        let currentY = parseFloat(link.style.top) || screenHeight / 2;

        let newX = currentX + speedX;
        let newY = currentY + speedY;

        if (newX < 0 || newX + linkWidth > screenWidth) {
            speedX *= -1;
        }

        if (newY < 0 || newY + linkHeight > screenHeight) {
            speedY *= -1;
        }

        link.style.left = newX + 'px';
        link.style.top = newY + 'px';
    }

    // Move the link randomly initially
    updateLinkPosition();

    // Move the link randomly every 50 milliseconds
    setInterval(updateLinkPosition, 50);
}

// Function to create a new floating link
function createFloatingLink() {
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.className = 'floating-link';
    newLink.textContent = 'New Floating Linkashfvjasbfjhb';
    document.body.appendChild(newLink);
    moveLinkRandomly(newLink);

    // Add click event listener to the new link to create another link
    newLink.addEventListener('click', createFloatingLink);
}

// Apply the random movement to existing links
const existingLinks = document.querySelectorAll('.floating-link');
existingLinks.forEach(moveLinkRandomly);

// Add click event listener to existing links to create new links
existingLinks.forEach(link => {
    link.addEventListener('click', createFloatingLink);
});

console.log("hellowWorld!")
