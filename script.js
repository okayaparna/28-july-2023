const gridContainer = document.getElementById('gridContainer');

// Function to create a grid item (unit) with event listeners for hover effect
function createGridItem() {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  
  // Add event listener for hover effect
  gridItem.addEventListener('mouseover', () => {
    gridItem.style.backgroundColor = 'black';
  });

  gridContainer.appendChild(gridItem);
}

// Function to generate the grid with 100x100 units
function generateGrid() {
  for (let i = 0; i < 100 * 100; i++) {
    createGridItem();
  }
}

generateGrid();