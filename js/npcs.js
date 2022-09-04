const enemy3 = new Fighter({
    position: {
        x: 2400,
        y: -300
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