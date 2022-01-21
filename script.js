let CURRENT_COLOR;

const slider = document.getElementById('mySlider');
const currentSize = document.getElementById('currentSize');
const grid = document.getElementById('grid');
const removeGridBtn = document.getElementById('removeGrid');
const resetBtn = document.getElementById('reset').addEventListener('click', () => resetGrid());

// Colours

const black = document.getElementById('black').addEventListener('click', () => CURRENT_COLOR = 'black');
const yellow = document.getElementById('yellow').addEventListener('click', () => CURRENT_COLOR = 'yellow');
const white = document.getElementById('white').addEventListener('click', () => CURRENT_COLOR = 'white');
const orange = document.getElementById('orange').addEventListener('click', () => CURRENT_COLOR = 'orange');
const purple = document.getElementById('purple').addEventListener('click', () => CURRENT_COLOR = 'purple');
const blue = document.getElementById('blue').addEventListener('click', () => CURRENT_COLOR = 'blue');
const green = document.getElementById('green').addEventListener('click', () => CURRENT_COLOR = 'green');
const red = document.getElementById('red').addEventListener('click', () => CURRENT_COLOR = 'red');
const rainbow = document.getElementById('rainbow').addEventListener('click', () => CURRENT_COLOR = 'rainbow');
const pastel = document.getElementById('pastel').addEventListener('click', () => CURRENT_COLOR = 'pastel');
const mono = document.getElementById('mono').addEventListener('click', () => CURRENT_COLOR = 'mono');
const vintage = document.getElementById('vintage').addEventListener('click', () => CURRENT_COLOR = 'vintage');

const pastelColors = ['#FBF8CC', '#FDE4CF', '#FFCFD2', 'F1C0E8', '#CFBAF0',
    '#A3C4F3', '#90DBF4', '#8EECF5', '#98F5E1', '#B9FBC0'
];

const rainbowColors = ['#54478C', '#2C699A', '#048BA8', '#0DB39E', '#16DB93',
    '#83E377', '#B9E769', '#EFEA5A', '#F1C453', '#F29E4C'
];

const monoColors = ['#F8F9FA', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD',
    '#6C757D', '#495057', '#343A40', '#212529'
];

const vintageColors = ['#797D62', '#9B9B7A', '#BAA587', '#D9AE94', '#F1DCA7',
    '#FFCB69', '#E8AC65', '#D08C60', '#B58463', '#997B66'
];

function addHoverColor() {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(square => square.addEventListener('mouseenter', () => {

        switch (CURRENT_COLOR) {

            case 'rainbow':
                square.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                break;

            case 'pastel':
                square.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
                break;

            case 'mono':
                square.style.backgroundColor = monoColors[Math.floor(Math.random() * monoColors.length)];
                break;

            case 'vintage':
                square.style.backgroundColor = vintageColors[Math.floor(Math.random() * vintageColors.length)];
                break;

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

function resetGrid() {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(function (element) {
        element.style = "null";
    })
}

removeGridBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(square => square.style.borderStyle = "none");
});

slider.oninput = function () {
    currentSize.textContent = `${slider.value} x ${slider.value}`;
    deleteGrid();
    makeGrid(slider.value);
}

makeGrid(slider.value);