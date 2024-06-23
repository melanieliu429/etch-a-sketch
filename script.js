let dimension = 16;
const container = document.querySelector("#container");
generateGrid(dimension);

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    dim = window.prompt("Enter width and height (Must be 100 or less):");
    clearGrid();
    generateGrid(dim);
})


function generateGrid(dimension) {
  const containerSize = 500;
  const itemSize = containerSize / dimension;

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for (let i = 0; i < dimension * dimension; i++) {
    const pixel = document.createElement("div");
    pixel.style.backgroundColor = "gray";
    pixel.style.width = `${itemSize}px`;
    pixel.style.height = `${itemSize}px`;
    pixel.style.boxSizing = "border-box";
    
    container.appendChild(pixel);

    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "lavender";
    })
  }
}

function clearGrid(dimension) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
