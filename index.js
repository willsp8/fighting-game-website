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
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        // makes our rectangle red 
        c.fillStyle = 'red'
        //this draws a rectangle onto the screen 
        //this references our player object drawing a rechtangle with the x and y of our player object
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    //this will basically 
    update(){
        this.draw()

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
    }
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
    }
    console.log(event.key)
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