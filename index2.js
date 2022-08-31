function collisionY(player, enemy){
    if(rechtangularCollision2({
        rectangle1: player,
        rectangle2: enemy,
        posX: 0,
        posY: -40
    })){
        // use this for when you collide with something thats not a player
        player.switchSprite('idle')
       // player.velocity.y =  0
        if(player.lastKey == 'd'){
            player.velocity.x =  12
        }else if(player.lastKey == 'a'){
            player.velocity.x =  -12
        }
    }
}