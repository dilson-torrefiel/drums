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
var kicks = document.querySelector(".kick-image");
var kicksSound = document.getElementById("kick-sound");
kicks.addEventListener("click", function () {
  kicksSound.currentTime = 0;
  kicksSound.play();

  kicks.classList.add("is-animating");
  setTimeout(() => {
    kicks.classList.remove("is-animating");
  }, 600);
});

var tom1 = document.querySelector(".tom1-image");
var tom1Sound = document.getElementById("tom1-sound");
tom1.addEventListener("click", function () {
  tom1Sound.currentTime = 0;
  tom1Sound.play();

  tom1.classList.add("is-animating");
  setTimeout(() => {
    tom1.classList.remove("is-animating");
  }, 600);
});

var tom2 = document.querySelector(".tom2-image");
var tom2Sound = document.getElementById("tom2-sound");
tom2.addEventListener("click", function () {
  tom2Sound.currentTime = 0;
  tom2Sound.play();

  tom2.classList.add("is-animating");
  setTimeout(() => {
    tom2.classList.remove("is-animating");
  }, 600);
});

var tom3 = document.querySelector(".tom3-image");
var tom3Sound = document.getElementById("tom3-sound");
tom3.addEventListener("click", function () {
  tom3Sound.currentTime = 0;
  tom3Sound.play();

  tom3.classList.add("is-animating");
  setTimeout(() => {
    tom3.classList.remove("is-animating");
  }, 600);
});

var tom4 = document.querySelector(".tom4-image");
var tom4Sound = document.getElementById("tom4-sound");
tom4.addEventListener("click", function () {
  tom4Sound.currentTime = 0;
  tom4Sound.play();

  tom4.classList.add("is-animating");
  setTimeout(() => {
    tom4.classList.remove("is-animating");
  }, 600);
});

var hihatLeft = document.querySelector(".left-cymbal-image");
var hihatLeftSound = document.getElementById("hihat-left-sound");
hihatLeft.addEventListener("click", function () {
  hihatLeftSound.currentTime = 0;
  hihatLeftSound.play();

  hihatLeft.classList.add("is-animating");
  setTimeout(() => {
    hihatLeft.classList.remove("is-animating");
  }, 600);
});

var snare = document.querySelector(".snare-image");
var snareSound = document.getElementById("snare-sound");
snare.addEventListener("click", function () {
  snareSound.currentTime = 0;
  snareSound.play();

  snare.classList.add("is-animating");
  setTimeout(() => {
    snare.classList.remove("is-animating");
  }, 600);
});
