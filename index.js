// all code is from: this developer: chris courses: link to video: https://www.youtube.com/watch?v=vyqbNFMDRGQ&list=PLpPnRKq7eNW16Wq1GQjQjpTo_E0taH0La&index=6
//step 1: project setup start 
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//width and height of canvas
canvas.width = 1024
//canvas.height = 576
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
        y: -4650,
    },
    imageSrc: './res/map/townMapImage.png'
    
})

const backgroundLights= new Sprite({
    position: {
        x: 0,
        y: -4650,
    },
    imageSrc: './res/map/townMapLightImage.png'
    
})

const boundariesMap = []
for(let i = 0; i < town_collisions.length; i += 270){
    boundariesMap.push(town_collisions.slice(i, 270 + i))
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
                        y: i * Boundary.height - 4650
                    }
                })
            )
        }
            
    })
})

const boundariesMap2 = []
for(let i = 0; i < town_y_collisions.length; i += 270){
    boundariesMap2.push(town_y_collisions.slice(i, 270 + i))
}
const boundaries2 = []
boundariesMap2.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 2524){
            
            boundaries2.push(
                new Boundary({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary.width,
                        y: i * Boundary.height - 4650
                    }
                })
            )
        }
            
    })
})

const boundariesRoofMap = []
for(let i = 0; i < town_roof_collisions.length; i += 270){
    boundariesRoofMap.push(town_roof_collisions.slice(i, 270 + i))
}

const boundariesRoof = []
boundariesRoofMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 2524){
            
            boundariesRoof.push(
                new Boundary({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary.width,
                        y: i * Boundary.height - 4650
                    }
                })
            )
        }
            
    })
})
console.log(boundariesRoof)
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
    // 500
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

const enemyArea = new BoundaryArea({
    position: {
        x: 170,
        y: 300
    }

})

const enemyFightingArea = new BoundaryFightingArea({
    position: {
        x: 170,
        y: 300
    }

})

const enemyArea2 = new BoundaryArea({
    position: {
        x: 370,
        y: 300
    }

})

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


const startingPoint = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})



