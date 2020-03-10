let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let grid = 16;
let count = 0;

let snake = {
    x: 160,
    y: 160,

    // snake velocity. Moves one grid lenght every frame in either the x or y direction
    dx: grid,
    dy: 0,

    // keep track of all grids the snake body occupies
    cells: [],

    // length of the snake. grows when eating an apple
    maxCells: 4
};

let apple = {
    x: 320,
    y: 320
};

// get randon whole numbers in a specific range

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// game loop
function loop() {
    requestAnimationFrame(loop);

    //slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++count < 4) {
        return;
    };

    count = 0;
    context.clearReact(0, 0, canvas.width, canvas.height);

    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;

    // wrap snake position horizontally on edge of screen
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
        snake.y = 0;
    }
};


