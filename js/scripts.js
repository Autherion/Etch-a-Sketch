const container_bottom = document.querySelector(".container-bottom");
const reset_button = document.getElementById('reset');
const clear_button = document.getElementById('resize');

function changeColor(e) {
  const Color1 = Math.floor(Math.random() * 256);
  const Color2 = Math.floor(Math.random() * 256);
  const Color3 = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
}

function makeGrid(rows, cols) {
  container_bottom.style.setProperty('--grid-rows', rows);
  container_bottom.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    container_bottom.appendChild(cell).className = "grid-item";
    container_bottom.addEventListener("mouseover", changeColor);
  };
};

let blocks = 16;

makeGrid(16,16);

let grid = document.querySelectorAll(".grid-item");

reset_button.addEventListener("click", () => {
  grid = document.querySelectorAll(".grid-item");
  grid.forEach((grid) => {
    grid.style.cssText = "background-color: white;";
  });
});


clear_button.addEventListener("click", () => {
  for (let i = container_bottom.childNodes.length - 1; i >= 0; i--) {
    container_bottom.removeChild(container_bottom.childNodes[i]);
  }
    size = prompt("Insert the size of the box", "Only input a single number");
    size = parseInt(size);
    if (typeof size == 'number'){
      if (size > 0 && size < 101){
        makeGrid(size,size); 
      }
    } else {
      alert("Please put a number between 1 and 100");
    }
});


