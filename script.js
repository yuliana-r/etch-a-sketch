const slider = document.getElementById('mySlider');
const currentSize = document.getElementById('currentSize');
const grid = document.getElementById('grid');



makeGrid(slider.value);

function addHoverColor() {
    const squares = document.querySelectorAll('.pixel');
}

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

}

function deleteGrid() {
    grid.textContent = '';
}

slider.oninput = function() {
    currentSize.textContent = `${slider.value} x ${slider.value}`;
    deleteGrid();
    makeGrid(slider.value);
}

