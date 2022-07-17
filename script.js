let slider = document.getElementById("slider");
let sliderLabel = document.querySelector('.sliderLabel');
let color = "black";


function populateBoard (sliderValue) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${sliderValue} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${sliderValue} , 1fr)`;


    for (let i = 0; i < sliderValue * sliderValue; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"
        })
        square.addEventListener("mouseover", colorSquare)

        square.classList.add('cell');
        square.style.backgroundColor = '#ffeff5';
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(32)


function changeGridSize () {

    let currentGrid = document.querySelectorAll(".cell");
    currentGrid.forEach((div) => {
        return div.remove();
    })
    populateBoard(slider.value);
}
slider.addEventListener("mouseup", changeGridSize);
slider.addEventListener("mouseup", function() {sliderLabel.textContent = slider.value});


function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor (choice) {
    color = choice;
}