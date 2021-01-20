var star = [];

var player;
var bullets = [];
var alien;
var alienField;

var restartButton;
var imgAlien;


function setup() {
  createCanvas(700, 800);
  
  imgAlien = loadImage('inv.png');
  
  player = new Player();
  alien = new Alien(width/2,height/4,50,imgAlien);
  alienField = new AlienField( imgAlien);
  alienField.init();
  
  for( var i =0;i<200;i++){
   star[i] = new Star(random(700),random(800)); 
  }
  
  
    restartButton = createButton('Restart');
    restartButton.size(100, 50);
    restartButton.position(width/2- 50, height/2+width/10);
    restartButton.mouseClicked(restart);
    restartButton.hide();
    
}


function draw() {
  background(0);
  if(!player.gameOver){
    for( var i =0;i<150;i++){
       star[i].update();
       star[i].show();
    }
    for(var i = bullets.length-1; i >= 0; i--) {
              bullets[i].update();
              bullets[i].render();
              if(bullets[i].despawn()) {
                  bullets.splice(i, 1);
              }
          }
    alienField.render();
    alienField.alienShoot(bullets);
    player.render();
    player.update();
    player.hit(bullets);
    restartButton.hide();
  }
  else{
    textSize(width/10);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over!", width/2, height/2-width/10);
    text("Score: " + player.score, width/2, height/2);
    restartButton.show();
  }
}
function keyPressed() {
    switch(key) {
        case 'a':
        case 'A':
            player.moveLeft = true;
            break;
        case 'd':
        case 'D':
            player.moveRight = true;
            break;
        case ' ':
            bullets.push(player.shoot());
            break;
    }
}
function keyReleased() {
    switch(key) {
        case 'a':
        case 'A':
            player.moveLeft = false;
            break;
        case 'd':
        case 'D':
            player.moveRight = false;
            break;
    }
}
