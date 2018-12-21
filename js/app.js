// Enemies our player must avoid
const Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y; 
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if(this.x > 505){
        this.x = -50;
    }
    // console.log(`In enemy update loop`);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player(){
    this.player = 'images/char-boy.png';
    this.x = 209;
    this.y = 405;
}

Player.prototype.update = function(){
    // console.log(`player x is ${this.x} and player y is ${this.y}`);
    if(this.y === -10){ console.log('Congrats!!');}
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.player), this.x, this.y);

}

Player.prototype.handleInput = function(evtObj){
    switch (evtObj) {
        case 'left': 
            if(this.x != 7) {this.x -= 101;}
            break;
        case 'right':
            if(this.x != 411) {this.x += 101;}
            break;
        case 'down' :
            if(this.y != 405) {this.y += 83;}
            break;
        case 'up' :
            if(this.y != -10) {this.y -= 83;}
            break;
    }
        // console.log(`x is ${this.x} and y is ${this.y}`);

};

let checkCollisions = () => {
    // console.log('In checkCollisions');
 // console.log(`this.y is ${enemy2.y} and player.y is ${player.y}`);
 allEnemies.forEach(enemy => {
        // console.log(`enemy.y is ${enemy.y} and player.y is ${player.y}`);
        if(player.y <= enemy.y + 42 &&
            player.y >= enemy.y - 42 &&
            player.x <= enemy.x + 50 &&
            player.x >= enemy.x - 50){
        player.x = 209;
        player.y = 405;    
        console.log(`Collision!!`);
 }})}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemy1 = new Enemy(101, 60, 101);
let enemy2 = new Enemy(202, 150, 150);
let enemy3 = new Enemy(303, 225, 190);
let player = new Player();
const allEnemies = [enemy1, enemy2, enemy3];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
