var len =200;
var tree = [];
var leaves =[];
var c;
var count = 0;

function setup(){
  createCanvas(800,800);
  var c=round(random(1,255))
  
  var a = createVector(width/2,height);
  var b = createVector(width/2, height-len);
  var root = new Branch(a,b);

  tree[0] = root;
 
  }
  
function mousePressed(){
    for( var i=tree.length-1; i>=0; i--){
      if(!tree[i].finished){
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
    }
      tree[i].finished=true;
    }
    count++;

    if(count == 10){
      for(var j =0; j < tree.lenght; j++){
        if(!tree[j].finished){
          var leaves = tree[j].end.copy();
          leaves.push(leaves);
        }

      }
    }
  }


function draw(){
   background(51);

for(var i = 0; i < tree.length; i++){
   tree[i].show();
  tree[i].sprout();
 }

 for(var k = 0; k < leaves.length; k++){
   fill(c,c,c,c);
   noStroke();
   ellipse(leaves[k].x, leaves[k].y, 8,8);
   leaves[k].y += round(random(0,2));
 }
}
  
 class Branch{

  constructor(begin,end){
  this.begin = begin;
  this.end = end; 
  this.finished= false;
}
show(){
  stroke(255);
  line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  branchA(){
    this.finished=true;
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI/4);
    dir.mult(0.61);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }

  branchB(){

    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI/4);
    dir.mult(0.61);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
    }
   
   sprout(){
     var dir = p5.Vector.sub(this.end, this.begin);
    fill(0,255,0);
     noStroke();
    ellipse(this.end.x, this.end.y, 8,8);
    ellipse((this.end.x-3), (this.end.y+3),8,8);
    ellipse((this.end.x+3), (this.end.y+3),8,8);
   }
  }
