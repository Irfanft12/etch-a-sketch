const container = document.querySelector(".container");
const addGridBtn = document.querySelector("#add-number");
let gridCount = 256;

addGridBtn.addEventListener("click", function() {
   const number = +prompt("How many grids you want enter a number not more than 100", 0);
   if (number > 100 || number <= 0) {

    alert("Enter a number between 0 and 100")
        
   } else {
        gridCount = number
        createGrids();
   }
})

function createGrids() {
    container.innerHTML = "";
    for (let i = 1; i <= gridCount; i++) {
        const squareGrid = document.createElement("div");
        squareGrid.classList.add("square-grid");
        squareGrid.textContent = i;
        container.appendChild(squareGrid)
    }
}

createGrids();

const squareGrids = document.querySelectorAll(".square-grid");
console.log(squareGrids.length);

