function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100) {
            counterElement.textContent = "100"; // Ensure it ends at 100
            revealContent(); // Trigger the reveal animation
            return;
        }

        currentValue++; // Steady increase
        counterElement.textContent = currentValue;

        setTimeout(updateCounter, 30); // Adjust speed (smaller = faster)
    }

    updateCounter();
}

function revealContent() {
    // Fade out the counter
    gsap.to(".counter", {
        duration: 0.5,
        opacity: 0,
        onComplete: () => document.querySelector(".counter").remove()
    });

    // Fade out the overlay (black bars)
    gsap.to(".overlay", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        onComplete: () => document.querySelector(".overlay").remove()
    });

    // Make the header visible and animate it
    gsap.to(".header", {
        opacity: 1,  // Ensure it's fully visible
        duration: 1,
        delay: 1
    });

    gsap.from(".h1", {
        delay: 1,
        y: 50,  // Subtle slide-up effect
        duration: 1,
        stagger: 0.1, // More natural stagger
        ease: "power3.out",
        opacity: 0
    });
}

startLoader();
