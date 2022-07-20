let slider = document.getElementById("slider");
let sliderLabel = document.querySelector('.sliderLabel');
let colorPicker = document.getElementById("colorPicker");
let color = "rainbow";


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
populateBoard(6)





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
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 65%)`;
    } 
    else if (color === 'eraser') {
        this.style.backgroundColor = '#ffeff5' 
    } else {
        this.style.backgroundColor = colorPicker.value
    }
}

function changeColor (choice) {
    color = choice;
}

function resetBoard () {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    let sliderLabel = document.querySelector(".sliderLabel");
    squares.forEach((div) => div.style.backgroundColor = '#ffeff5');
    populateBoard(6);
    sliderLabel.innerText = '6'
    slider.value = '6'

  
}