const keys1 = {
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


class Sprite {
    //note we cannot pass postion second and velocity first we will get errors so  the postion and velocity as one argument
    constructor({position, velocity, imageSrc, scale = 1, fm = 1, offset= {x: 0, y: 0}}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.fm  = fm 
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.offset = offset
        
        
       
    }

    draw() {
        // note the first foru arugments after this.image is a way to crop the image for animaitons 
        // so 0 is where i x starts and the other 0 is where our y starts
        // so instead of getting the entire width we do this in order to get the width of one frame 
        //note make another y frame varible to go the the next frame 
        c.drawImage(
            this.image, 
            this.frameCurrent * this.image.width / this.fm,
            0,
            this.image.width / this.fm,
            this.image.height,
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.fm) * this.scale, 
            this.image.height * this.scale)
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.framesHold == 0){
            if(this.frameCurrent < this.fm - 1){
                this.frameCurrent++
            }else{
                this.frameCurrent = 0
            }
        }
    }

    //this will basically 
    update(){
        this.draw()
        this.animateFrames()
        
    }

    
}
let timers = 0
class Fighter extends Sprite{
    //note we cannot pass postion second and velocity first we will get errors so  the postion and velocity as one argument
    constructor({position, velocity, color = 'red', imageSrc, scale = 1, fm = 1, offset= {x: 0, y: 0}, sprites,
                 attackBox = {offset: {}, width: undefined, height: undefined}}) {
        super({
            position,
            imageSrc,
            scale,
            fm, 
            offset
        })
        
        this.velocity = velocity
        this.width = 50
        this.height = 120
        this.lastKey
        
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },

            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites
        this.dead = false

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        //console.log(this.sprites)
    }

    

    //this will basically 
    update(){
        this.draw()
        if(!this.dead){
            this.animateFrames()
        }
        
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        //collision box of the attack weapon
        // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, 
        //     this.attackBox.width, this.attackBox.height)
        // //collision box of the player
        // c.fillRect(this.position.x, this.position.y, 
        //     this.width, this.height)
        this.position.x += this.velocity.x
        //this will move the object by how much we set the velocity for player and enemy on the y axis
        //or that it will have 10 pixels added on to it every frame
        this.position.y += this.velocity.y

        //this basically checks if the player object is going byond the canvas in which it will stop once it reaches the border on the y axis
        
///important super important
        // if(this.position.y + this.height + this.velocity.y >= canvas.height -50 ){
        //     this.velocity.y = 0
        // this.position.y = 375
        //    // this.position.y = 330
        //     // now this will add gravity and will stop if the places try to go out of bounds
        // }else{
        //     this.velocity.y += gravity  
        // } 

        this.velocity.y += gravity
        //console.log(this.position.y)
    }

    attack(lastKey, R, L, P, E){
       
        if(R == true && E == true){
            this.switchSprite('attack1Right') 
        }else if(L == true && E == true){
            console.log('switch')
            this.switchSprite('attack1Left') 
        }
        if(lastKey == 'd' && P == true){
            this.switchSprite('attack1Right') 
        }else if(lastKey == 'a' && P == true){
            this.switchSprite('attack1Left') 
        }
        // console.log(angle)
        // if(angle < 1.5 && angle > -1.5  ){
        //     console.log('pop left ')
        //     this.switchSprite('attack1Left') 
        // }else if(angle > 1.5 && angle < 3.4 ){
        //     console.log('pop right ')
        //     this.switchSprite('attack1rRight') 
        // }
        
        this.isAttacking = true
    
        timers = 0
        setTimeout(() => {
            
            this.isAttacking = false
        }, 500)

    }

    takeHit(damage, lastKey1){
        
        this.health -= damage
        
        console.log(this.health)
        if(this.health <= 0 ){
            this.position.x = this.position.x
            this.switchSprite('death') 
            console.log('help')
           // this.switchSprite('death')
        }else{
            if(this.lastKey == 'd' || lastKey1 == 'ArrowRight'){
                console.log('old')
                this.switchSprite('takeHitLeft') 
            }
            if(this.lastKey == 'a' || lastKey1 == 'ArrowLeft'){
                console.log('old2')
                
                this.switchSprite('takeHitRight')
            }
        }
        
        
    }
    
    switchSprite(sprite){
        
        if(this.image == this.sprites.death.image){
            
            if(this.frameCurrent === this.sprites.death.fm - 1){
                this.dead = true
            }
            
            return
        }
        // overriding 
        if(this.image == this.sprites.attack1Right.image && this.frameCurrent < this.sprites.attack1Right.fm - 1){ console.log('whats'); return}
        if(this.image == this.sprites.attack1Left.image && this.frameCurrent < this.sprites.attack1Left.fm - 1)return

        // override when fighter gets hit 
       
        if(this.image == this.sprites.takeHitRight.image && timers < 20){ 
            console.log('my goodness')
           // console.log(timers)
            timers += 1 
            return}

        if(this.image == this.sprites.takeHitLeft.image && timers < 20){ 
            console.log('my goodness')
            console.log(timers)
            timers += 1 
            return}    
        //timers = 
        switch(sprite) {
            case 'idle':
                if(this.image !== this.sprites.idle.image)
                    
                    this.image = this.sprites.idle.image
                   // console.log(this.sprites.idle.fm)
                    this.fm = this.sprites.idle.fm
                    //this.frameCurrent = 0
                
            break
            case 'idleLeft':
                if(this.image !== this.sprites.idleLeft.image){
                    this.image = this.sprites.idleLeft.image
                    this.fm = this.sprites.idleLeft.fm
                    this.frameCurrent = 0
                }
            break
            case 'runLeft':
                if(this.image !== this.sprites.runLeft.image){
                    this.image = this.sprites.runLeft.image
                    this.fm = this.sprites.runLeft.fm
                    this.frameCurrent = 0
                }
            break
            case 'runRight':
                if(this.image !== this.sprites.runRight.image){
                    this.image = this.sprites.runRight.image
                    console.log(this.sprites.runRight.fm)
                    this.fm = this.sprites.runRight.fm
                    this.frameCurrent = 0
                }
            break
            case 'jumpRight':
                if(this.image !== this.sprites.jumpright.image){
                    this.image = this.sprites.jumpright.image
                    this.fm = this.sprites.jumpright.fm
                    this.frameCurrent = 0
                }
            break
            case 'jumpLeft':
                if(this.image !== this.sprites.jumpLeft.image){
                    this.image = this.sprites.jumpLeft.image
                    this.fm = this.sprites.jumpLeft.fm
                    this.frameCurrent = 0
                }
                
            break
            case 'idleLeft':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.fm = this.sprites.idle.fm
                    this.frameCurrent = 0
                }
            break
            case 'attack1Right':
                if(this.image !== this.sprites.attack1Right.image){
                    this.image = this.sprites.attack1Right.image
                    this.fm = this.sprites.attack1Right.fm
                    this.frameCurrent = 0
                }
            break
            case 'attack1Left':
                if(this.image !== this.sprites.attack1Left.image){
                    this.image = this.sprites.attack1Left.image
                    this.fm = this.sprites.attack1Left.fm
                    this.frameCurrent = 0
                }
            break
            case 'fallRight':
                if(this.image !== this.sprites.fall.image){
                    this.image = this.sprites.fall.image
                    this.fm = this.sprites.fall.fm
                    this.frameCurrent = 0
                }
            break
            case 'fallLeft':
                if(this.image !== this.sprites.fallLeft.image){
                    this.image = this.sprites.fallLeft.image
                    this.fm = this.sprites.fallLeft.fm
                    this.frameCurrent = 0
                }
            break
            case 'takeHitRight':
                if(this.image !== this.sprites.takeHitRight.image){
                    this.image = this.sprites.takeHitRight.image
                    this.fm = this.sprites.takeHitRight.fm
                    this.frameCurrent = 0
                }
            break
            case 'takeHitLeft':
                if(this.image !== this.sprites.takeHitLeft.image){
                    this.image = this.sprites.takeHitLeft.image
                    this.fm = this.sprites.takeHitLeft.fm
                    this.frameCurrent = 0
                }
            break
            case 'death':
                if(this.image !== this.sprites.death.image){
                    
                    this.image = this.sprites.death.image
                    this.fm = this.sprites.death.fm
                    this.frameCurrent = 0
                }
            break
        }
    }
}

