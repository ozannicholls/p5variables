var firstName = "Ozan";
var string = "hello";
var int = 500;


var eclipseD = 500;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    console.log(firstName);
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(400, 400, mouseX-mouseY);
    console.log(mouseX, mouseY);
}