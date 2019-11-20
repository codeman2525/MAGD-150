var pointX, pointY;
ellipseButtonPressed = false; 
rectButtonPressed = false;
//button coordinates
let bx = 342;
let by = 190;
let bsize = 40;
let x=0;
let y=0;
let x1=325;
let y2 =245;
let size=35;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(1);
}

function draw() {
  pointX = mouseX;
  pointY = mouseY;
  //TV box:
  strokeWeight(7);
  stroke(137, 136, 134);
  line(196, 130, 204, 10);
  line(200, 140, 358, 16);
  strokeWeight(3);
  stroke(186, 184, 180);
  line(191, 130, 199, 10);
  line(195, 140, 353, 16);
  noStroke();
  fill(186, 184, 180);
  ellipse(204, 10, 15, 15);
  ellipse(360, 14, 15, 15);
  fill(137, 136, 134);
  ellipse(207, 10, 15, 15);
  ellipse(362.5, 14, 15, 15);
  strokeWeight(10);
  stroke(63, 36, 10);
  fill(114,65,18);
  rect(5, 130, width - 10, height - 145, 10);
  strokeWeight(4);
  fill(0);
  rect(18, 135, 280, 245, 10);
  strokeWeight(6);
  stroke(168, 164, 159);

  ellipse(bx,by,bsize,bsize);
  rect(x1,y2,size,size);
  push();
    for (var x = 25; x <= (293); x += 10){
    for (var y = 141; y <= (375); y += 10){
      pop();
        if (mousePressed == true && mouseX > x1 && mouseX < x1+size && mouseY > y1 && mouseY < y+size){
        fill(0);
      }
push()
  for (var x = 25; x <= (293); x += 10) { 
    for (var y = 141; y <= (375); y += 10){
      pop();
      if (mousePressed == true && dist(mouseX,mouseY,bx,by)<bsize/2){
    fill(random(0,255)); 
	strokeWeight(0);
    rect(x, y, 36, 36);
  }
 function ellipseButtonPressed =! ellipseButtonPressed;
		}
  function rectButtonPressed =! rectButtonPressed;
	 }
  }
}



