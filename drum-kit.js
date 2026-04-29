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

/**
 * Helper function to add pointerdown event listener to a drum element and play the corresponding sound with animation.
 * @param {target element} element
 * @param {sound event} sound
 */
function onPointerDown(element, sound) {
  // Handles mulit-touch events for mobile devices
  element.addEventListener("pointerdown", () => {
    playSound(sound);
    animateDrum(element);
  });
}
function onKeyDown(element, sound) {
  // Handles mulit-touch events for mobile devices
  element.addEventListener("keydown", () => {
    playSound(sound);
    animateDrum(element);
  });
}

// Function to play the sound, resetting the current time to allow for rapid consecutive hits
function playSound(sound) {
  sound.currentTime = 0;
  const soundPromise = sound.play();
  if (soundPromise !== undefined) {
    soundPromise.catch((error) => {
      console.log("Touch again to play sound:");
    });
  }
}

// Function to animate the drum element by adding and removing the "is-animating" class
function animateDrum(element) {
  element.classList.add("is-animating");
  setTimeout(() => {
    element.classList.remove("is-animating");
  }, 600);
}

// Get all image elements and add event listeners
document.querySelectorAll(".drum img").forEach((element) => {
  if (element.classList.contains("kick-image")) {
    onPointerDown(element, document.getElementById("kick-sound"));
  } else if (element.classList.contains("cymbal-image")) {
    onPointerDown(element, document.getElementById("cymbal-sound"));
  } else if (element.classList.contains("snare-image")) {
    onPointerDown(element, document.getElementById("snare-sound"));
  } else if (element.classList.contains("tom1-image")) {
    onPointerDown(element, document.getElementById("tom1-sound"));
  } else if (element.classList.contains("tom2-image")) {
    onPointerDown(element, document.getElementById("tom2-sound"));
  } else if (element.classList.contains("tom3-image")) {
    onPointerDown(element, document.getElementById("tom3-sound"));
  } else if (element.classList.contains("tom4-image")) {
    onPointerDown(element, document.getElementById("tom4-sound"));
  }
});

// Get all keyboard keys and add event listeners
window.addEventListener("keydown", (event) => {
  var key = event.key.toUpperCase();
  switch (key) {
    case "A":
      playSound(document.getElementById("snare-sound"));
      animateDrum(document.querySelector(".snare img"));
      break;
    case "S":
      playSound(document.getElementById("cymbal-sound"));
      animateDrum(document.querySelector(".cymbal img"));
      break;
    case "D":
      playSound(document.getElementById("kick-sound"));
      animateDrum(document.querySelector(".kicks img"));
      break;
    case "J":
      playSound(document.getElementById("tom3-sound"));
      animateDrum(document.querySelector(".tom3 img"));
      break;
    case "K":
      playSound(document.getElementById("tom4-sound"));
      animateDrum(document.querySelector(".tom4 img"));
      break;
    case "L":
      playSound(document.getElementById("tom1-sound"));
      animateDrum(document.querySelector(".tom1 img"));
      break;
    case ";":
      playSound(document.getElementById("tom2-sound"));
      animateDrum(document.querySelector(".tom2 img"));
      break;
    default:
      break;
  }
});
