// class Ball {
//     constructor(x, y, radius, color) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//     }
// }

// Ball.prototype.draw = function() {
//     contextReal.beginPath();
//     contextReal.fillStyle = this.color;
//     contextReal.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     contextReal.fill();
//     contextReal.closePath();
// };

// Ball.prototype.update = function() {
//     this.x += controls.dx; // We can reference our ball object for gui controls
//     this.y += -controls.dy; // Up is generally more intuitive as a positive value, so let's flip it to be a bit easier to handle.
//     this.draw();
// };


// const redBall = new Ball(innerWidth / 2, innerHeight / 2, 50, 'red');


// const init = () => redBall.draw();

// const animate = () => {
//     requestAnimationFrame(animate);
//     // Since we are creating a new ball every frame we first want to clear the old one.
//     contextReal.clearRect(0, 0, contextReal.width, contextReal.height);

//     redBall.update();
// };

// init();
// animate();