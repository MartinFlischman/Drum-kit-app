// Retrieve the button elements
const kickButton = document.querySelector("#kick");
const rideButton = document.querySelector("#ride");

// Retrieve the sound elements
const kickSound = document.querySelector("#kick-sound");
const rideSound = document.querySelector("#ride-sound");

// Attach a click event listener to the kick button
kickButton.addEventListener("click", () => {
    // Reset the sound time to replay it
    kickSound.currentTime = 0;
    
    // Play the kick sound
    kickSound.play();
});

rideButton.addEventListener("click", () => {
    // Reset the sound time to replay it
    rideSound.currentTime = 0;

    // Play the ride sound
    rideSound.play();
});