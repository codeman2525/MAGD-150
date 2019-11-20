var projectile;
var projectileX, projectileY;
var theta = 0.0;
var tankX, tankY;
var alienX, alienY; 
//delares all the varables used 
function setup() {
  createCanvas(400, 400);
  projectileX= 300;
  projectileY=350;
  projectile=false;
  tankX=285;
  tankY=350;
  alienX=width/2;
  alienY=height-350;
  //intializes the varables 
}

function draw() {
  background(0);

  drawAlien();//calling my draw alien function
alienX=alienX+random(-10,10);
if(alienX > 400){
  alienX=25;
}else if(alienX<0){
  alienX=375;//conditinal that randomizes the x vaules while keeping it in the window 

}
  
 if(projectile){// continal boolean that only calls my drawProjectile function if CONTROL is pressed acts as toggle
   drawProjectile();
 }
  
  
  projectileY -=10;//sets the speed and rotation of projectile 
  theta += 0.1;
  
  
  if (projectileY<=-5){
    projectileY=-15;
  }
 
  drawTank(tankX, tankY);// calls the drawTank function
 
}


function drawTank(x,y){// the tank function 
  
  push();
  fill(0,255,0);
  noStroke();
  rect( x, y, 25, 25);
  rect(x-25, y+25, 75, 25);
  pop();
}

function keyPressed(){// function that allows tank movement and firing of projectile
  
  switch(keyCode){
      
    case LEFT_ARROW:
      tankX -=10;
      projectileX-=10;
      break;
      
      case RIGHT_ARROW:
      tankX +=10;
      projectileX+=10;
      break;
      
      case CONTROL:
      projectile = !projectile;
      projectileY= 350;
      break;
  }

  
  
}
   
function drawProjectile(){// projectile function
    
 push();
  translate(projectileX, projectileY);
  rotate(theta);
  fill(255);
  rect(0,0,10,10);
  pop();
}
  function drawAlien(){// alien function
    push();
    noStroke();
    fill(255,0,0);
    rect(alienX,alienY,50,50);
    rect(alienX+50,alienY-25,25,25);
    rect(alienX-25,alienY-25,25,25);
    rect(alienX+50,alienY+50,25,25);
    rect(alienX-25,alienY+50,25,25);
    pop();

  } 


