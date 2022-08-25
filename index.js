// all code is from: this developer: chris courses: link to video: https://www.youtube.com/watch?v=vyqbNFMDRGQ&list=PLpPnRKq7eNW16Wq1GQjQjpTo_E0taH0La&index=6
//step 1: project setup start 
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//width and height of canvas
canvas.width = 1024
canvas.height = 576

//draws onto canvas: note when you run this by itself you sould see a black screen that is 1024 by 576 pixels
c.fillRect(0, 0, canvas.width, canvas.height)
//step 1: project set up end 
const gravity = 0.7

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './res/middleground.png'
    
})

const background_houses = new Sprite({
    position: {
        x: 0,
        y: -1650,
    },
    imageSrc: './res/map/castle.png'
    
})

const boundariesMap = []
for(let i = 0; i < town_collisions.length; i += 90){
    boundariesMap.push(town_collisions.slice(i, 90 + i))
}
const boundaries = []
boundariesMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 2188){
            
            boundaries.push(
                new Boundary({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary.width,
                        y: i * Boundary.height - 1650
                    }
                })
            )
        }
            
    })
})

const boundariesMap2 = []
for(let i = 0; i < town_y_collisions.length; i += 90){
    boundariesMap2.push(town_y_collisions.slice(i, 90 + i))
}
const boundaries2 = []
boundariesMap2.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 2182){
            
            boundaries2.push(
                new Boundary({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary.width,
                        y: i * Boundary.height - 1650
                    }
                })
            )
        }
            
    })
})


const shop = new Sprite({
    position: {
        x:500,
        y: 130
    },
    imageSrc: './res/shop.png',
    scale: 2.7,
    fm: 6

})

// this is where we are going to place our character
// also this is an player object
const player = new Fighter({
    // wrapping the x and y with position
    position: {
        x: 500,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './res/player/Idle.png',
    fm: 11, 
    scale: 2,

    offset: {
        x: 160,
        y: 110
    },
    sprites: {
        idle:{
            imageSrc:'./res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './res/player/Death.png',
            fm: 11
        }

    },
    attackBox: {
        offset: {
            x: 20,
            y: 0
        },
        width: 100,
        height: 50
    }
})

//tells javascript to draw the player object
player.draw()

//basically enemeny is equal to new sprite class in
const enemy = new Fighter({
    position: {
        x: 400,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './res/player/Death.png',
            fm: 11
        }

    },
    attackBox: {
        offset: {
            x: 20,
            y: 0
        },
        width: 100,
        height: 50
    }
})

const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})



console.log(enemy)

//draws enemy
enemy.draw()


console.log(player)

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }, 
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }, 
    w: {
        pressed: false
    }, 
    ArrowUp: {
        pressed: false
    },
}



