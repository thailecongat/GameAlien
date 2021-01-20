function Star(x,y){
  this.x = x;
  this.y = y;
  var speed = random(2,3);
  var size = random(4,6);
  this.update = function(){
    y = y + speed;
    if(y>height){
       y = 0;
    }
  }
  this.show =  function(){
    fill(random(100,200));
    ellipse(x,y,size,size);
    noStroke();
  }
}
