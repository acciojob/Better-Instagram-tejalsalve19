// Function to handle the drag start event
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.currentTarget.classList.add("selected");
}

// Function to handle the drag over event
function handleDragOver(event) {
  event.preventDefault();
