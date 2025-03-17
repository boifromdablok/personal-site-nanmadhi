function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100) {
            counterElement.textContent = "100"; 
            revealContent(); 
            return;
        }
        currentValue++; 
        counterElement.textContent = currentValue;
        setTimeout(updateCounter, 10);
    }

    updateCounter();
}

function revealContent() {
    gsap.to(".counter", {
        duration: 0.3, 
        opacity: 0,
        onComplete: () => document.querySelector(".counter").remove()
    });

    gsap.to(".overlay", {
        duration: 0.8, 
        opacity: 0,
        delay: 0.2, 
        onComplete: () => document.querySelector(".overlay").remove()
    });

    gsap.to(".header", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    });

    gsap.from(".h1", {
        delay: 0.5,
        y: 30, 
        duration: 0.5,
        stagger: 0.05, 
        ease: "power3.out",
        opacity: 0
    });
}

startLoader();

// ** Image Changing Logic **
const images = ["assets/full-image1.jpg", "assets/full-image2.jpg", "assets/full-image3.jpg"];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    let newImage = `url('${images[currentImageIndex]}')`;

    // Change the background image for each letter while keeping positions intact
    document.querySelectorAll(".h1").forEach((letter, index) => {
        letter.style.backgroundImage = newImage;
    });
}

// ** Apply first image immediately & start loop **
document.addEventListener("DOMContentLoaded", () => {
    changeImage(); // Set first image
    setInterval(changeImage, 5000); // Change every 5s
});
