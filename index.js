var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      const bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
  }
}
function buttonAnimation(currentKey) {

  // new commit
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}