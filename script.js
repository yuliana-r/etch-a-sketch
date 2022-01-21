const slider = document.getElementById('mySlider');
const currentSize = document.getElementById('currentSize');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear');

const black = document.getElementById('black');
const yellow = document.getElementById('yellow');
const white = document.getElementById('white');
const orange = document.getElementById('orange');
const purple = document.getElementById('purple');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
const rainbow = document.getElementById('rainbow');
const pastel = document.getElementById('pastel');


makeGrid(slider.value);

slider.oninput = function () {
    currentSize.textContent = `${slider.value} x ${slider.value}`;
    deleteGrid();
    makeGrid(slider.value);
}

// function addHoverColor() {
//     const squares = document.querySelectorAll('.pixel');
//     squares.forEach(function (element) {
//         element.addEventListener("mouseenter", function () {
//             element.style.backgroundColor = "black";
//         });
//     });
// };

// function addHoverColor() {
//     const squares = document.querySelectorAll('.pixel');
//     squares.forEach(function (element) {

//         black.addEventListener('click', function () {
//             element.addEventListener("mouseenter", function () {
//                 element.style.backgroundColor = "black";
//             });
//         });

//         yellow.addEventListener('click', function () {
//             element.addEventListener("mouseenter", function () {
//                 element.style.backgroundColor = "#fad643";
//             });
//         });

//         white.addEventListener('click', function () {
//             element.addEventListener("mouseenter", function () {
//                 element.style.backgroundColor = "white";
//             });
//         });

//         orange.addEventListener('click', function () {
//             element.addEventListener("mouseenter", function () {
//                 element.style.backgroundColor = "white";
//             });
//         });

//     });
// };

black.addEventListener('click', () => addHoverColor('black'));
yellow.addEventListener('click', () => addHoverColor('yellow'));
white.addEventListener('click', () => addHoverColor('white'));
orange.addEventListener('click', () => addHoverColor('orange'));
purple.addEventListener('click', () => addHoverColor('purple'));
blue.addEventListener('click', () => addHoverColor('blue'));
green.addEventListener('click', () => addHoverColor('green'));
red.addEventListener('click', () => addHoverColor('red'));

function addHoverColor(color) {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(square => square.addEventListener('mouseenter', () => {
        switch (color) {

            case 'black':
                square.style.backgroundColor = "black";
                break;

            case 'yellow':
                square.style.backgroundColor = "#fad643";
                break;

            case 'white':
                square.style.backgroundColor = "white";
                break;

            case 'orange':
                square.style.backgroundColor = "#f8961e";
                break;

            case 'purple':
                square.style.backgroundColor = "#b185db";
                break;

            case 'blue':
                square.style.backgroundColor = "#4ea8de";
                break;

            case 'green':
                square.style.backgroundColor = "#5fad56";
                break;
                
            case 'red':
                square.style.backgroundColor = "#c81d25";
                break;
        }
    }))
};



function handleColor(color) {
    switch (color) {
        case 'black':
            element.style.backgroundColor = "black";
            break;
        case 'yellow':
            element.style.backgroundColor = "yellow";
            break;
    }
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