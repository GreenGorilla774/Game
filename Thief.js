

kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 1],
})
    //movement variables for player
    const MOVE_SPEED = 200;
    const JUMP_FORCE = 500;

    let CURRENT_JUMP_FORCE = JUMP_FORCE;
    let Jumping = true;
    const FALL_DEATH = 400;


loadSprite('tile', 'Sprites/floor.png')
loadSprite('guard', 'Sprites/guard3.png',{
    // sliceX: 10,
    // sliceY: 1,
    // anim:{
    //     walking:{from: 1, to: 10}
    // }
})
loadSprite('player', 'Sprites/Player.png',{
    sliceX: 12,
    sliceY: 12,
    anim:{
        idle:{from: 1, to: 4},
        run:{from: 13, to: 18}
    }
    
},

{animSpeed: 2})

loadSprite('door', 'Sprites/door.png')


scene("game", ({ level, score }) =>{
    layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [        
            '                                ',
            '                                ',
            '                           ',
            '                       ',
            '                        *   ',
            '               @          =',
            '                           =   ',
            '=====================================',
        ],
        [
            '                 ',
            '                 ',
            '                 ',
            '                 ',
            '*                *',
            '                 ',
            '                 ',
            '==================',
        ],
     

    ]

    const levelConfig = {
        width: 20,
        height: 20,
        '=': [ sprite('tile',{frame: 65}),solid(), scale(0.1)],

        '*': [sprite('door'),scale(0.3), 'door'],
        '@': [sprite('guard'), solid(), scale(0.9), 'dangerous']
    }

    const gameLevel = addLevel(maps[level],levelConfig)

    //adding a score label/ui element
    const scoreLabel = add([
        
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('items stolen ' + parseInt(score + 1)), pos(40,6)])

   

    //player
    const player = add([ 
        sprite('player'), solid(), 
        pos(0,150), 
        body(),
 
        origin('bot')
    ])


   



    player.collides('coin', (c) =>{
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })

    //adding in enemy interaction
    player.collides('dangerous', (d) => {
    
     go('cuaght', {score: scoreLabel.value})
    
    })

    const ENEMY_SPEED = 0

    

    action('dangerous', (d) =>{
        d.move(-ENEMY_SPEED,0)
    })

    player.action(() =>{
        camPos(player.pos) //camera postition
        if(player.pos.y >= FALL_DEATH){
            go('death', {score: scoreLabel.value})
        }
    })

    player.collides('door', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    //adding keyboard functions
    keyDown('left', () => {
        player.move(-MOVE_SPEED,0);
        
    })

    keyDown('right', () => {
        player.move(MOVE_SPEED,0);
    })

    player.action( () =>{
        if(player.grounded()){
            isJumping = false;
        }
    })
    

    keyPress('space', () => {
        if(player.grounded()){
            isJumping = true;
            player.jump(CURRENT_JUMP_FORCE); 
        }
    })

})

//making a game over screen
scene('cuaght', ({ score }) =>{
    add([text(' you got caught', score, 32), origin('center'), pos(width()/2, height()/2)])
})

scene('death', ({score}) =>{
    add([text('YOU DIED', score, 32), origin('center'), color(255, 0, 0),pos(width()/2, height()/2)])
})



start("game", { level: 0 , score: 0 })