/**
 * Drum Kit
 * This JavaScript code adds interactivity to a drum kit web application. It listens for click events on various drum images (kick, toms, and cymbals) and plays the corresponding sound when each image is clicked. The sounds are reset to the beginning before playing to allow for rapid consecutive hits.
 * Each drum element is selected using `document.querySelector`, and an event listener is attached to it. When a drum image is clicked, the associated sound's `currentTime` property is set to 0 to reset the playback position, and then the `play()` method is called to play the sound.
 * This code assumes that the HTML structure includes elements with the specified classes and corresponding audio elements with the correct IDs for the sounds.
 * Overall, this code enables users to interact with the drum kit by clicking on the images to produce the appropriate drum sounds, creating a fun and engaging musical experience.
 *
 * Author: Dilson Torrefiel
 * Date: April 2026
 */
let touchCounter = 0;

// Tom 1 event listener using the helper function
onPointerDown(
  document.querySelector(".tom1-image"),
  document.getElementById("tom1-sound"),
);

// Tom 2 event listener using the helper function
onPointerDown(
  document.querySelector(".tom2-image"),
  document.getElementById("tom2-sound"),
);

// Tom 3 event listener using the helper function
onPointerDown(
  document.querySelector(".tom3-image"),
  document.getElementById("tom3-sound"),
);

// Tom 4 event listener using the helper function
onPointerDown(
  document.querySelector(".tom4-image"),
  document.getElementById("tom4-sound"),
);

// Hi-hat left event listener using the helper function
onPointerDown(
  document.querySelector(".left-cymbal-image"),
  document.getElementById("hihat-left-sound"),
);

// Snare event listener using the helper function
onPointerDown(
  document.querySelector(".snare-image"),
  document.getElementById("snare-sound"),
);

// Kick event listener using the helper function
onPointerDown(
  document.querySelector(".kick-image"),
  document.getElementById("kick-sound"),
);

/**
 * Helper function to add pointerdown event listener to a drum element and play the corresponding sound with animation.
 * @param {target element} element
 * @param {sound event} sound
 */
function onPointerDown(element, sound) {
  if (touchCounter > 1) {
    element.addEventListener("pointerdown", () => {
      // Handles the first click autoplay issue for desktop browsers
      playSound(sound);
      animateDrum(element);
    });
  } else {
    touchCounter++;
    // Handles mulit-touch events for mobile devices
    element.addEventListener("click", () => {
      playSound(sound);
      animateDrum(element);
    });
  }
}

// Function to play the sound, resetting the current time to allow for rapid consecutive hits
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Function to animate the drum element by adding and removing the "is-animating" class
function animateDrum(element) {
  element.classList.add("is-animating");
  setTimeout(() => {
    element.classList.remove("is-animating");
  }, 600);
}
