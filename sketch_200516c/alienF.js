function AlienField( sprite) {
    this.x = width/2;
    this.y = height/4;
    this.rows = 5;
    this.cols = 10;
    
    this.xSpeed = 1;
    this.speedIncrease = 0.05;
    this.alienShootRate = 0.001;
    this.shootRate;
    
    this.aliens;
    this.alienSize = 40;
    this.alienSpacing = 1.3;
    this.ss = this.alienSize * this.alienSpacing;
    this.sprite = sprite;
    
    this.gameOver = false;
    
    this.dead = 0;
    this.win = false;
    
    this.init = function() {
        this.aliens = new Array(this.rows);
    
        for(var r = 0; r < this.rows; r++) {
            this.aliens[r] = new Array(this.cols);
        }
        
        for(var r = 0; r < this.rows; r++) {
            for(var c = 0; c < this.cols; c++) {;
                this.aliens[r][c] = 
                new Alien(this.x-(this.cols*this.ss)/2 + this.ss*c,
                this.y-(this.rows*this.ss)/2 + this.ss*r,
                this.alienSize,
                this.sprite);
            }
        }
        
        this.shootRate = this.alienShootRate/(this.rows*this.cols);
    }
    
    this.render = function() {
        for(var r = 0; r < this.aliens.length; r++) {
            for(var c = 0; c < this.aliens[r].length; c++) {
                this.aliens[r][c].render();
            }
        }
    }
    this.alienShoot = function(bullets) {
        for(var r = 0; r < this.aliens.length; r++) {
            for(var c = 0; c < this.aliens[r].length; c++) {
                if(!this.aliens[r][c].hit) {
                    this.aliens[r][c].shoot(bullets, this.alienShootRate);
                }
            }
        }
    }
    this.reset = function(sprite) {
        this.x = width/2;
        this.y = height/4;
        this.rows = 5;
        this.cols = 10;
        this.xSpeed = 1;
        this.aliens;
        this.alienSize = 30;
        this.sprite = sprite;
        
        this.gameOver = false;
        
        this.dead = 0;
        this.win = false;      
        this.init();
    }
}
