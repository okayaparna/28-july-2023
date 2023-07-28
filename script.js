// Get the grid container element
const gridContainer = document.querySelector('.grid-container');

// Function to generate the grid
function generateGrid(rows, cols) {
    // Calculate total number of cells
    const totalCells = rows * cols;

    // Create the grid cells dynamically
    for (let i = 0; i < totalCells; i++) {
        const gridUnit = document.createElement('div');
        gridUnit.classList.add('grid-unit');
        gridContainer.appendChild(gridUnit);
    }
}

// Call the function to generate a 100x100 grid
generateGrid(100, 100);