decreaeTimer()
let numOfPressed = 0
let jumps = 0
let jumpsMax = 10
let jumpsEnemy = 0
let jumpsMaxEnemy = 10
let time = 0 
let timeMax = 0
let noLongerFall = true
//animation loop 
const movables = [...boundaries, ...boundaries2 ]
function animate(){
    //player.isAttacking = false
    //this will keep calling the animate function like a for loop/ infite loop until we tell it to stop
    window.requestAnimationFrame(animate)
    let moving = true
    let movingY = true
    let movingEnemy = true
    let movingYEnemy = true
   // let noLongerFall = true
    let noLongerFall = true
    //what these two lines do is that they will fill the background black and draw our player enmeny object 
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    
   // background.update()
    background_houses.update()
   // shop.update()
    player.update()
    enemy.update()
   // testBoundary.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()
    })

    boundaries2.forEach((boundary) => {
        boundary.draw()
    })
    
    // player movement
    player.velocity.x = 0
    
   
    // this will change the direction of the attack box for player
    
    for (let i = 0; i < boundaries2.length; i++){
        const boundary = boundaries2[i]
        
        if(
            rechtangularCollision2({
                rectangle1: enemy,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary
                   
                },
                posX: 0,
                posY: -15
            })
        ){
            //noLongerFall = false
           //console.log(player.position.y)
            
            //console.log('standing on block')
            jumpsEnemy = jumpsMaxEnemy
            enemy.velocity.y =  0
            movingYEnemy = false
            keys.ArrowUp.pressed == false
           // console.log(player.velocity.x)
            //moving = false
            
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
            //console.log('okay enemy')
            enemy.velocity.y +=  5
            //  player.position.y -= 4
            //movingY = false
            keys.ArrowUp.pressed == false
            
            //moving = false
            
        }
    }

    for (let i = 0; i < boundaries2.length; i++){
        const boundary = boundaries2[i]
        
        if(
            rechtangularCollision2({
                rectangle1: player,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary
                   
                },
                posX: 0,
                posY: -15
            })
        ){
            
            jumps = jumpsMax
            player.velocity.y =  0
            movingY = false
            keys.w.pressed == false
            console.log(player.velocity.x)
            //moving = false
            
        }else if(
            rechtangularCollision2({
                rectangle1: player,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary
                   
                },
                posX: 0,
                posY: 15
            })
        ){
           
            console.log(player.velocity.x)
           jumps = 0
           //console.log('okay')
            player.velocity.y +=  5
            //  player.position.y -= 4
            //movingY = false
            keys.w.pressed == false
            
            //moving = false
            
        }
    }

    if (keys.a.pressed && player.lastKey == 'a' && moving == true){
        
        if(rechtangularCollision2({
            rectangle1: player,
            rectangle2: enemy,
            posX: 5,
            posY: 0
        })){
    
            console.log('collide')
            //player.velocity.x =  +6
           // moving = false
        }else if(
            rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemy,
                posX: 5,
                posY: 0
            }) == false 
        ){  
            // player.image = player.sprites.runLeft.image
            // player.fm = player.sprites.runLeft.fm
            player.switchSprite('runLeft')

            player.attackBox.position.x = -10
            player.velocity.x =  -5
            
        }
        
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: player,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary 
                       
                    },
                    posX: 35,
                    posY: 0
                })
            ){
                console.log('nice')
                
                player.velocity.x =  0
                moving = false
                //moving = false
                
            }
        }

        
        
    }else if(keys.d.pressed && player.lastKey == 'd' && moving == true){
        
        if(rechtangularCollision2({
            rectangle1: player,
            rectangle2: enemy,
            posX: -5,
            posY: 0
        })){
    
            console.log('collide')
            //player.velocity.x =  -6
           // moving = false
        }else if(
            rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemy,
                posX: -5,
                posY: 0
            }) == false 
        ){  
            // player.image = player.sprites.runRight.image
            // player.fm = player.sprites.runRight.fm
            //console.log('runright is ')
            player.switchSprite('runRight')
            player.attackBox.position.x = -10
            player.velocity.x = 5
            
        }
        

        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: player,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary
                       
                    },
                    posX: -35,
                    posY: 0
                })
            ){
                noLongerFall = false
                console.log('nice 2')
                player.velocity.x =  0
                
                moving = false
                
            }
        }

        if(moving == true){
            //console.log('runright is ')
            player.switchSprite('runRight')
            player.attackBox.position.x = -10
            player.velocity.x = 5
        }

     }else if(player.lastKey == 'a'  && player.velocity.x == 0 ){
        //console.log('leftside')
        // player.image = player.sprites.idleLeft.image
        // player.fm = player.sprites.idleLeft.fm
        //console.log('left idle')
        player.switchSprite('idleLeft')
    }else if( player.lastKey == 'd' && player.velocity.x == 0 ){
       //console.log('idle right')
       
        player.switchSprite('idle')
        
    }
    
    
    if(keys.d.pressed && player.position.x > 600){
        console.log('player is moving')
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: player,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary 
                       
                    },
                    posX: 35,
                    posY: 0
                })
            ){
                console.log('nice')
                
                player.velocity.x =  0
                moving = false
                //moving = false
                
            }
        }
        // than move the
        if(moving == true){
            player.velocity.x = 0
            
            enemy.position.x -= 5
            
            shop.position.x -= 5 
            background_houses.position.x -= 5 
            movables.forEach((movable) => {
                            
                movable.position.x -= 5
                
            })   
        } 
        
        

    }else if(keys.a.pressed && player.position.x < 300){
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: player,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary 
                       
                    },
                    posX: 35,
                    posY: 0
                })
            ){
                //console.log('nice')
                
                player.velocity.x =  0
                moving = false
                //moving = false
                
            }
        }
        
        if(moving == true){
            player.velocity.x = 0
            
            enemy.position.x += 5
            shop.position.x += 5 
            background_houses.position.x += 5 
            movables.forEach((movable) => {
                        
                movable.position.x += 5
                
            })   
        }
        
    }
    
    if(player.velocity.y < 0 && player.lastKey == 'd' ){
        
        player.switchSprite('jumpRight')       
        noLongerFall = false
    }else if(player.velocity.y > 0 && player.lastKey == 'd' ){
        
        //console.log(player.position.y)
        player.switchSprite('fallRight')
         
    }else if(player.velocity.y < 0 && player.lastKey == 'a' ){
        
        player.switchSprite('jumpLeft')
        
    }else if(player.velocity.y > 0 && player.lastKey == 'a' && noLongerFall == false){
       
        player.switchSprite('fallLeft')
    }
    
    if(player.position.y > 350  && movingY == true){
        //console.log('tea')
        for (let i = 0; i < boundaries2.length; i++){
            const boundary = boundaries2[i]
            
             if(
                rechtangularCollision2({
                    rectangle1: player,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary
                       
                    },
                    posX: 0,
                    posY: 10
                })
            ){
                //noLongerFall = false
               //console.log(player.position.y)
                
                //console.log('standing on block')
                
                jumps = jumps - 1
               console.log('okay')
                player.velocity.y +=  10
                //  player.position.y -= 4
                //movingY = false
                keys.w.pressed == false
                
                //moving = false
                
            }
        }
        if(player.lastKey == 'd'){
            player.switchSprite('fallRight')
            player.velocity.y = 0
            enemy.position.y -= 10
            
            shop.position.y -= 10
            background_houses.position.y -= 10
            movables.forEach((movable) => {
                        
                movable.position.y -=10
                
            }) 
        }
        if(player.lastKey == 'a'){
            player.switchSprite('fallLeft')
            player.velocity.y = 0
            enemy.position.y -= 10
            shop.position.y -= 10
            background_houses.position.y -= 10
            movables.forEach((movable) => {
                        
                movable.position.y -=10
                
            }) 
        } 
    }
    if(keys.w.pressed == true && jumps > 0){
        jumps = jumps - 1
        player.velocity.y = -10
        //console.log('jump')
       // console.log(jumps)
       
            enemy.position.y += 10
            shop.position.y += 10
            background_houses.position.y += 10
            movables.forEach((movable) => {
                        
                movable.position.y +=10
                
            }) 
    }else if(keys.w.pressed == true && numOfPressed > 3){
        numOfPressed = 0
        //console.log(numOfPressed)
    }

    if(keys.ArrowUp.pressed == true && jumpsEnemy > 0){
        jumpsEnemy = jumpsEnemy - 1
        enemy.velocity.y = -10
    }
   
    if(player.lastKey == 'a' && player.isAttacking == true){
        
        player.attackBox.offset.x = -80
    }else if(player.lastKey == 'd' && player.isAttacking == true){
        
        player.attackBox.offset.x = 20
    }

    // this will change the direction of the attack box
    if(enemy.lastKey == 'ArrowLeft' && enemy.isAttacking == true){
        
        enemy.attackBox.offset.x = -80
    }else if(enemy.lastKey == 'ArrowRight' && enemy.isAttacking == true){
        
        enemy.attackBox.offset.x = 20
    }



    // make floor
      
    

    // use this for when you collide with something thats not a player
    if(rechtangularCollision2({
        rectangle1: player,
        rectangle2: enemy,
        posX: 0,
        posY: -7
    })){
       // console.log('doblue')
        // use this for when you collide with something thats not a player
        player.switchSprite('idle')
        player.velocity.y =  0
        //player.switchSprite()
        // use when you collide with a player
    }

    //Enemy movement
    
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft'){
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: enemy,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary
                       
                    },
                    posX: -5,
                    posY: 0
                })
            ){
                //noLongerFall = false
                console.log('nice 2')
                enemy.velocity.x =  0
                
                movingEnemy = false
                
            }
        }

        if(movingEnemy == true){
            
            enemy.switchSprite('runLeft')
            enemy.attackBox.position.x = -10
            enemy.velocity.x = -5
        
        }
        
        
    }else if(keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight'){
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            
            if(
                rechtangularCollision2({
                    rectangle1: enemy,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary
                       
                    },
                    posX: -35,
                    posY: 0
                })
            ){
                //noLongerFall = false
                console.log('nice 2')
                enemy.velocity.x =  0
                
                movingEnemy = false
                
            }
        }

        if(movingEnemy == true){
            
            enemy.switchSprite('runRight')
            enemy.attackBox.position.x = 10
            enemy.velocity.x = 5
        
        }
        
    }else if(enemy.lastKey == 'ArrowLeft' ){
            console.log('leftside')
        // player.image = player.sprites.idleLeft.image
        // player.fm = player.sprites.idleLeft.fm
        enemy.switchSprite('idleLeft')
    }else if( enemy.lastKey == 'ArrowRight' ){
        enemy.switchSprite('idle')
    }


    // enemy jumping 
    if(enemy.velocity.y < 0 && enemy.lastKey == 'ArrowRight'){
        // player.image = player.sprites.jumpright.image
        //player.fm = player.sprites.jumpright.fm
        enemy.switchSprite('jumpRight')
        
       // player.fm = player.sprites.jumpright.fm
    }else if(enemy.velocity.y > 0 && enemy.lastKey == 'ArrowRight'){
        // player.image = player.sprites.fall.image
        // player.fm = player.sprites.fall.fm
        enemy.switchSprite('fallRight')
    }else if(enemy.velocity.y < 0 && enemy.lastKey == 'ArrowLeft'){
        // enemy.image = player.sprites.jumpLeft.image
        // player.fm = player.sprites.jumpLeft.fm
        enemy.switchSprite('jumpLeft')
    }else if(enemy.velocity.y > 0 && enemy.lastKey == 'ArrowLeft'){
        // player.image = player.sprites.fallLeft.image
        // player.fm = player.sprites.fallLeft.fm
        enemy.switchSprite('fallLeft')
    }

    

   // console.log(player.isAttacking)
    //detect for collision for player also this is where you can change sprites for being hit 
    if( rechtangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) && 
        player.isAttacking 
        
        ){
            
           // enemy.takeHit()
            // find a way to switch back to the sprite
               
                
                enemy.takeHit()
                player.isAttacking = false  
            // }, 8000)
            
            
            //this is a clue on how to store js info into html into python into sql
            
            document.querySelector('#enemyHealth').style.width = enemy.health + '%'
            //console.log('go')
    }

    // if(player.isAttacking && player.frameCurrent == 0){
    //     player.isAttacking = false
    // }
    // if player misses 
    
    //detect for collision for enemy
    if(enemy.health <= 0){
        enemy.switchSprite('death')
    }
    if(player.health <= 0){
        player.switchSprite('death')
    }
    if( rechtangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) && 
    enemy.isAttacking
    ){
        player.takeHit()
        enemy.isAttacking = false  
       
        
        document.querySelector('#playerHealth').style.width = player.health + '%' 
        console.log('enemy attack worked')
    }

    if(enemy.isAttacking && enemy.frameCurrent == 0){
        enemy.isAttacking = false
    }

    //end game based on health
    if(enemy.health <= 0 || player.health <= 0){
        determineWinnder({player, enemy, timerId})
    }


    //prints out if the animation loop is working 
    //console.log('go')
}

