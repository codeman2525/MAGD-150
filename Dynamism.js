let sodaBubbles = [];

var bite = false;
var sip = false;
var sodaX, sodaY;

function setup() { 
  createCanvas(800,800);
  fill(240);
  noStroke();
} 

function draw() { 
background(140,69,10);
  let t = frameCount / 60; // update time

  // create a random number of sodabubble each frame
  for (let i = 0; i < random(5); i++) {
    sodaBubbles.push(new sodaPop()); // append sodabubble object
  }

  // loop through sodabubble with a for..of loop
  for (let bubble of sodaBubbles) {
    bubble.update(t); // update sodabubble position
    bubble.display(); // draw sodabubble
  }
  sodaX = width/4-50;
  if(sip){
    sodaY= height-100;
  }
    else{
      sodaY= height-200;
    }
  rect(sodaX,sodaY, 100, 200);
if(bite){
  push()
  fill(212,161,81);
  quad(500,780,700,780,650,700,550,700);
  pop();
  push();
  fill(194,102,77);
  ellipseMode(CENTER);
  ellipse(650,750,25,25);
  ellipse(550,740, 34,34); 
  pop();
  push();
  fill(184,158,92,72);
  quad(490,800,715,800,700,780,500,780);
  pop();
}
else{
   push()
  fill(212,161,81);
  triangle(500,780,700,780,600,620);
  pop();
  push();
  fill(194,102,77);
  ellipseMode(CENTER);
  ellipse(650,750,25,25);
  ellipse(550,740, 34,34);
  ellipse(600,650, 20,20);
  pop();
  push();
  fill(184,158,92,72);
  quad(490,800,715,800,700,780,500,780);
  pop();
  
 
  }
print(mouseX,mouseY);
}
  // sodabubble class
function sodaPop() {
  // initialize coordinates
  this.posX = (150);
  this.posY = sodaY;
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of sodabubble spiral
  // chosen so the sodabubble are uniformly spread out in area
  this.radius = sqrt(random(pow(50,2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = 200 + this.radius * sin(angle);

    // different size sodabubble fall at slightly different y speeds
    this.posY -= pow(this.size, 0.5);

    // delete sodabubble if past end of screen
    if (this.posY > height) {
      let index = sodaBubbles.indexOf(this);
      sodaBubbles.splice(index, 1);
    }
  };

  this.display = function() {
    stroke(255,60);
    noFill();
    ellipse(this.posX, this.posY, this.size);
   };
}
function keyPressed(){
  sip=!sip;
}
function mousePressed(){
  bite=!bite;
}

