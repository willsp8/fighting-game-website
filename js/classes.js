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
            this.position.y - this.offset.x, 
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

class Fighter extends Sprite{
    //note we cannot pass postion second and velocity first we will get errors so  the postion and velocity as one argument
    constructor({position, velocity, color = 'red', imageSrc, scale = 1, fm = 1, offset= {x: 0, y: 0}, sprites}) {
        super({
            position,
            imageSrc,
            scale,
            fm, 
            offset
        })
        
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
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        console.log(this.sprites)
    }

    

    //this will basically 
    update(){
        this.draw()
        this.animateFrames()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x
        //this will move the object by how much we set the velocity for player and enemy on the y axis
        //or that it will have 10 pixels added on to it every frame
        this.position.y += this.velocity.y

        //this basically checks if the player object is going byond the canvas in which it will stop once it reaches the border on the y axis
        if(this.position.y + this.height + this.velocity.y >= canvas.height -50 ){
            this.velocity.y = 0
           // this.position.y = 330
            // now this will add gravity and will stop if the places try to go out of bounds
        }else this.velocity.y += gravity
    }

    attack(){
        this.isAttacking = true
        // if(this.isAttacking == true ){
        //     this.switchSprite('attack1Right')
        // }
        
        setTimeout(() => {
            this.isAttacking = false
        }, 200)
    }

    switchSprite(sprite){
        switch(sprite) {
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.fm = this.sprites.idle.fm
                    this.frameCurrent = 0
                }
            break
            case 'idleLeft':
                if(this.image !== this.position.idleLeft.image){
                    this.image = this.sprites.idleLeft.image
                    this.fm = this.sprites.idleLeft.fm
                    this.frameCurrent = 0
                }
            break
            case 'runRight':
                if(this.image !== this.sprites.runRight.image){
                    this.image = this.sprites.runRight.image
                    this.fm = this.sprites.runRight.fm
                    this.frameCurrent = 0
                }
            break
            case 'jumpright':
                if(this.image !== this.position.jumpright.image){
                    this.image = this.sprites.jumpright.image
                    this.fm = this.sprites.jumpright.fm
                    this.frameCurrent = 0
                }
            break
            case 'jumpLeft':
                if(this.image !== this.position.jumpLeft.image){
                    this.image = this.sprites.jumpLeft.image
                    this.fm = this.sprites.jumpLeft.fm
                    this.frameCurrent = 0
                }
                
            break
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.fm = this.sprites.idle.fm
                    this.frameCurrent = 0
                }
            break
            case 'attack1Right':
                if(this.image !== this.sprites.attack1Right.image){
                    player.image = player.sprites.attack1Right.image
                    player.fm = player.sprites.attack1Right.fm
                    this.frameCurrent = 0
                }
            break
        }
    }
}