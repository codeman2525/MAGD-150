var flipFlopper =false; // default value is false
var deltaMouseX; // default value is 0.0
var deltaMouseY;
var r= 0;
var g = 0;
var b = 0;
var w = 30;
var h = 30;
var x = 10;
var y = 500;
var c = 250
var d = 500;
var e = 100;
var f = 500;
var q = 350;
var s = 500;
var k = 0;
var j = 0;
var l = 500;
var z = 0;
var i = 0;
var t = 500;
var x1 = 500;
var y1 = 500;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255);
  frameRate(5);
}

function draw() {
  // put drawing code here
  background(1);
  
  fill(r, g, b);
  
  w = (w + 1) % (height / 10);
  h = (h + 1) % (height / 10);

  ellipse(mouseX, mouseY, w, h);
  print("(" + mouseX + ", " + mouseY + ")");
  print("Ellipse 1 is "+ y + "pixels from the top.");
  print("The mouse is " + dist(mouseX,mouseY, width/2, height/2)+ " pixels from the middle.");  
  r = (r + 5) % 256;
  g = (g + 1) % 256;
  b = (b + 2) % 256;

  deltaMouseX = mouseX - pmouseX;
  deltaMouseY = mouseY - pmouseY;

 
  var a = random(width);
  var v = random(height);

  ellipse(x,y,20,20);  
  y--;

	if(y<0){
		y=500;
}

  ellipse(a,v,25,25);
  v--;

 	 if(v<0){
  		v=500;
  }
  

  ellipse(c,d,30,30);
  d--;

  	if(d<0){
  		d=500;
  	
  }
  var m = random(width);
  var n = random(height);

  ellipse(m,n, 40,40);

  var o = random(width);
  var p = random(height);

  ellipse(o,p,25,25);

  var e = constrain(mouseX, 50,150);
  ellipse(e,f,15,15);
  	f--;

  var q = map(mouseX,0,width, 300, 400);
  ellipse(q,s,45,45);
  	s--; 
  ellipse(k,j,50,50);
  k++;
  j++;
  if(k>500 || j>500){
  	k=0;
  	j=0;
  }
  ellipse(l,z,25,25);
  l--;
  z++;
  if(l<0 || z>500){
  	l=500;
  	z=0;
  }
  ellipse(i,t, 75,75);
  i++;
  t--;
  if(i>500 || t<0){
  	i=0;
  	t=500;
  }
  ellipse(x1,y1,30,30);
  x1--;
  y1--;
  if(x1<0 || y1<0){
  	x1=500;
  	y1=500;
  }

  ellipse(75, 350, 40);

  ellipse(250, 290, 15);

  ellipse(400, 390, 35);

  ellipse(366, 480, 20);

  ellipse(29, 346, 35);

  ellipse(30, 490, 20);

  ellipse(50, 469, 35);

  ellipse(490, 245, 25);

  ellipse(250, 449, 20);

  ellipse(90, 470, 30);

  
  ellipse(100, 170, 40);

  ellipse(10, 100, 15);

  ellipse(210, 230, 35);

  ellipse(340, 200, 20);

  ellipse(29, 150, 35);

  ellipse(30, 45, 20);

  ellipse(50, 90, 35);

  ellipse(490, 130, 25);

  ellipse(250, 235, 20);

  ellipse(90, 270, 30);


  ellipse(230, 170, 40);

  ellipse(300, 100, 100);

  ellipse(400, 80, 35);

  ellipse(140, 400, 20);

  ellipse(470, 450, 35);

  ellipse(230, 320, 20);


  ellipse(220, 50, 50);

  ellipse(195, 45, 25);
  
  ellipse(353,321, 90);
  
}