const enemy2 = new Fighter({
    position: {
        x: 600,
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


const startingPoint2 = new Boundary({
    position: {
        x: 600,
        y: 400
    }
})





//draws enemy
enemy.draw()



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
let jumpsMax = 5.1
// 5.1
let jumpsEnemy = 0
let jumpsMaxEnemy = 10
let time = 0 
let timeMax = 0
let noLongerFall = true
let attack = false
let ALC = 0
let walkRight = false
let walkLeft = false
let lastKey1 = ''
let ALCAttack = 0
//animation loop 
const movables = [...boundariesRoof, ...boundaries, ...boundaries2, startingPoint, 
    startingPoint2, startingPoint3, startingPoint4, startingPoint5, 
    startingPoint6, startingPoint7,
    enemyFightingArea, enemyFightingArea3, backgroundLights  ]
const enemiesmovables = [enemy, enemy2, enemy4, enemy5, enemy6, enemy7,
    enemyArea6, enemyArea7, enemyArea, enemyArea2, enemyArea5, enemy3, enemyArea3, 
    enemyArea4]
function animate(){
    //player.isAttacking = false
    //this will keep calling the animate function like a for loop/ infite loop until we tell it to stop
    window.requestAnimationFrame(animate)
    let moving = true
    let movingY = true
    let movingEnemy 
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
    enemy2.update()
    enemy3.update()
    enemy4.update()
    enemy5.update()
    enemy6.update()
    enemy7.update()
    backgroundLights.draw()
   // testBoundary.draw()
   startingPoint.draw()
   startingPoint2.draw()
   startingPoint3.draw()
   startingPoint4.draw()
   startingPoint5.draw()
   startingPoint6.draw()
   startingPoint7.draw()
   enemyArea3.draw()
   enemyArea5.draw()
   enemyArea6.draw()
   enemyArea7.draw()
   //enemyFightingArea3.draw()
   
   console.log(enemy6.position.y)
    boundaries.forEach((boundary) => {
        boundary.draw()
    })

    boundariesRoof.forEach((boundary) => {
        boundary.draw()
    })

    boundaries2.forEach((boundary) => {
        boundary.draw()
    })

    
    
    //enemyArea.draw()
   // enemyArea2.draw()
    // player movement
    player.velocity.x = 0
    //enemyFightingArea.draw()
    

    
    // this will change the direction of the attack box for player
    //for enemy collision for walls
    
   

    //for player collision for ceiling
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
            //console.log(player.velocity.x)
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
           
            console.log('teammate')
           jumps = 0
           //console.log('okay')
            player.velocity.y +=  5
            //  player.position.y -= 4
            //movingY = false
            keys.w.pressed == false
            
            //moving = false
            
        }
    }

    for (let i = 0; i < boundariesRoof.length; i++){
        const boundary = boundariesRoof[i]
        if(rechtangularCollision3({
            rectangle1: player,
            //makes a clone of the boundary object 
            rectangle2: {
                ...boundary
               
            },
            posY: 0
        })){
            
            jumps = jumpsMax
            player.velocity.y =  0
            movingY = false
            keys.w.pressed == false
        }
                
            
    }

    // player movement and wall collisions
    if (keys.a.pressed && player.lastKey == 'a' && moving == true){
        
        if(rechtangularCollision2({
            rectangle1: player,
            rectangle2: enemy,
            posX: 20,
            posY: 0
        })){
    
            console.log('collide')
            //player.velocity.x =  +6
            moving = false
        }else if(
            rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemy,
                posX: 20,
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
            posX: -20,
            posY: 0
        })){
    
            console.log('collffffide')
            //player.velocity.x =  -6
           moving = false
        }else if(
            rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemy,
                posX: -20,
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
        
        console.log(player.lastKey)
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
    
    // camera movement for player
    if(keys.d.pressed && player.position.x > 600){
      //  console.log('player is moving')
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
            enemiesmovables.forEach((movables) =>{
                movables.position.x -= 5
            })
            
            // enemy.position.x -= 5
            // enemy2.position.x -= 5
            
            // enemyArea.position.x -= 5
            // enemyArea2.position.x -= 5
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
            
            enemiesmovables.forEach((movables) =>{
                movables.position.x += 5
            })
            
            // enemy.position.x -= 5
            // enemy2.position.x -= 5
            
            // enemyArea.position.x -= 5
            // enemyArea2.position.x -= 5
            
            shop.position.x += 5 
            
            background_houses.position.x += 5 
            movables.forEach((movable) => {
                        
                movable.position.x += 5
                
            })   
        }
        
    }
    

    // changing sprites when jumping and falling for player
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
    

    // player ceiling collisions
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
                
                console.log('standing on block')
                
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
            enemiesmovables.forEach((movables) =>{
                movables.position.y -= 10
            })
            // enemy.position.y -= 10
            // enemy2.position.y -= 10
            // enemyArea.position.y -= 10
            // enemyArea2.position.y -= 10
            shop.position.y -= 10
            background_houses.position.y -= 10
            movables.forEach((movable) => {
                        
                movable.position.y -=10
                
            }) 
        }
        if(player.lastKey == 'a'){
            player.switchSprite('fallLeft')
            player.velocity.y = 0
            enemiesmovables.forEach((movables) =>{
                movables.position.y -= 10
            })
            // enemy.position.y -= 10
            // enemy2.position.y -= 10
            // enemyArea.position.y -= 10
            // enemyArea2.position.y -= 10
            shop.position.y -= 10
            background_houses.position.y -= 10
            movables.forEach((movable) => {
                        
                movable.position.y -=10
                
            }) 
        } 
    }
    // player ceiling collisions
    if(keys.w.pressed == true && jumps > 0){
        jumps = jumps - 1
        player.velocity.y = -10
        //console.log('jump')
       // console.log(jumps)
        enemiesmovables.forEach((movables) =>{
            movables.position.y += 10
        })
        
            //enemy.position.y += 10
            shop.position.y += 10
            //enemyArea.position.y += 10
           // enemy2.position.y += 10
           // enemyArea2.position.y += 10
            background_houses.position.y += 10
            movables.forEach((movable) => {
                        
                movable.position.y +=10
                
            }) 
    }else if(keys.w.pressed == true && numOfPressed > 3){
        numOfPressed = 0
        //console.log(numOfPressed)
    }

    // if(keys.ArrowUp.pressed == true && jumpsEnemy > 0){
    //     jumpsEnemy = jumpsEnemy - 1
    //     enemy.velocity.y = -10

    // }
   
    if(player.lastKey == 'a' && player.isAttacking == true){
        
        player.attackBox.offset.x = -80
    }else if(player.lastKey == 'd' && player.isAttacking == true){
        
        player.attackBox.offset.x = 20
    }

    

    // all the enemy stfff
    collisionEnemies(boundaries2, enemy)
    collisionEnemies(boundaries2, enemy2)
    collisionEnemies(boundariesRoof, enemy3)
    collisionEnemies(boundariesRoof, enemy4)
    collisionEnemies(boundariesRoof, enemy5)
    collisionEnemies(boundariesRoof, enemy6)
    collisionEnemies(boundariesRoof, enemy7)
    // use this for when you collide with something above the enemy's head
    collisionY(player, enemy)
    collisionY(player, enemy2)
    collisionY(player, enemy3)
    collisionY(player, enemy4)
    collisionY(player, enemy5)
    collisionY(player, enemy6)
    collisionY(player, enemy7)
    // death function 
   
    enemyDeath(enemy, startingPoint, enemyArea)
    enemyDeath(enemy2, startingPoint2, enemyArea2)
    enemyDeath(enemy3, startingPoint3, enemyArea3)
    enemyDeath(enemy4, startingPoint4, enemyArea4)
    enemyDeath(enemy5, startingPoint5, enemyArea5)
    enemyDeath(enemy6, startingPoint6, enemyArea6)
    enemyDeath(enemy6, startingPoint6, enemyArea6)
    // enemyAI function 
    enemyAI(player, enemy, startingPoint, enemyArea)
    enemyAI(player, enemy2, startingPoint2, enemyArea2)
    enemyAI(player, enemy3, startingPoint3, enemyArea3)
    enemyAI(player, enemy4, startingPoint4, enemyArea4)
    enemyAI(player, enemy5, startingPoint5, enemyArea5)
    enemyAI(player, enemy6, startingPoint6, enemyArea6)
    enemyAI(player, enemy7, startingPoint7, enemyArea7)

    if(player.health <= 0){
        player.switchSprite('death')
    }

    //detect for collision for player also this is where you can change sprites for being hit 
    playerAttack(player, enemy)
    playerAttack(player, enemy2)
    playerAttack(player, enemy3)
    playerAttack(player, enemy4)
    playerAttack(player, enemy5)
    playerAttack(player, enemy6)

    if(enemy.isAttacking && enemy.frameCurrent == 0){
        enemy.isAttacking = false
    }

    if(enemy2.isAttacking && enemy2.frameCurrent == 0){
        enemy2.isAttacking = false
    }
    if(enemy3.isAttacking && enemy3.frameCurrent == 0){
        enemy3.isAttacking = false
    }

    //end game based on health
    if(enemy.health <= 0 || player.health <= 0){
        determineWinnder({player, enemy, timerId})
    }


   
}

