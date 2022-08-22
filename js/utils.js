function rechtangularCollision({rectangle1, rectangle2}) {
    return(
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x 
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
    )
}

function rechtangularCollision2({rectangle1, rectangle2, posX, posY}) {
    return(
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x + posX
        && rectangle1.position.x <= (rectangle2.position.x + posX) + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y + posY
        && rectangle1.position.y <= (rectangle2.position.y + posY) + rectangle2.height
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