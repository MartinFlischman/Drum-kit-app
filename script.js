// Define button and sound pairs
const buttonSoundPairs = [
    { button: document.querySelector("#kick-button"), sound: document.querySelector("#kick-sound") },
    { button: document.querySelector("#ride-button"), sound: document.querySelector("#ride-sound") },
    { button: document.querySelector("#snare-button"), sound: document.querySelector("#snare-sound") },
    { button: document.querySelector("#tom-button"), sound: document.querySelector("#tom-sound") },
    { button: document.querySelector("#hihat-button"), sound: document.querySelector("#hihat-sound") },
    { button: document.querySelector("#boom-button"), sound: document.querySelector("#boom-sound") },
    { button: document.querySelector("#clap-button"), sound: document.querySelector("#clap-sound") },
    { button: document.querySelector("#openhat-button"), sound: document.querySelector("#openhat-sound") },
    { button: document.querySelector("#tink-button"), sound: document.querySelector("#tink-sound") }
];

// Attach click event listeners to buttons
buttonSoundPairs.forEach(pair => {
    pair.button.addEventListener("click", () => playSound(pair.sound));
});

// Attach keydown event listener to play sounds
document.addEventListener("keydown", event => {
    const keySoundMap = {
        "a": document.querySelector("#kick-sound"),
        "s": document.querySelector("#ride-sound"),
        "d": document.querySelector("#snare-sound"),
        "f": document.querySelector("#tom-sound"),
        "g": document.querySelector("#hihat-sound"),
        "h": document.querySelector("#boom-sound"),
        "j": document.querySelector("#clap-sound"),
        "k": document.querySelector("#openhat-sound"),
        "l": document.querySelector("#tink-sound")
    };
    const pressedKey = event.key.toLowerCase();
    if (keySoundMap.hasOwnProperty(pressedKey)) {
        const sound = keySoundMap[pressedKey];
        playSound(sound);
    }
});

// Function to play sound
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
