

kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 1],
})
    
    const MoveSpeed = 200;
    const JumpHieght = 309;

    let CurrentJumpHieght = JumpHieght;
 


//sprites
loadSprite('floor', 'Sprites/floor.png') 
loadSprite('under', 'Sprites/underGround.png')
loadSprite('table', 'Sprites/table.png')
loadSprite('cave', 'Sprites/blackCave.png')
loadSprite('spikes', 'Sprites/spikes.png')
loadSprite('bed', 'Sprites/bed.png')
loadSprite('cat', 'Sprites/sleepingCat.png')
loadSprite('lamp', 'Sprites/lamp.png')
loadSprite('guardL', 'Sprites/standL.png')
loadSprite('guardR', 'Sprites/standR.png')
loadSprite('player', 'Sprites/Player.png')
loadSprite('reaper', 'Sprites/reaper.png')
loadSprite('skeleton', 'Sprites/boneHead.png')
loadSprite('door', 'Sprites/door.png')
loadSprite('stair', 'Sprites/stair.png')
loadSprite('wall', 'Sprites/wood2.png')
loadSprite('gemG', 'Sprites/gemG.png')
loadSprite('gemR', 'Sprites/gemR.png')
loadSprite('gemP', 'Sprites/gemP.png')
loadSprite('gemY', 'Sprites/gemY.png')
loadSprite('SecretDoor', 'Sprites/bookShelf.png')
loadSprite('bookShelf', 'Sprites/bookShelf.png')
loadSprite('TheEnd', 'Sprites/TheEnd.png')
loadSprite('endGround', 'Sprites/endGround.png')
loadSprite('END', 'Sprites/END.png')
loadSprite('fire', 'Sprites/fire.png')