animate()

//this method will listen to anything that is typed onto the keyboard and mouse
window.addEventListener('keydown', (event) => {
    // this will check we pressed a w s d keys 
    if(!player.dead){
        switch (event.key){
            case 'd':
                //when d is press it will move the player on the x psotion by 1 pixel to the right 
                keys.d.pressed =true
                player.lastKey = 'd'
                break
            case 'a':
                //when a is press it will move the player on the x psotion by 1 pixel to the the left 
                keys.a.pressed =true
                player.lastKey = 'a'
                break
                //this is for jump
            case 'w':
                //when a is press it will move the player on the x psotion by 1 pixel to the the left 
               // numOfPressed = numOfPressed + 1
                keys.w.pressed =true
                //keys.w.pressed == false
    
                break
            case ' ':
                player.attack()
                break
            
        }
    }
    
    if(!enemy.dead){

    
        switch(event.key){
            case 'ArrowRight':
                //when d is press it will move the Enemy on the x psotion by 1 pixel to the right 
                keys.ArrowRight.pressed =true
                enemy.lastKey = 'ArrowRight'
                break
            case 'ArrowLeft':
                //when a is press it will move the player on the x psotion by 1 pixel to the the left 
                keys.ArrowLeft.pressed =true
                enemy.lastKey = 'ArrowLeft'
                break
                //this is for jump
            case 'ArrowUp':
                //when a is press it will move the player on the x psotion by 1 pixel to the the left 
                //enemy.velocity.y = -20
                keys.ArrowUp.pressed = true
                break
            case 'ArrowDown':
                // 
                enemy.attack()
                break
            case 'Shift':
                keys.shift.pressed = true 
                //timespressed = 0
                break
        }
    }
    //console.log(event.key)
})

//this method will listen to anything that is typed and than release or when key is up
window.addEventListener('keyup', (event) => {
    // this will check we pressed a w s d keys 
    switch (event.key){
        case 'd':
            //when d is is up  it will stop the play moving to the right 
            keys.d.pressed = false
            break
        case 'a':
            //when a is is up  it will stop the play moving to the let
            keys.a.pressed = false
            break
        case 'w':
            //when a is is up  it will stop the play moving to the let
            keys.w.pressed = false
            break
        //enemy keys here
        case 'ArrowRight':
            //when d is is up  it will stop the play moving to the right 
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            //when a is is up  it will stop the play moving to the let
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
    }
})