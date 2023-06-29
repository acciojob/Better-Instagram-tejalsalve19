//your code here
// Function to handle the drag start event
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to handle the drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const sourceElement = document.getElementById(data);
  const targetElement = event.target;

  // Swap the background images
  const sourceImage = sourceElement.style.backgroundImage;
  sourceElement.style.backgroundImage = targetElement.style.backgroundImage;
  targetElement.style.backgroundImage = sourceImage;
}

// Add event listeners to the draggable elements
const draggables = document.querySelectorAll(".image");
draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", dragStart);
  draggable.addEventListener("dragover", dragOver);
  draggable.addEventListener("drop", drop);
});