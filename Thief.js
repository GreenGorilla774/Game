

kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 1],
})
    //movement variables for player
    const MoveSpeed = 500;
    const JumpHieght = 500;

    let CurrentJumpHieght = JumpHieght;
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
loadSprite('SecretDoor', 'Sprites/bookShelf.png')


scene("game", ({ level, score }) =>{
    layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [        
            '                                ',
            '                                ',
            '                           ',
            '                       ',
            '     *                   *   ',
            '                         ',
            '                              ',
            '=====================================',
        ],
        [
            '                 ',
            '                 ',
            '                 ',
            '                 ',
            '/       /  =       /',
            '                 ',
            '                 ',
            '=========================',
        ],

        [
            '                 ',
            '                 ',
            '                 ',
            '         ==        ',
            '-         -       -',
            '                 ',
            '                 ',
            '====================',
        ],

        [
            '                 ',
            '        ===         ',
            '                 ',
            '                 ',
            '+        +            +',
            '                s    ',
            '                 ',
            '========================',
        ],
        [
            '        @@@@      ',
            '        ====         ',
            '                 ',
            '                 ',
            'd       d        d',
            '                 ',
            '                 ',
            '==================',
        ],
        [
            '                 ',
            '        =====         ',
            '                 ',
            '                 ',
            'd       d        d',
            '                 ',
            '                 ',
            '==================',
        ],

        [
            '                 ',
            '=================',
            '        @@@      ',
            '                 ',
            'd               d',
            '                 ',
            '                 ',
            '==================',
        ],

        [
            '                 ',
            '        =====         ',
            '                 ',
            '        @@@@@@@@@@@         ',
            'd               d',
            '                 ',
            '                 ',
            '==================',
        ],
     

    ]

    const levelConfig = {
        width: 20,
        height: 20,
        '=': [ sprite('tile',{frame: 65}),solid(), scale(0.1)],

        '*': [sprite('door'),scale(0.3), 'door1'],
        '-': [sprite('door'),scale(0.3), 'door3'],
        '+': [sprite('door'),scale(0.3), 'door4'],
        '@': [sprite('guard'), solid(), scale(0.9), 'dangerous'],
        '/': [sprite('door'),scale(0.3), 'door2'],
        's': [sprite('SecretDoor'),scale(0.3), 'doorS'],
        'd': [sprite('door'),scale(0.3), 'doorS'],
    }

    const gameLevel = addLevel(maps[level],levelConfig)

    const scoreLabel = add([
        
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('items stolen ' + parseInt(score + 1)), pos(40,6)])

   

    const player = add([ 
        sprite('player'), solid(), 
        pos(10,150), 
        body(),
 
        origin('bot')
    ])

    
    const enemy = add([
        sprite('guard'), solid(),
        pos(200, 108),
        'dangerous', 
        
    ])


   


    player.collides('dangerous', (d) => {
    
     go('cuaght', {score: scoreLabel.value})
    
    })

    

    let ENEMY_SPEED = 30;


    wait(3, () => {
        ENEMY_SPEED = -30;
        wait(3, () => {
            ENEMY_SPEED = 30;
            wait(3, () => {
                ENEMY_SPEED = -30;
                
            })
            
        })
    })

    action('dangerous', (d) =>{
        d.move(-ENEMY_SPEED,0)
    });





    player.action(() =>{
        camPos(player.pos) 
        if(player.pos.y >= FALL_DEATH){
            go('death', {score: scoreLabel.value})
        }
    })

    player.collides('coin', (c) =>{
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })


    function RMG(max){
        return Math.floor(Math.random() * max);
    }


    //doors
    player.collides('door1', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(4)) % maps.length,
                // score: scoreLabel.value
            })
        })
    })

    player.collides('door2', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(3)) % maps.length,
                // score: scoreLabel.value
            })
        })
    })

    player.collides('door3', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(2)) % maps.length,
                // score: scoreLabel.value
            })
        })
    })

    player.collides('door4', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level - RMG(4)) % maps.length,
                // score: scoreLabel.value
            })
        })
    })


    player.collides('doorS', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                // score: scoreLabel.value
            })
        })
    })

    //door

    keyDown('left', () => {
        player.move(-MoveSpeed,0);
        
    })

    keyDown('right', () => {
        player.move(MoveSpeed,0);
    })

    player.action( () =>{
        if(player.grounded()){
            isJumping = false;
        }
    })
    

    keyPress('space', () => {
        if(player.grounded()){
            isJumping = true;
            player.jump(CurrentJumpHieght); 
        }
    })

})

scene('cuaght', () =>{
    add([text(' you got caught'), origin('center'), pos(width()/2, height()/2)])
})

scene('death', () =>{
    add([text('YOU DIED'), origin('center'), color(255, 0, 0),pos(width()/2, height()/2)])
})



start("game", { level: 0 , score: 0 })