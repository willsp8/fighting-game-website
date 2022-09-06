// save for enemies
    for (let i = 0; i < boundariesRoof.length; i++){
        const boundary = boundariesRoof[i]
        if(rechtangularCollision3({
            rectangle1: player,
            //makes a clone of the boundary object 
            rectangle2: {
                ...boundary
               
            }
        }) ){
            console.log('whats up')
           
            player.velocity.y =  0
            
          //  jumps = jumpsMax
        }
    
    }



function collisionEnemies(boundaries2, enemy){
    for (let i = 0; i < boundaries2.length; i++){
        const boundary = boundaries2[i]
        
        if(
            rechtangularCollision2({
                rectangle1: enemy,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary
                   
                },
                posX: -15,
                posY: 0
            })
        ){
            
            
            
        }else if(
            rechtangularCollision2({
                rectangle1: enemy,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary
                   
                },
                posX: 0,
                posY: 15
            })
        ){
            
            
            jumpsEnemy = 0
            console.log('okay enemy')
            enemy.velocity.y +=  5
            //enemy2.velocity.y +=  5
            //  player.position.y -= 4
            //movingY = false
            keys.ArrowUp.pressed == false
            
            //moving = false
            
        }
    }
}