document.addEventListener('DOMContentLoaded', () => {
    // Get reference to the kick button
    const kickButton = document.getElementById('kick-button')
    
    // Get reference to the kick sound
    const kickSound = document.getElementById('kick-sound')
    
    // When the kick button is clicked, play the kick sound
    kickButton.addEventListener('click', () => {
        kickSound.currentTime = 0 // Rewind sound to the beginning to allow for rapid playback
        kickSound.play()
    })
})
