var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// var matrix = "HELLO+WORLD_WELCOME-TO+MY_SITE"
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;


//TODO: Hide reset button initially
var resetButton = document.getElementById("reset");
resetButton.style.display = "none";

var matrixButton = document.getElementById("matrix");
matrixButton.style.display = "flex";

var codeBgButton = document.getElementById("codeBg");
codeBgButton.style.display = "flex";

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, .04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#00c853";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

var interval =  setInterval(draw, 10);


function deadLink() {
    alert('This app is currently unavailable');
    return false;
}
function turnOnCanvas() {
    c.style.width = "100%";
    c.style.height = "100%";
    var body = document.body;
    body.style.backgroundColor = "black";
    // draw();
    clearInterval(interval);
    interval =  setInterval(draw, 100);
    body.style.backgroundImage = "none";
    resetButton.style.display = "flex";
    matrixButton.style.display = "none";
}

function turnOffCanvas() {
    c.style.width = "0";
    c.style.height = "0";
    var body = document.body;
    body.style.backgroundColor = "#eee";
    resetButton.style.display = "none";
    matrixButton.style.display = "flex";
    codeBgButton.style.display = "flex";
    body.style.backgroundImage = "none";
    clearInterval(interval);
    interval = setInterval(draw, 10);
    
    // draw();
}

function setBgCode(){
    c.style.width = "0";
    c.style.height = "0";
    var body = document.body;
    body.style.backgroundImage = "url(img/CodeImage-1.png)";
    clearInterval(interval);
    interval = setInterval(draw, 10);
    resetButton.style.display = "flex";
    // matrixButton.style.display = "none";
    codeBgButton.style.display = "none";
}