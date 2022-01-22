let CURRENT_COLOR;

const slider = document.getElementById('mySlider');
const currentSize = document.getElementById('currentSize');
const grid = document.getElementById('grid');
const removeGridBtn = document.getElementById('removeGrid');
const resetBtn = document.getElementById('reset').addEventListener('click', () => resetGrid());

// Colours

const black = document.getElementById('black').addEventListener('click', () => CURRENT_COLOR = 'black');
const yellow = document.getElementById('yellow').addEventListener('click', () => CURRENT_COLOR = '#fad643');
const white = document.getElementById('white').addEventListener('click', () => CURRENT_COLOR = 'white');
const orange = document.getElementById('orange').addEventListener('click', () => CURRENT_COLOR = '#f8961e');
const purple = document.getElementById('purple').addEventListener('click', () => CURRENT_COLOR = '##b185db');
const blue = document.getElementById('blue').addEventListener('click', () => CURRENT_COLOR = '#4ea8de');
const green = document.getElementById('green').addEventListener('click', () => CURRENT_COLOR = '#5fad56');
const red = document.getElementById('red').addEventListener('click', () => CURRENT_COLOR = '#c81d25');
const rainbow = document.getElementById('rainbow').addEventListener('click', () => CURRENT_COLOR = rainbowColors);
const pastel = document.getElementById('pastel').addEventListener('click', () => CURRENT_COLOR = pastelColors);
const mono = document.getElementById('mono').addEventListener('click', () => CURRENT_COLOR = monoColors);
const vintage = document.getElementById('vintage').addEventListener('click', () => CURRENT_COLOR = vintageColors);

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


// Colour square on click

function addHoverColor() {
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(square => square.addEventListener('click', () => {

        if (typeof(CURRENT_COLOR) === "string") {
            square.style.backgroundColor = CURRENT_COLOR;
        } else {
            square.style.backgroundColor = CURRENT_COLOR[Math.floor(Math.random() * CURRENT_COLOR.length)]
         };
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
    CURRENT_COLOR = "";
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