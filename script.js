let dimension = 16;
const container = document.querySelector("#container");
generateGrid(dimension);

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
    let dim = window.prompt("Enter width and height (Must be 100 or less):");
    if (dim > 100) {
        alert("Dimension must be 100 or less.");
        return;
    }

    if (dim != null) {
      clearGrid();
      generateGrid(dim);
    }
    
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach(pixel => {
    pixel.style.backgroundColor = "gray";
  });
});

function generateGrid(dimension) {
  const containerSize = 500;
  const itemSize = containerSize / dimension;

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for (let i = 0; i < dimension * dimension; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "gray";
    pixel.style.width = `${itemSize}px`;
    pixel.style.height = `${itemSize}px`;
    pixel.style.boxSizing = "border-box";
    
    container.appendChild(pixel);

    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "lavender";
    });
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}