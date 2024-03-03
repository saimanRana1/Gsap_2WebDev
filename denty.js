// GSAP Animation
gsap.registerPlugin(TimelineLite);

// Function to set up animations
function setupAnimations() {
    // Create a timeline for the animation
    var tl = new TimelineLite();

    // Add image animations to the timeline
    tl.fromTo(
        ["#img1", "#img2", "#img3", "#img4"],
        { y: 0, rotation: -30, opacity: 0 },
        {
            y: -200,
            opacity: 1,
            rotation: 0, // Adjust the final rotation value
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.3, // Stagger the image animations
        }
    );

    // Staggered animation for social media icons from right to left
    tl.fromTo(
        "#bottom2 i",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.inOut", stagger: 0.2 },
        "-=1.2" // Start this animation 1.2 seconds after the image animations start
    );

    // Rotate back to the original position after the animations
    tl.to("#img1, #img2, #img3, #img4", {
        rotation: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
    });

    // Delay the entire timeline by 1 second
    tl.delay(1);

    // Play the timeline
    tl.play();
}

// Initiate animations when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    setupAnimations();
});
