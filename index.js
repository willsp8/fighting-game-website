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
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './res/player/Idle.png',
    fm: 11, 
    scale: 2.5,

    offset: {
        x: 200,
        y: 140
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
        y: 400
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './res/player/Idle.png',
    offset: {
        x: 200,
        y: 150
    },
    color:  'blue',
    fm: 11, 
    scale: 2.5,

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
    }
}



decreaeTimer()

let moving = true
//animation loop 
function animate(){

    //this will keep calling the animate function like a for loop/ infite loop until we tell it to stop
    window.requestAnimationFrame(animate)

    //what these two lines do is that they will fill the background black and draw our player enmeny object 
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    
    background.update()
    shop.update()
    player.update()
    enemy.update()
    //enemy.velocity.y = 0

    // player movement
    player.velocity.x = 0
    // player.image = player.sprites.idle.image
    // player.fm = player.sprites.idle.fm
    // player.switchSprite('idle')
    // if(player.image == player.sprites.attack1Right.image){

    //     return 
    // } 
    // if(player.image == player.sprites.attack1Left.image){

    //     return 
    // } 
    // if(player.isAttacking == true && player.lastKey == 'd'){
    //     console.log('attack right')
    //     player.image = player.sprites.attack1Right.image
    //     player.fm = player.sprites.attack1Right.fm
    //     player.switchSprite('attack1Right')
    // }else if(player.isAttacking == true && player.lastKey == 'a'){
        
    //         console.log('attack left')
    //         // player.image = player.sprites.attack1Left.image
    //         // player.fm = player.sprites.attack1Left.fm
    //         player.switchSprite('attack1Left')
        
    // }
    

    // this will change the direction of the attack box
    if(player.lastKey == 'a' && player.isAttacking == true){
        console.log('mount')
        player.attackBox.offset.x = -80
    }else if(player.lastKey == 'd' && player.isAttacking == true){
        console.log('mount')
        player.attackBox.offset.x = 20
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
            player.switchSprite('runRight')
            player.attackBox.position.x = -10
            player.velocity.x = 5
            
        }
        
     }else if(player.lastKey == 'a' && player.isAttacking == false){
        //console.log('leftside')
        // player.image = player.sprites.idleLeft.image
        // player.fm = player.sprites.idleLeft.fm
        player.switchSprite('idleLeft')
    }else if( player.isAttacking == false){
        player.switchSprite('idle')
    }

    

    if(player.velocity.y < 0 && player.lastKey == 'd'){
        // player.image = player.sprites.jumpright.image
        //player.fm = player.sprites.jumpright.fm
        player.switchSprite('jumpRight')
       // player.fm = player.sprites.jumpright.fm
    }else if(player.velocity.y > 0 && player.lastKey == 'd'){
        // player.image = player.sprites.fall.image
        // player.fm = player.sprites.fall.fm
        player.switchSprite('fallRight')
    }else if(player.velocity.y < 0 && player.lastKey == 'a'){
        // player.image = player.sprites.jumpLeft.image
        // player.fm = player.sprites.jumpLeft.fm
        player.switchSprite('jumpLeft')
    }else if(player.velocity.y > 0 && player.lastKey == 'a'){
        // player.image = player.sprites.fallLeft.image
        // player.fm = player.sprites.fallLeft.fm
        player.switchSprite('fallLeft')
    }


    // use this for when you collide with something thats not a player
    if(rechtangularCollision2({
        rectangle1: player,
        rectangle2: enemy,
        posX: 0,
        posY: -7
    })){
        console.log('doblue')
        // use this for when you collide with something thats not a player
        player.switchSprite('idle')
        player.velocity.y =  0
        //player.switchSprite()
        // use when you collide with a player
    }

    //Enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft'){
        enemy.velocity.x = -5
    }else if(keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight'){
        enemy.velocity.x = 5
    }

    

    //detect for collision for player 
    if( rechtangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) && 
        player.isAttacking
        ){
            player.isAttacking = false 
            //this is a clue on how to store js info into html into python into sql
            enemy.health -= 20
            document.querySelector('#enemyHealth').style.width = enemy.health + '%'
            console.log('go')
    }

    // if player misses 
    if(player.isAttacking && player.frameCurrent == 4){
        player.isAttacking = false
    }
    //detect for collision for enemy
    if( rechtangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) && 
    enemy.isAttacking
    ){
        enemy.isAttacking = false  
        player.health -= 20
        document.querySelector('#playerHealth').style.width = player.health + '%' 
        console.log('enemy attack worked')
    }

    if(enemy.isAttacking && enemy.frameCurrent == 4){
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
            player.velocity.y = -20
            break
        case ' ':
            player.attack()
            break
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
            enemy.velocity.y = -20
            break
        case 'ArrowDown':
            // 
            enemy.isAttacking = true
            break
        case 'Shift':
            keys.shift.pressed = true 
            //timespressed = 0
            break
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

        //enemy keys here
        case 'ArrowRight':
            //when d is is up  it will stop the play moving to the right 
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            //when a is is up  it will stop the play moving to the let
            keys.ArrowLeft.pressed = false
            break
        
    }
})