animate()







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

function playerAttack(player, enemy){
    if( rechtangularCollision({
        rectangle1: player,
        rectangle2: enemy
    }) && 
    player.isAttacking 
    
    ){
        
       // enemy.takeHit()
        // find a way to switch back to the sprite
           
            
            enemy.takeHit(20, '', true)
            player.isAttacking = false  
        // }, 8000)
        
        
        //this is a clue on how to store js info into html into python into sql
        
        document.querySelector('#enemyHealth').style.width = enemy.health + '%'
        //console.log('go')
    }
}

function enemyDeath(enemy, startingPoint, enemyArea){
    if(enemy.dead && enemy.image == enemy.sprites.death.image && enemy.frameCurrent ==  enemy.sprites.death.fm - 1)
    {
        
        enemy.attackBox.position.x = 1000
        enemy.velocity.x = 1000
        enemyArea.position.x = 1000
        enemy.position.x = 1000
        startingPoint.position.x = 1000
    }
    if(enemy.health <= 0){
        enemy.switchSprite('death')
        enemy.position.x = enemy.position.x
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
                posX: 0,
                posY: -15
            })
        ){
            //noLongerFall = false
           //console.log(player.position.y)
            
            //console.log('standing on block')
            jumpsEnemy = jumpsMaxEnemy
            enemy.velocity.y =  0
            enemy2.velocity.y =  0
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

function enemyAI(player, enemy, startingPoint, enemyArea){

    
    const angle = Math.atan2(enemy.position.y - player.position.y, enemy.position.x - player.position.x )
    const angleStartingpoint = Math.atan2(startingPoint.position.y - enemy.position.y, startingPoint.position.x - enemy.position.x )
    enemy.velocity.x = 0

    if(enemy.dead == false && enemy.image != enemy.sprites.death.image ){
        
            if(rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemyArea,
                posX: 0,
                posY: 0
            })){
               
                
                //console.log('you are in')
               // console.log(angle)
                if(rechtangularCollision2({
                    rectangle1: player,
                    rectangle2: enemy,
                    posX: 30,
                    posY: 0
                }) == true 
                || 
                rechtangularCollision2({
                    rectangle1: player,
                    rectangle2: enemy,
                    posX: -30,
                    posY: 0
                }) == true ){
                    
                    if(rechtangularCollision2({
                        rectangle1: player,
                        rectangle2: enemy,
                        posX: -10,
                        posY: 0
                    })){
                        enemy.attackBox.position.x += 1
                        enemy.velocity.x += 1
                        //enemyArea.position.x += 1
                    }
                    if(rechtangularCollision2({
                        rectangle1: player,
                        rectangle2: enemy,
                        posX: 10,
                        posY: 0
                    })){
                        enemy.attackBox.position.x -= 1
                        enemy.velocity.x -= 1
                        //enemyArea.position.x -= 1
                    }
                    
                   // console.log(ALCAttack)
                   if(angle *(180/Math.PI) > 90 && angle *(180/Math.PI) <= 180 || angle *(180/Math.PI) < -90 && angle *(180/Math.PI) >= -180 ){
                        ALCAttack += 1
                        
                        if(ALCAttack == 50) {
                            
                            
                            enemy.attack(lastKey1, true, false, false, true)
                            player.takeHit(20)
                            document.querySelector('#playerHealth').style.width = player.health + '%'
                            ALCAttack = 0
                        }else{
                            enemy.switchSprite('idle')
                        }
                    }
        
                    if(angle *(180/Math.PI) >= 0 && angle *(180/Math.PI) < 90 ||  angle *(180/Math.PI) <= 0 && angle *(180/Math.PI) > -90){
                        ALCAttack += 1
                        if(ALCAttack == 50) {
                            
                            
                            enemy.attack(lastKey1, false, true, false, true)
                            player.takeHit(20)
                            document.querySelector('#playerHealth').style.width = player.health + '%'
                            ALCAttack = 0
                        }else{
                            enemy.switchSprite('idleLeft')
                        }
                    }
                }else{
                      // if(enemy.dead == true) {return}
                        
                        
                       // console.log(ALCAttack)
        
                       
                       
                       if(angle *(180/Math.PI) >= 0 && angle *(180/Math.PI) < 90 ||  angle *(180/Math.PI) <= 0 && angle *(180/Math.PI) > -90){
                            enemy.switchSprite('runLeft')
                            enemy.attackBox.position.x -= 3
                            enemy.velocity.x -= 3
                           // enemyArea.position.x -= 3
                       }
                       if(angle *(180/Math.PI) > 90 && angle *(180/Math.PI) <= 180 || angle *(180/Math.PI) < -90 && angle *(180/Math.PI) >= -180 ){
                            enemy.switchSprite('runRight')
                            enemy.attackBox.position.x += 3
                            enemy.velocity.x += 3
                           // enemyArea.position.x += 3
                        
                        }
                   
                    
                    
                }
        
                
                
                
                
            }else if (rechtangularCollision2({
                rectangle1: enemy,
                rectangle2: startingPoint,
                posX: 0,
                posY: 0
            }) == false &&
            rechtangularCollision2({
                rectangle1: player,
                rectangle2: enemyArea,
                posX: 0,
                posY: 0
            }) == false){
                
                if(angleStartingpoint *(180/Math.PI) >= 0 && angleStartingpoint *(180/Math.PI) < 90 ||  angleStartingpoint *(180/Math.PI) <= 0 && angleStartingpoint *(180/Math.PI) > -90){
                   
                    enemy.switchSprite('runRight')
                    enemy.attackBox.position.x -= angleStartingpoint
                    enemy.position.x -= angleStartingpoint
                
                  //  enemyArea.position.x -= angleStartingpoint
                }
        
                
                if(angleStartingpoint *(180/Math.PI) > 90 && angleStartingpoint *(180/Math.PI) <= 180 || angleStartingpoint *(180/Math.PI) < -90 && angleStartingpoint *(180/Math.PI) >= -180 ){
                    enemy.switchSprite('runLeft')
                    enemy.attackBox.position.x += -angleStartingpoint
                    enemy.position.x += -angleStartingpoint
                
                   // enemyArea.position.x += -angleStartingpoint
                }
                
            }else{
                
                enemy.switchSprite('idleLeft')
                // for the creator walking 
                // console.log('lets')
                // enemy.switchSprite('idleLeft')
                ALC += 1
                if(ALC <= 100){
                   
                    
                    enemy.switchSprite('idleLeft')
                    
                }else if(ALC > 200 && ALC < 300){
                   enemy.switchSprite('idle')
                    
                }else if(ALC == 300){
                    ALC = 0
                }
                
                
                
            }
        
    }
}

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
                player.attack(player.lastKey, false, false, true, false)
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
                enemy.attack(lastKey1)
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