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
          //  player.velocity.y = -20
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