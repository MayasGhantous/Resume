document.addEventListener('DOMContentLoaded', () => {
    const roundImages = document.querySelectorAll('.round-image');

    // Set positions immediately when the page loads
    roundImages.forEach((image, index) => {
        setPosition(image, index);
    });

    function setPosition(image, index) {
        const radius = 150 * 1.1; // Distance from center (adjust as needed)
        const angle = (index * 72) * (Math.PI / 180); // Divide 360 degrees by 5 images

        // Calculate final positions based on center of the container
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Set position and make image visible
        image.style.opacity = '1';
        
        image.style.transform = `translate(${x}px, ${y}px)`;
    }
});

function imageClicked(name) {
    alert(name);
}
