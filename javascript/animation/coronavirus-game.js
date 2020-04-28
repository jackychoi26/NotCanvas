// override the drawing function to make it not intervene with corona virus game
class Nothing extends PaintFunction {
    constructor(contextReal) {
        super();
    }
}

// store these variables outside let all methods being able to access
let virusArray = [];
let playerX, playerY, player;

// this is a game initialization function
// setting up the environment by disabling the canvas tools
// calling initialization of virus balls and animaiton
function coronaGame() {

    // this event listener is to get mouse event and pass it to the outside variable
    canvasDraft.addEventListener('mousemove', function(e) {

        currentFunction = new Nothing(contextReal);

        // pass the values to outside for other functions to use
        playerX = e.offsetX;
        playerY = e.offsetY;

    })

    initializing();
    animation1();

}


// using pythagorean theorem to detect the collision of two balls
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// keep refreshing the page and call update function to simulate moving animation of player and virus balls
function animation1() {
    requestAnimationFrame(animation1);
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);

    // initializing the player here
    player = new Virus(playerX, playerY, 0, 0, 30, "black");

    // calling update function to refersh the frame for both player and virus balls
    player.update();

    virusArray.forEach(virus => {
        virus.update(virusArray);
    })

}

// virus ball object blueprint, takes parameter for randomization of each individual ball
// for now it is fixed size, this is prepared for the future use
function Virus(x, y, dx, dy, radius, color) {

    // the values could be randomized for more challenging difficulty
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    // instantize the balls on the canvas
    this.draw = function() {
        contextReal.beginPath();
        contextReal.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        contextReal.fillStyle = color;
        contextReal.fill();
        contextReal.strokeStyle = color;;
        contextReal.stroke();
    }

    // every update simulates velocity
    this.update = function() {

        // if x or y is negative, reverse it to create a bouncing effect
        if (this.x > canvasReal.clientWidth) {
            this.dx = -this.dx;
        }
        if (this.x + this.radius > canvasReal.clientWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvasReal.clientHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // x and y will increment to one direction
        this.x += this.dx;
        this.y -= this.dy

        this.draw();

        // combining the pythagorean theorem with for iteration
        // to calculate the collision between player and every single ball
        for (let i = 0; i < virusArray.length; i++) {
            if (this === virusArray[i]) continue;

            if (getDistance(playerX, playerY, virusArray[i].x, virusArray[i].y) < 105) {
                gameover()
            }
        }
    }
}

// initializing the virus balls, currently it prodoces 5 virus balls
function initializing() {

    for (let i = 0; i < 5; i++) {
        let radius = 80;

        // for now they are fixed location to avoid bumping into player ball at the beginning
        let x = 100 + i * 200;
        let y = 400 + i * 50;

        // random velocity
        let dx = (Math.random() - 0.5) * 8;
        let dy = (Math.random() - 0.5) * 8;

        // this array will be used together with forEach method above
        virusArray.push(new Virus(x, y, dx, dy, radius, "red"));

    }
}

function creatingVirus() {

    requestAnimationFrame(creatingVirus);

    contextReal.clearRect(0, 0, canvasReal.clientWidth, canvasReal.clientHeight)

    for (let i = 0; i < virusArray.length; i++) {
        virusArray[i].update();
    }
}

function gameover() {
    alert('Stay home, stay safe.')
    window.stop();
}

function winning() {

    // 10 seconds later will win the game
    setTimeout(() => {
        alert('You have survived the coronoavirus!...Yeah, but only you.')
        window.stop();
    }, 10000);
}

// this is called by the outside dropdown hidden button
// will be responsible for triggering all the function above
function startDodgingVirus() {
    creatingVirus();
    coronaGame();
    winning();
}