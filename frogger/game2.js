/* Comp20 - Frogger Assignment Part 2
 * Nicholas Teleky
 */

//Global Variables
var sprites;
var frogX, frogY; //X, Y coordinates for the frog.
var frog = new Object();
var block = {
    width: 30,
    height: 35
};

//Starts game when document is ready
$(document).ready(function() {
    init_vars();
    sprites.onload = function () {
        draw_gameboard();
        frog.draw();
        delay = 1000 //milliseconds
        game_loop();
        setInterval(game_loop, delay);
    };
});

//Initializes global variables
function init_vars() {
    sprites = new Image();
    sprites.src = 'assets/frogger_sprites.png';
    //frog definition w/starting variables.
    frog = {
        x: 180,
        y: 490,
        dir: "up",
        draw: function() {
            if (this.dir != "none") pencil.drawImage(sprites, 10, 367, 25, 25, this.x, this.y, 25, 25);
 
        },
        move: function() {
            if (this.dir == "up"){ this.y = this.y-block.height; this.setDirection("none");}
            if (this.dir == "down"){ this.y = this.y+block.height; this.setDirection("none");}
            if (this.dir == "left"){ this.x = this.x-block.width; this.setDirection("none");}
          //  else if (this.dir == "right"){ this.x = this.x+block.width; this.setDirection("none");}
        },
        isValidMove: function() {
            if (this.dir == "up"){ if (this.y-block.height >= 98) return true;}
            else if (this.dir == "down"){ if (this.y+block.height <= 520) return true;}
            else if (this.dir == "left"){ if (this.x-block.width >= 0) return true;}
            else if (this.dir == "right"){ if (this.x+block.width <= 399) return true;}

            return false;
        },
        setDirection: function(direction) {
            this.dir = direction;
        }
    }
}

function game_loop() {
    document.onkeydown = function(e) {
        if (e.keyCode == 38) {frog.setDirection("up"); frog.move(); frog.draw();}
        if (e.keyCode == 40) {frog.setDirection("down"); frog.move(); frog.draw();}
        if (e.keyCode = 37) {frog.setDirection("left"); frog.move(); frog.draw();}
        if (e.keyCode = 39) {frog.setDirection("right"); frog.move(); frog.draw();}
    };
}

function draw_gameboard() {
    canvas = document.getElementById('game');
    if (canvas.getContext) {
        pencil = canvas.getContext('2d');
        //Draws water and road rectangles
        pencil.fillStyle = "#191970";
        pencil.fillRect(0, 0, 399, 280);
        pencil.fillStyle = "#000000";
        pencil.fillRect(0,280, 399, 285);
        //Splices FROGGER title
        pencil.drawImage(sprites, 11, 9, 329, 37, 5, 5, 329, 37);
        //Splices grass
         pencil.drawImage(sprites, 0, 53, 399, 59, -3, 45, 399, 59);
        //Splices purple 'safe zones'
        pencil.drawImage(sprites, 0, 116, 399, 40, 0, 270, 399, 40);
        pencil.drawImage(sprites, 0, 116, 399, 40, 0, 480, 399, 40);    }
}
