const enemy3 = new Fighter({
    position: {
        x: 2400,
        y: -300
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './static/res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./static/res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./static/res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './static/res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './static/res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './static/res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './static/res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './static/res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './static/res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './static/res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './static/res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './static/res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './static/res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './static/res/player/Death.png',
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


const startingPoint3 = new Boundary({
    position: {
        x: 2400,
        y: 0
    }
})

const enemyArea3 = new BoundaryFightingArea2({
    position: {
        x: 2370,
        y: -200
    }

})

const enemyFightingArea3 = new BoundaryFightingArea2({
    position: {
        x: 2370,
        y: -200
    }

})

const enemy4 = new Fighter({
    position: {
        x: 3200,
        y: -300
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './static/res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./static/res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./static/res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './static/res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './static/res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './static/res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './static/res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './static/res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './static/res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './static/res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './static/res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './static/res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './static/res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './static/res/player/Death.png',
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


const startingPoint4 = new Boundary({
    position: {
        x: 3200,
        y: 0
    }
})

const enemyArea4 = new BoundaryFightingArea3({
    position: {
        x: 3170,
        y: -200
    }

})

const enemy5 = new Fighter({
    position: {
        x: 4300,
        y: -400
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './static/res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./static/res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./static/res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './static/res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './static/res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './static/res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './static/res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './static/res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './static/res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './static/res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './static/res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './static/res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './static/res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './static/res/player/Death.png',
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


const startingPoint5 = new Boundary({
    position: {
        x: 4300,
        y: 150
    }
})

const enemyArea5 = new BoundaryFightingArea2({
    position: {
        x: 4200,
        y: -70
    }

})


const enemy6 = new Fighter({
    position: {
        x: 4600,
        y: -400
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './static/res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./static/res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./static/res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './static/res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './static/res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './static/res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './static/res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './static/res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './static/res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './static/res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './static/res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './static/res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './static/res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './static/res/player/Death.png',
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


const startingPoint6 = new Boundary({
    position: {
        x: 4600,
        y: -300
    }
})

const enemyArea6 = new BoundaryFightingArea4({
    position: {
        x: 4500,
        y: -400
    }

})

const enemy7 = new Fighter({
    position: {
        x: 5200,
        y: -400
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './static/res/player/Idle.png',
    offset: {
        x: 160,
        y: 110
    },
    color:  'blue',
    fm: 11, 
    scale: 2,

    sprites: {
        idle:{
            imageSrc:'./static/res/player/Idle.png',
            fm: 11,
        },
        idleLeft:{
            imageSrc:'./static/res/player/IdleLeft.png',
            fm: 11,
        },
        runRight: {
            imageSrc: './static/res/player/Run.png',
            fm: 8
        },
        runLeft: {
            imageSrc: './static/res/player/RunLeft.png',
            fm: 8
        },
        jumpright: {
            imageSrc: './static/res/player/Jump.png',
            fm: 3
        }, 
        jumpLeft: {
            imageSrc: './static/res/player/JumpLeft.png',
            fm: 3
        },
        fall: {
            imageSrc: './static/res/player/Fall.png',
            fm: 3
        }, 
        fallLeft: {
            imageSrc: './static/res/player/FallLeft.png',
            fm: 3
        }, 
        attack1Right: {
            imageSrc: './static/res/player/Attack1.png',
            fm: 7
        }, 
        attack1Left: {
            imageSrc: './static/res/player/Attack1Left.png',
            fm: 7
        }, 
        takeHitRight: {
            imageSrc: './static/res/player/TakeHit.png',
            fm: 4
        },
        takeHitLeft: {
            imageSrc: './static/res/player/Take HitLeft.png',
            fm: 4
        }, 
        death: {
            imageSrc: './static/res/player/Death.png',
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


const startingPoint7 = new Boundary({
    position: {
        x: 5200,
        y: 100
    }
})

const enemyArea7 = new BoundaryFightingArea2({
    position: {
        x: 5100,
        y: -100
    }

})