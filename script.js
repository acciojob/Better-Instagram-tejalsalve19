// Get all the draggable image divs
const images = document.querySelectorAll('.image');

// Store the currently selected image div
let selectedImage = null;

// Add event listeners for drag and drop events
images.forEach(image => {
  // Set the draggable attribute to true
  image.setAttribute('draggable', 'true');

  // Add event listeners for drag events
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

// Function to handle drag start event
function dragStart(event) {
  // Store the selected image div
  selectedImage = this;

  // Add a CSS class to indicate the dragging state
  this.classList.add('dragging');
}

// Function to handle drag enter event
function dragEnter(event) {
  // Add a CSS class to indicate the drag over state
  this.classList.add('drag-over');
}

// Function to handle drag over event
function dragOver(event) {
  // Prevent default to allow the drop event
  event.preventDefault();
}

// Function to handle drag leave event
function dragLeave(event) {
  // Remove the CSS class for drag over state
  this.classList.remove('drag-over');
}

// Function to handle drop event
function drop(event) {
  // Prevent default to avoid opening the dragged image in a new tab
  event.preventDefault();

  // Swap the background images of the selected image and the target image
  const backgroundImage = this.style.backgroundImage;
  this.style.backgroundImage = selectedImage.style.backgroundImage;
  selectedImage.style.backgroundImage = backgroundImage;

  // Remove the CSS class for drag over state
  this.classList.remove('drag-over');
}

// Function to handle drag end event
function dragEnd(event) {
  // Remove the CSS classes for dragging state
  this.classList.remove('dragging');
  selectedImage = null;
}
