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
const gravity = 0.2

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

//animation loop 
function animate(){
    //this will keep calling the animate function like a for loop/ infite loop until we tell it to stop
    window.requestAnimationFrame(animate)

    //what these two lines do is that they will fill the background black and draw our player enmeny object 
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    
    player.update()
    enemy.update()
    //prints out if the animation loop is working 
    //console.log('go')
}

animate()