scene("game", ({ level, score }) =>{  
    layers(['bg', 'obj'], 'obj')
    const maps = [
        [     
            //0
            '================================',
            '=bl     bb       bb     l !    =',
            '=b     *bb       bb       !    =',
            '=                  @           =',
            '=           y g r            * =',
            '=p     ==============          =',
            '=                              =',
            '=*            *          w======',
            '=                @      ww=',
            '=                      www=',
            '===========================',
        ],
        [
            //1
            '======================================',
            '=b    l  b       b       b   b   l   =',
            '=b       b       b     / b   b     / =',
            '=                            @       =',
            '=/       /                   gr      =',
            '=                =====================',
            '=                                    =',
            '=wwwwwwwwwwwww            /   /   /  =',
            '=wwwwwwwwwwwwww                @     =',
            '=wwwwwwwwwwwwwww                    p=',
            '======================================',
        ],

        [
            //2
            '=====================================================================================',
            '=b       b       b l     b b       =(             (               (                 =',
            '=b c     b       b             !   =                                                =',
            '=~                                 =                                                =',
            '=  rrr                         !   =                                                =',
            '=======================                                                             =',
            '=     l         l                                                                   =',
            '=/                         ww      ===      ===================                     =',
            '=                         wwww     =                                                =',
            '=      ggyp              wwwwww    =                                                =',
            '================================?  =                                                =',
            '=?   ?  l?   ?   ?l  ?   ?   ? ?   =                                    g           =',
            '=-                                w=                                   ggg        - =',
            '=        @         @             ww=                                  r   y     9   =',
            '=          y r p g              www=                                 rrr yyy        =',
            '====================================^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ==================',
        ],

        [
            //3
            '                      ',
            '                      ',
            '===============================',
            '=b  l    b l    bl    b  l    =',
            '=+     +     +                =',
            '=             @               =',
            '=b   gg  b rr   byy   b       =',
            '======================w       =',
            '=[  [  [   l  [  [  [ =w      =',
            '=                     =ww     =',
            '=[g [r [      [  [y [ ===     =',
            '=        tc            +    ww=',
            '=[  [  [  p p [g [  [      www=',
            '=                         wwww=',
            '===============================',
        ],

        [
            //4
            '       ============================================',
            '       ============================================                ',
            '   ====b   b  lb   b ================b   b l b   b ====              ',
            '   ====              ================              ====            ',
            '   ====              =    b   b     =              ====            ',
            '===[ [               =              =                  ===            ',
            '===          t       =%           % =     %            ===            ',
            '===[ s        ypy              @                       ===            ',
            '=== b      b       b    g pb  r y    b   p y b         ===            ',
            '==============================================         ===            ',
            '===============================================   !    ===            ',
            '=%!                    =    6     =           ==r      ===',
            '=                                  !          ====     ===            ',
            '=                        rrrrrrrrr                    y===         ',
            ' ==                    ============                   ==           ',
            '  ==                   ==============         @      r==    ',
            '  ===     g g g      ================               ==         ',
            '  ====================================================            ',
            '     ==============================================               ',
            '     =======           ==========           =======                    ',
            '     =======           ==========           =======                        ',
            '     =======           ==========           =======    ',
        ],

        [
            //5
            '      ',
            '5      ',
            '      ',
            '    5  ',
            '     ',
            '     ',
            'd     ',
            '     ',
            '     ',
            '5  ',
            '     ',
            '     ',
            '    5 ',
            '     ',
            '5     ',
            '     ',
            '     ',
            '     5',
            '     ',
            '      ',
            '^^^^^^',
        ],

        [   
            //6
            '==========================',
            '=u           u           =',
            '=1                       =',
            '=u     #     u           =',
            '= g        yprr          =',
            '===============w         =',
            '=             ==w        =',
            '=d             =ww      y=',
            '=           #          ww=',
            '=             rrr     www=',
            '=================w       =',
            '=               =ww      =',
            '=1              ==ww    p=',
            '=       #              ww=',
            '= r              y y  www=',
            '==========================',
        ],

        [
            //7   
            '==========================',
            '=u           u           =',
            '=                      2 =',
            '=u           u       #   =',
            '=              p y     rr=',
            '=              ===========',
            '=         g              =',
            '=2        w              =',
            '=        www             =',
            '=       wwwww            =',
            '================w        =',
            '=              =ww       =',
            '=2             ==ww     y=',
            '=          #           ww=',
            '=gg            r r p gwww=',
            '==========================',
        ],

        [ 
            //8  
            '==================================================',
            '=u           u           u      =====u====       =',
            '=                              =  rpyyrpg===     =',
            '=u           u           u     =  rrypgyy ==     =',
            '=3                             =  ryyprrpy==     =',
            '=                                 prgpy ==       =',
            '=u           u           u       rgygu===        =',
            '===wr              3             ==========      =',
            '===wwr                                           =',
            '===wwwr  rr                =                     =',
            '==========w      =====                           =',
            '=        =ww                                     =',
            '=        ==ww                                    =',
            '=                                                =',
            '=               w                                =',
            '=3             www      3           3          3 =',
            '=      #      wwwww          #            #      =',
            '=            wwwwwww                             =',
            '==================================================',
        ],

        [   
            //9
            
            '                     ',
            '                  ',
            '========================================================================',
            '=u      u      u      u      u      uu         $   $   $   $   $   $ 6 =',
            '=4                                                                     =',
            '=                                                 r g r g r g r g r g  =',
            '=                                  =====================================',
            '========      ==      =      =                   =',
            '=                                                =',
            '=                                                =',
            '=                                                =',
            '=                                                =',
            '=     # # # # # # # # # # # # # # # # # # # # #  =',
            '=ffffffffffffffffffffffffffffffffffffffffffffff  =',
            '=                                                =',
            '==================================================',
        ],

        [   
            //10
            
            'e',
            '                     ',
            '                     ',
            '                     ',
            '                     ',
            '                         ',
            '===                         ',
            '=E                     ',
            '=                 0 ',
            '=                  ',
            'hhhhhhhhhhhhhhhhhhhh',
        ],
        
     

    ]


     
    //assets
    const levelConfig = {
        width: 20,
        height: 20,
        '=': [ sprite('floor'),solid(), scale(0.1)],
        'u': [ sprite('under'),scale(1.5), layer('bg')],
        '$': [ sprite('under'),scale(0.5), layer('bg')],
        '?': [ sprite('floor'), scale(0.5), layer('bg')],
        
        '(': [ sprite('cave'), scale(1.7), layer('bg')],
        '^': [ sprite('spikes'),solid(), scale(0.1), 'death'],
        'f': [ sprite('fire'),scale(0.2), 'death'],
        '9': [ sprite('reaper'),solid(), scale(0.8), 'deathE'],
        '5': [ sprite('reaper'), scale(0.8)],

        '*': [sprite('door'),scale(0.3), 'door1'],
        '/': [sprite('door'),scale(0.3), 'door2'],
        '-': [sprite('door'),scale(0.3), 'door3'],
        '+': [sprite('door'),scale(0.3), 'door4'],
        '%': [sprite('door'),scale(0.3), 'door5'],
        'E': [sprite('door'),scale(0.3)],

        '6': [sprite('door'),scale(0.3), 'doorD'],
        'd': [sprite('door'),scale(0.3), 'doorB'],

        '1': [sprite('door'),scale(0.3), 'doorU1'],
        '2': [sprite('door'),scale(0.3), 'doorU2'],
        '3': [sprite('door'),scale(0.3), 'doorU3'],
        '4': [sprite('door'),scale(0.3), 'doorU4'],

        '@': [sprite('guardL'),scale(1), solid(), 'dangerous'],

        '#': [sprite('skeleton'),scale(0.2), solid(), 'deathE'],


        's': [sprite('SecretDoor'),scale(0.3), 'doorS'],
        '[': [sprite('bookShelf'),scale(0.3)],
        't': [sprite('table'),scale(0.8),],


        'w': [sprite('stair'),scale(0.12), solid()],
        'b': [sprite('wall'),scale(1), layer('bg')],
        '!': [sprite('wall'),scale(0.6), layer('bg')],

        'l': [sprite('lamp'),scale(0.8)],

        'c': [sprite('cat'),scale(1.9)],
        '~': [sprite('bed'),scale(0.4)],

        'g': [sprite('gemG'),scale(0.1), 'gem'],
        'r': [sprite('gemR'),scale(0.1), 'gem'],
        'p': [sprite('gemP'),scale(0.1), 'gem'],
        'y': [sprite('gemY'),scale(0.1), 'gem'],


        'e': [ sprite('TheEnd'), scale(1.5), layer('bg')],
        'h': [ sprite('endGround'),solid(), scale(0.2)],
        '0': [ sprite('END'),solid(), scale(1), 'end'],
    }


    const gameLevel = addLevel(maps[level],levelConfig)


    //saves the score
    const scoreLabel = add([
        
     
        
        {
            value: score,
        }
    ])



   
    //player
    const player = add([ 
        sprite('player'), solid(), 
        pos(20,150), 
        body(),
 
        origin('bot')
    ])

    //gems
    player.collides('gem', (g) =>{
        destroy(g)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })
    


    //enemy speed
    let GuardSpeed = 30;

    //caught by a guard
    player.collides('dangerous', (d) => {
    
     go('caught', {score: scoreLabel.value})
    
    })

    //killed by a trap
    player.collides('death', (d) => {
    
        go('death', {score: scoreLabel.value})
       
       })

       //killed by enemy
       player.collides('deathE', (d) => {
    
        go('deathE', {score: scoreLabel.value})
       
       })



       //the end
       player.collides('end', (d) => {
    
        go('END', {score: scoreLabel.value})
       
       })
    
 

  

    //patrol loop
    wait(3, () => {
        GuardSpeed = -30;
        wait(3, () => {
            GuardSpeed = 30;
            wait(3, () => {
                GuardSpeed = -30;
                wait(3, () => {
                    GuardSpeed = 30;
                    wait(3, () => {
                        GuardSpeed = -30;
                        wait(3, () => {
                            GuardSpeed = 30;
                            wait(3, () => {
                                GuardSpeed = -30;
                                wait(3, () => {
                                    GuardSpeed = 30;
                                    wait(3, () => {
                                        GuardSpeed = -30;
                                        wait(3, () => {
                                            GuardSpeed = 30;
                                            wait(3, () => {
                                                GuardSpeed = -30;
                                                wait(3, () => {
                                                    GuardSpeed = 30;
                                                    wait(3, () => {
                                                        GuardSpeed = -30;
                                                        wait(3, () => {
                                                            GuardSpeed = 30;
                                                            wait(3, () => {
                                                                GuardSpeed = -30;
                                                                wait(3, () => {
                                                                    GuardSpeed = 30;
                                                                     
                                                                })
                                                            }) 
                                                        })
                                                    }) 
                                                })
                                            }) 
                                        })
                                    })
                                })
                            }) 
                        })
                    }) 
                })
            }) 
        })
    }) 


    
    //this implements the movment for the guards ande so it says you get caught.
    action('dangerous', (d) =>{
        d.move(-GuardSpeed,0)
    });
   
    //this implements the movment for the enemies that will kill you
    action('deathE', (d) =>{
        d.move(-GuardSpeed,0)
    });



    //this makes the camera follow the player
    player.action(() =>{
        camPos(player.pos) 
       
    })


    //this makes it so that when you go through a door, it will take you to a random room
    function RMG(max){
        return Math.floor(Math.random() * max);
    }


    //doors
    player.collides('door1', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(5)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('door2', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(4)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('door3', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(3)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('door4', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(2)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('door5', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level - RMG(5)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    //death door
    player.collides('doorD', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    //secret door
    player.collides('doorS', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + 2) % maps.length,
                score: scoreLabel.value
            })
        })
    })


    //underground doors
    player.collides('doorB', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level - 2) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('doorU1', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(4)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('doorU2', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(3)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('doorU3', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level + RMG(2)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    player.collides('doorU4', () =>{
        keyPress('up', () =>{
            go('game', {
                level: (level - RMG(4)) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    

    
    //player movement
    keyDown('left', () => {
        player.move(-MoveSpeed,0);
        
    })

    keyDown('right', () => {
        player.move(MoveSpeed,0);
    })
    
    keyPress('space', () => {
        if(player.grounded()){
   
            player.jump(CurrentJumpHieght); 
        }
    })

    

})


//different end scenes

//caught by guards
scene('caught', ({score}) =>{
    add([text(' you got caught' + '\n\nGems stolen: ' + score), origin('center'),color(255, 0, 0), pos(width()/2, height()/2)])
})

//death by traps
scene('death', ({score}) =>{
    add([text('YOU DIED' + '\n\nGems stolen: ' + score), origin('center'), color(255, 0, 0),pos(width()/2, height()/2)])
})

//death by enemies
scene('deathE', ({score}) =>{
    add([text('YOU DIED' + '\n\nGems stolen: ' + score), origin('center'), color(255, 0, 0),pos(width()/2, height()/2)])
})

//end 
scene('END', ({score}) =>{
    add([text('THE END' + '\n\nGems stolen: ' + score + '\n\n\nThank you for playing.'), origin('center'),pos(width()/2, height()/2)])
})



start("game", { level:0 , score: 0 })