class Boundary{
    static width = 32
    static height = 32
    constructor({position}) {
        this.position = position
        this.width = 32
        this.height = 32
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class BoundaryArea{
    static width = 256 * 2
    static height = 256
    constructor({position}) {
        this.position = position
        this.width = 256 * 2
        this.height = 256 
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}




window.addEventListener('keydown', (event) => {
    // this will check we pressed a w s d keys 
    switch (event.key){
        case 'd':
            //when d is press it will move the player on the x psotion by 1 pixel to the right 
            keys1.d.pressed =true
            lastKey = 'd'
            break
        case 'a':
            //when a is press it will move the player on the x psotion by 1 pixel to the the left 
            keys1.a.pressed =true
           lastKey = 'a'
            break
            //this is for jump
        case 'w':
            //when a is press it will move the player on the x psotion by 1 pixel to the the left 
            //player.velocity.y = -20
            break
        case ' ':
           // player.attack()
            break
        case 'ArrowRight':
            //when d is press it will move the Enemy on the x psotion by 1 pixel to the right 
            keys1.ArrowRight.pressed =true
            lastKey1 = 'ArrowRight'
            break
        case 'ArrowLeft':
            //when a is press it will move the player on the x psotion by 1 pixel to the the left 
            keys1.ArrowLeft.pressed =true
            lastKey1 = 'ArrowLeft'
            break
            //this is for jump
        case 'ArrowUp':
            //when a is press it will move the player on the x psotion by 1 pixel to the the left 
            
            break
        case 'ArrowDown':
           // lastKey1 = 'ArrowDown'
            //enemy.isAttacking = true
            break
        case 'Shift':
            keys1.shift.pressed = true 
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
            keys1.d.pressed = false
            break
        case 'a':
            //when a is is up  it will stop the play moving to the let
            keys1.a.pressed = false
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