const slider = document.getElementById('mySlider');
const currentSize = document.getElementById('currentSize');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear');

makeGrid(slider.value);

slider.oninput = function () {
    currentSize.textContent = `${slider.value} x ${slider.value}`;
    deleteGrid();
    makeGrid(slider.value);
}

function addHoverColor() {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            element.style.backgroundColor = "black";
        });
    });
};

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }
    addHoverColor();
}


function deleteGrid() {
    grid.textContent = '';
}

function clearPixel() {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(function (element) {
        element.style = "null";
    })
}

clearBtn.addEventListener('click', function () {
    clearPixel();
})