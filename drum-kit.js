/**
 * Drum Kit
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

/**
 * Function to play the sound, resetting the current time to allow for rapid consecutive hits
 * @param {sound} HTMLAudioElement to play
 */
function playSound(sound) {
  sound.currentTime = 0;
  const soundPromise = sound.play();
  if (soundPromise !== undefined) {
    soundPromise.catch((error) => {
      console.log("Touch again to play sound:");
    });
  }
}

/**
 * Animates the drum element by adding and removing the "is-animating" class
 * @param {element} html element to animate
 */
function animateDrum(element) {
  element.classList.add("is-animating");
  setTimeout(() => {
    element.classList.remove("is-animating");
  }, 600);
}

/**
 * Get all image elements and add event listeners to play the corresponding sound when each drum image is clicked. The function checks the class of each image element to determine which sound to play and which drum element to animate.
 * The event listener is added using the `onPointerDown` helper function, which handles the pointerdown event and plays the sound while animating the drum element.
 */
$(".drum img")
  .get()
  .forEach((element) => {
    if (element.classList.contains("kick-image")) {
      onPointerDown(element, $("#kick-sound").get(0));
    } else if (element.classList.contains("cymbal-image")) {
      onPointerDown(element, $("#cymbal-sound").get(0));
    } else if (element.classList.contains("snare-image")) {
      onPointerDown(element, $("#snare-sound").get(0));
    } else if (element.classList.contains("tom1-image")) {
      onPointerDown(element, $("#tom1-sound").get(0));
    } else if (element.classList.contains("tom2-image")) {
      onPointerDown(element, $("#tom2-sound").get(0));
    } else if (element.classList.contains("tom3-image")) {
      onPointerDown(element, $("#tom3-sound").get(0));
    } else if (element.classList.contains("tom4-image")) {
      onPointerDown(element, $("#tom4-sound").get(0));
    }
  });

/**
 * Handles Kyeboard events to play the corresponding drum sound and animate the drum element when a specific key is pressed. The keys are mapped as follows:
 * A - Snare
 * S - Cymbal
 * D - Kick
 * J - Tom 3
 * K - Tom 4
 * L - Tom 1
 * ; - Tom 2
 */
window.addEventListener("keydown", (event) => {
  var key = event.key.toUpperCase();
  switch (key) {
    case "A":
      playSound($("#snare-sound").get(0));
      animateDrum($(".snare img").get(0));
      break;
    case "S":
      playSound($("#cymbal-sound").get(0));
      animateDrum($(".cymbal img").get(0));
      break;
    case "D":
      playSound($("#kick-sound").get(0));
      animateDrum($(".kicks img").get(0));
      break;
    case "J":
      playSound($("#tom3-sound").get(0));
      animateDrum($(".tom3 img").get(0));
      break;
    case "K":
      playSound($("#tom4-sound").get(0));
      animateDrum($(".tom4 img").get(0));
      break;
    case "L":
      playSound($("#tom1-sound").get(0));
      animateDrum($(".tom1 img").get(0));
      break;
    case ";":
      playSound($("#tom2-sound").get(0));
      animateDrum($(".tom2 img").get(0));
      break;
    default:
      break;
  }
});
