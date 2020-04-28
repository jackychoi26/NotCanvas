let startGameCount = 0;
const balls = [];

// the ball blueprint
function Circle(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    // velocity simulation
    this.dx = (Math.random() * 4) + 1;
    this.dy = (Math.random() * 4) + 1;

    // the bouncing back when x-axis or y-axis is negative number
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    // the function that draws the actual ball to canvas
    this.draw = function() {
        contextReal.beginPath();
        contextReal.fillStyle = this.c;
        contextReal.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        contextReal.fill();

    }

    this.animate = function() {
        this.x += this.dx;
        this.y += this.dy;

        // velocity added to the location to the ball
        if (this.x + this.r > canvasReal.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > canvasReal.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

        this.draw();
    }

}

function rollBalls() {

    // clear the canvas for simulation of movement
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].animate();
    }

    // function that tells the browser to perform animation using the function in parameter
    requestAnimationFrame(rollBalls);
}


// how the hidden mini game button will appear
function startGame() {
    if (startGameCount >= 10) {
        $('#ballGame').css('visibility', 'visible');
        $('#moveBalls').css('visibility', 'visible');
    } else {
        startGameCount++;
        console.log(10 - startGameCount + ' steps to have fun!')
    }
}