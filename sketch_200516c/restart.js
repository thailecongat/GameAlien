function restart() {
    player.reset();
    alienField.reset(width/2, height/4, invaderRows, invaderCols, invaderSprite);
    
    for(var i = 0; i < shieldNum; i++) {
        shields[i].reset();
    }
    restartButton.hide();
    bullets = [];
}
