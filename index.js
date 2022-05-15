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

class Sprite {
    //note we cannot pass postion second and velocity first we will get errors so  the postion and velocity as one argument
    constructor({position, velocity, color = 'red', offset}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },

            offset,
            width: 100,
            height: 50
        }
        this.color = color
        this.isAttacking
        this.health = 100
    }

    draw() {
        // makes our rectangle red 
        c.fillStyle = this.color
        //this draws a rectangle onto the screen 
        //this references our player object drawing a rechtangle with the x and y of our player object
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        //attack box is drawn
        if(this.isAttacking){
        c.fillStyle = 'green'
        c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    //this will basically 
    update(){
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x
        //this will move the object by how much we set the velocity for player and enemy on the y axis
        //or that it will have 10 pixels added on to it every frame
        this.position.y += this.velocity.y

        //this basically checks if the player object is going byond the canvas in which it will stop once it reaches the border on the y axis
        if(this.position.y + this.height + this.velocity.y >= canvas.height ){
            this.velocity.y = 0
            // now this will add gravity and will stop if the places try to go out of bounds
        }else this.velocity.y += gravity
    }

    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
}

// this is where we are going to place our character
// also this is an player object
const player = new Sprite({
    // wrapping the x and y with position
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    }
})

//tells javascript to draw the player object
player.draw()

//basically enemeny is equal to new sprite class in
const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: -50,
        y: 0
    },
    color:  'blue'
})

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

function rechtangularCollision({rectangle1, rectangle2}) {
    return(
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x 
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
    )
}

//this determinds the winner
function determineWinnder({player, enemy, timerId}){
    //this will stop the time if one player wins before the time runs out 
    clearTimeout(timerId)
    //this will change the display style back to flex right now its on none 
    document.querySelector('#displayText').style.display = 'flex'
    if(player.health == enemy.health) {
        // this will call the displayText Id and display tie when the timer runss out and both enemy and player have equal health
        document.querySelector('#displayText').innerHTML = 'Tie'
    }else if (player.health > enemy.health){
        // this will call the displayText Id and display tie when the timer runss out and player has more health
        document.querySelector('#displayText').innerHTML = 'Player 1 wins'
    }else if(enemy.health > player.health){
        // this will call the displayText Id and display tie when the timer runss out and enemy has more health
        document.querySelector('#displayText').innerHTML = 'Player 2 wins'
    }
}

// weare createing an infite loop in which setTimeout(decreaseTimer) is looping through each other same as animate loop
let timer = 60
let TimerId
function decreaeTimer(){
    if (timer > 0) {
        timerId = setTimeout(decreaeTimer, 1000)
        timer--
        //this selectes the timer label we have index.html and the innerHTML = timer will take that 10 we have in the div and substract from it 
        document.querySelector('#timer').innerHTML = timer
    }

    //this determines the winner when timer reaches 0
    if(timer == 0){
        //determineWinner Function call
        determineWinnder({player, enemy, timerId})


    }
    
}

decreaeTimer()


//animation loop 
function animate(){

    //this will keep calling the animate function like a for loop/ infite loop until we tell it to stop
    window.requestAnimationFrame(animate)

    //what these two lines do is that they will fill the background black and draw our player enmeny object 
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    
    player.update()
    enemy.update()

    // player movement
    player.velocity.x = 0
    if (keys.a.pressed && player.lastKey == 'a'){
        player.velocity.x = -5
    }else if(keys.d.pressed && player.lastKey == 'd'){
        player.velocity.x = 5
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