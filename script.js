    const gridContainer = document.getElementById('gridContainer');
    let isDragging = false;

    // Function to create a grid item (unit)
    function createGridItem() {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';

      gridContainer.appendChild(gridItem);
    }

     // Function to generate the grid with 100x100 units
     function generateGrid() {
        for (let i = 0; i < 100 * 100; i++) {
          createGridItem();
        }
      }
  
      generateGrid();
       

    // Event listeners for mouse/keyboard drag
    gridContainer.addEventListener('mousedown', () => {
      isDragging = true;
    });

    gridContainer.addEventListener('mouseup', () => {
      isDragging = false;
    });

    gridContainer.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // Find the grid item being hovered over
        const gridItem = event.target;
        
        // Set the "dragging" class to the grid container
        // This will change the background color to black for grid items while dragging
        gridContainer.classList.add('dragging');
        
        // Check if the event target is a grid item to avoid changing the background color of the entire container
        if (gridItem.classList.contains('grid-item')) {
          gridItem.style.backgroundColor = 'black';
        }
      }
    });

    // Reset the dragging state and remove the "dragging" class when the mouse leaves the grid container
    gridContainer.addEventListener('mouseleave', () => {
      isDragging = false;
      gridContainer.classList.remove('dragging');
    });



// Event listener for the erase button
const eraseButton = document.getElementById('erase-button-id');
eraseButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');

  // Loop through all grid items and change their background color to white
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
});