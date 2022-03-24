


kaboom({
    global: true,
    fullscreen: true,
    scale: 1.6,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

const MoveSpeed = 200;
const JumpHieght = 310;

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
loadSprite('Home', 'Sprites/home.png')
loadSprite('hSign', 'Sprites/homeSign.png')
loadSprite('tSign', 'Sprites/townSign.png')
loadSprite('Town', 'Sprites/town.png')
loadSprite('mSign', 'Sprites/mansionSign.png')
loadSprite('Mansion', 'Sprites/mansion.png')
loadSprite('Intro1', 'Sprites/intro1.png')
loadSprite('Intro2', 'Sprites/intro2.png')
loadSprite('Intro3', 'Sprites/intro3.png')

loadSprite('Move', 'Sprites/move.png')
loadSprite('Map', 'Sprites/map.png')
loadSprite('MapI', 'Sprites/mapi.png')
loadSprite('Hint', 'Sprites/hint.png')

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
loadSprite('Book', 'Sprites/book.png')
loadSprite('TheEnd', 'Sprites/TheEnd.png')
loadSprite('endGround', 'Sprites/endGround.png')
loadSprite('END', 'Sprites/END.png')
loadSprite('fire', 'Sprites/fire.png')


scene("game", ({
    level,
    score
}) => {
    layers(['bg', 'obj'], 'obj')
    const maps = [

        [
            //0
            'ezeeeeeeeeeee                   ',
            '                                ',
            '                                ',
            '              i                 ',
            '_                               ',
            '                                ',
            'h                               ',
            'h                              h',
            'h                           q  h',
            'h                              h',
            'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        ],

        [
            //1
            'a                       ',
            '=                       ',
            '= v                     ',
            '=                       ',
            '=                       ',
            '=                       ',
            '=                       ',
            '=                       ',
            '=                       ',
            '===              o     =',
            '====                   =',
            '=====                  =',
            '========================',
        ],
        [
            //2
            'j  `                    ',
            '=                                  ',
            '=                                  ',
            '=                              ',
            '=        *                          ',
            '=                              ',
            '=                 =              ',
            '=       ====      =              ',
            '=      ======     =          ',
            '========================',
        ],


        [
            //3
            '================================',
            '=bl     bb       bb     l !    =',
            '=b      bb       bb       !    =',
            '=              @               =',
            '= 2     g p y g r            * =',
            '=p     ==============          =',
            '=                              =',
            '=E                       w======',
            '=                @      ww=',
            '=       r p g y p r    www=',
            '===========================',
        ],
        [
            //4
            '======================================',
            '=b    l  b       b       b   b   l   =',
            '=b       b       b       b   b     - =',
            '=                            @       =',
            '=/               p r g y     gr      =',
            '=                =====================',
            '=    r p y g                         =',
            '=wwwwwwwwwwwww                    *  =',
            '=wwwwwwwwwwwwww                @     =',
            '=wwwwwwwwwwwwwww    y p y           p=',
            '======================================',
        ],


        [
            //5
            '===============================',
            '=b       b       b    b       =',
            '=                             =',
            '=                             =',
            '=                             =',
            '=                             =',
            '=+                          * =',
            '=                             =',
            '=     r y p g r y p g y r     =',
            '===============================',
        ],

        [
            //6
            '=====================================================================================',
            '=b       b       b l     b b       =(             (               (                 =',
            '=b c     b       b             !   =                                                =',
            '=~                                 =                                                =',
            '=  rrr                         !   =                                                =',
            '=======================                                                             =',
            '=     l         l                                                                   =',
            '=+                         ww      ===      ===================                     =',
            '=                         wwww     =                                                =',
            '=      ggyp              wwwwww    =                                                =',
            '================================?  =                                                =',
            '=?   ?  l?   ?   ?l  ?   ?   ? ?   =                                    g           =',
            '=r y p                            w=                                   ggg        / =',
            '=g y y         @                 ww=                                  r   y         =',
            '=r g r     y r p g              www=                                 rrr yyy    9   =',
            '====================================^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ==================',
        ],

        [
            //7
            '                      ',
            '                      ',
            '===============================',
            '=b  l    b l    bl    b  l    =',
            '=)                            =',
            '=             @               =',
            '=b   gg  b rr   byy   b       =',
            '======================w       =',
            '=[  [  [   l  [  [  [ =w      =',
            '=                     =ww     =',
            '=[g [r [      [  [y [ ===     =',
            '=        tc                 ww=',
            '=[  [  [  p p [g [  [      www=',
            '=                         wwww=',
            '===============================',
        ],

        [
            //8
            '       ============================================',
            '       ============================================',
            '   ====b   b  lb   b ================b   b l b   b ====',
            '   ====              ================              ====',
            '   ====   7          =    b   b     =              ====',
            '===[ [               =              =                  ===',
            '===          t       =              =                  ===',
            '===[ s        ypy              @                       ===',
            '=== b      b       b    g pb  r y    b   p y b         ===',
            '==============================================         ===',
            '===============================================   !    ===',
            '=%!                    =    *     =           ==r      ===',
            '=                                  !          ====     ===',
            '=                        rrrrrrrrr                    y===',
            ' ==                    ============                   ==',
            '  ==                   ==============         @      r==',
            '  ===     g g g      ================               ==',
            '  ====================================================',
            '     ==============================================',
            '     =======           ==========           =======',
            '     =======           ==========           =======',
            '     =======           ==========           =======',
        ],

        [
            //9
            '      ',
            '5      ',
            '      ',
            '    5  ',
            '     ',
            '     ',
            'E     ',
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
            //10
            '==========================',
            '=u           u           =',
            '=-                       =',
            '=u     #     u           =',
            '= g        yprr          =',
            '===============w         =',
            '=             ==w        =',
            '=E             =ww      y=',
            '=           #          ww=',
            '=             rrr     www=',
            '=================w       =',
            '=               =ww      =',
            '=*              ==ww    p=',
            '=       #              ww=',
            '= r              y y  www=',
            '==========================',
        ],

        [
            //11   
            '==========================',
            '=u           u           =',
            '=                      2 =',
            '=u           u       *   =',
            '=              p y     rr=',
            '=              ===========',
            '=         g              =',
            '=+        w              =',
            '=        www             =',
            '=       wwwww            =',
            '================w        =',
            '=              =ww       =',
            '=*             ==ww     y=',
            '=          #           ww=',
            '=gg            r r p gwww=',
            '==========================',
        ],

        [
            //12  
            '==================================================',
            '=u           u           u      =====u====       =',
            '=                              =  rpyyrpg===     =',
            '=u           u           u     =  rrypgyy ==     =',
            '=+                             =  ryyprrpy==     =',
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
            '=%             www      +                      * =',
            '=      #      wwwww          #      #      #     =',
            '=            wwwwwww                             =',
            '==================================================',
        ],

        [
            //13

            '                     ',
            '                  ',
            '========================================================================',
            '=u      u      u      u      u      uu         $   $   $   $   $   $ * =',
            '=E                                                                     =',
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
            //14

            'e',
            '                    ',
            '                    ',
            '                    ',
            '                    ',
            '                    ',
            '===                 ',
            '=E                  ',
            '=                 1 ',
            '=                   ',
            'hhhhhhhhhhhhhhhhhhhh',
        ],

        [
            //51
            '                             ',
            'm                           ',
            '                             ',
            '                             ',
            '                             ',
            '                             ',
            '                             ',
            '  =                          ',
            '  =                          ',
            '  =                          ',
            '===                          ',
            '                             ',
            '                             ',
            '                             ',
            '                             ',
            '                             ',

            '                              ',
        ],



    ]



    //assets
    const levelConfig = {
        width: 20,
        height: 20,
        '=': [sprite('floor'), solid(), scale(0.1)],
        'u': [sprite('under'), scale(1.5), layer('bg')],
        '$': [sprite('under'), scale(0.5), layer('bg')],
        '?': [sprite('floor'), scale(0.5), layer('bg')],

        '(': [sprite('cave'), scale(1.7), layer('bg')],
        '^': [sprite('spikes'), solid(), scale(0.1), 'death'],
        'f': [sprite('fire'), scale(0.2), 'death'],
        '9': [sprite('reaper'), solid(), scale(0.8), 'deathE'],
        '5': [sprite('reaper'), scale(0.8)],

        '*': [sprite('door'), scale(0.3), 'door1'],
        '/': [sprite('door'), scale(0.3), 'door2'],
        '-': [sprite('door'), scale(0.3), 'door3'],

        '+': [sprite('door'), scale(0.3), 'door4'],
        '%': [sprite('door'), scale(0.3), 'door5'],
        ')': [sprite('door'), scale(0.3), 'door6'],

        'E': [sprite('door'), scale(0.3)],



        '@': [sprite('guardL'), scale(1), solid(), 'deathE'],

        '#': [sprite('skeleton'), scale(0.2), solid(), 'deathE'],


        's': [sprite('SecretDoor'), scale(0.3), 'doorS'],
        '[': [sprite('bookShelf'), scale(0.3)],
        't': [sprite('table'), scale(0.8), ],


        'w': [sprite('stair'), scale(0.12), solid()],
        'b': [sprite('wall'), scale(1), layer('bg')],
        '!': [sprite('wall'), scale(0.6), layer('bg')],

        'l': [sprite('lamp'), scale(0.8)],

        'c': [sprite('cat'), scale(1.9)],
        '~': [sprite('bed'), scale(0.4)],

        'g': [sprite('gemG'), scale(0.1), 'gem'],
        'r': [sprite('gemR'), scale(0.1), 'gem'],
        'p': [sprite('gemP'), scale(0.1), 'gem'],
        'y': [sprite('gemY'), scale(0.1), 'gem'],


        'e': [sprite('TheEnd'), scale(1.5), layer('bg')],
        'h': [sprite('endGround'), solid(), scale(0.1)],
        'z': [sprite('Home'), scale(1)],
        'i': [sprite('Intro1'), scale(0.5)],
        'v': [sprite('Intro2'), scale(0.5)],
        '`': [sprite('Intro3'), scale(0.5)],

        '_': [sprite('Move'), scale(0.5)],
        '2': [sprite('MapI'), scale(0.5)],
        '7': [sprite('Hint'), scale(0.3)],


        //code meant for the messages
        // '3': [sprite('Book'), scale(0.2), 'msg1'],
        // '4': [sprite('MapI'), scale(0.2)],

        'q': [sprite('tSign'), scale(0.2), 'door1'],
        '1': [sprite('hSign'), scale(0.2), 'end'],
        'a': [sprite('Town'), scale(0.5)],
        'o': [sprite('mSign'), scale(0.3), 'door1'],
        'j': [sprite('Mansion'), scale(0.9, 0.6)],
        'm': [sprite('Map'), scale(0.5)],
    }


    const gameLevel = addLevel(maps[level], levelConfig)


    //saves the score
    const scoreLabel = add([
        text('gems stolen: ' + score),
        pos(30, -20),
        layer('ui'),
        {
            value: score
        }
    ])

    const scoreLabel2 = add([
        text('gems stolen: ' + score),
        pos(30, 230),
        layer('ui'),
        {
            value: score
        }
    ])



    //player
    const player = add([
        sprite('player'), solid(),
        scale(1),
        pos(x = 20, y = 150),
        body(),

        origin('bot')
    ])

    //gems
    player.collides('gem', (g) => {
        destroy(g)
        scoreLabel.value++
        scoreLabel.text = 'gems stolen: ' + scoreLabel.value

        scoreLabel2.value++
        scoreLabel2.text = 'gems stolen: ' + scoreLabel2.value
    })



    //enemy speed
    let GuardSpeed = 30;



    //killed by a trap
    player.collides('death', (d) => {

        go('death', {
            score: scoreLabel.value
        })

    })

    //killed by enemy
    player.collides('deathE', (d) => {

        go('deathE', {
            score: scoreLabel.value
        })

    })



    //the end
    player.collides('end', (d) => {

        go('END', {
            score: scoreLabel.value
        })

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
    action('dangerous', (d) => {
        d.move(-GuardSpeed, 0)
    });

    //this implements the movment for the enemies that will kill you
    action('deathE', (d) => {
        d.move(-GuardSpeed, 0)
    });



    //this makes the camera follow the player
    player.action(() => {
        camPos(player.pos)

        
    })

    // if(level = 5){
    //     camPos(300, 200)
    // }
    // else{
    //     camPos(player.pos)
    // }







    //doors




    player.overlaps('door1', () => {
        keyPress('up', () => {
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('door2', () => {
        keyPress('up', () => {
            go('game', {
                level: (level + 2) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('door3', () => {
        keyPress('up', () => {
            go('game', {
                level: (level + 3) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('door4', () => {
        keyPress('up', () => {
            go('game', {
                level: (level - 1) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('door5', () => {
        keyPress('up', () => {
            go('game', {
                level: (level - 2) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('door6', () => {
        keyPress('up', () => {
            go('game', {
                level: (level - 3) % maps.length,
                score: scoreLabel.value,

            })
        })

    })

    player.overlaps('msg1', () => {
        keyPress('up', () => {
            confirm('Leave qwhile you still can');
        })

    })





    //death door
    player.collides('doorD', () => {
        keyPress('up', () => {
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    //secret door
    player.collides('doorS', () => {
        keyPress('up', () => {
            go('game', {
                level: (level + 2) % maps.length,
                score: scoreLabel.value
            })
        })
    })


    



    //tried to impliment a function where it would keep track of the last room you were in
    //so it would go back to that room when you close the map.
//     var prev = {

            
//   pre: function (){
//     if(level = 0){
//         prev = 0;
//         return prev;
//     }
//     else if(level = 1){
//         prev = 1;
//         return prev;
//     }
//     else if(level =2){
//         prev = 2;
//         return prev;
//     }
//     else if(level = 3){
//         prev = 3;
//         return prev;
//     }
//     else if(level = 4){
//         prev = 4;
//         return prev;
//     }
//     else if(level = 5){
//         prev = 5;
//         return prev;
//     }
//     else if(level = 6){
//         prev = 6;
//         return prev;
//     }
//     else if(level = 7){
//         prev = 7;
//         return prev;
//     }
//     else if(level = 8){
//         prev = 8;
//         return prev;
//     }
//     else if(level = 9){
//         prev = 9;
//         return prev;
//     }
//     else if(level = 10){
//         prev = 10;
//         return prev;
//     }
//     else if(level = 11){
//         prev = 11;
//         return prev;
//     }
//     else if(level = 12){
//         prev = 12;
//         return prev;
//     }
//     else if(level = 13){
//         prev = 13;
//         return prev;
//     }
//     else if(level = 14){
//         prev = 14;
//         return prev;
//     }

//     }

// }

    
    


    //player movement
    keyDown('left', () => {
        player.move(-MoveSpeed, 0);

    })

    keyDown('right', () => {
        player.move(MoveSpeed, 0);
    })

    keyPress('space', () => {
        if (player.grounded()) {

            player.jump(CurrentJumpHieght);
        }
    })


    keyPress('m', () => {
        go('game', {
            level: (level = 15) % maps.length,
            score: scoreLabel.value
        })
    })

    keyPress('b', () => {
  
             go('game', {
             level: (level = 3) % maps.length,
             score: scoreLabel.value
             })
       
    })



})


//different end scenes



//death by traps
scene('death', ({
    score
}) => {
    add([text('YOU DIED' + '\n\nGems stolen: ' + score), origin('center'), color(255, 0, 0), pos(width() / 2, height() / 2)])

    //AFF: Relaods the game by pressing space when you die.
    keyPress('space', () => {
        document.location.reload(true)
    })
})

//death by enemies
scene('deathE', ({
    score
}) => {
    add([text('YOU DIED' + '\n\nGems stolen: ' + score), origin('center'), color(255, 0, 0), pos(width() / 2, height() / 2)])

    //AFF: Relaods the game by pressing space when you die.
    keyPress('space', () =>{
        document.location.reload(true)
    })

})

//end 
scene('END', ({score}) => {

    if(score > 100){
    add([text('John had done it! He had be able to get ' + score + ' Gems! \n\nThis was enough to buy medicine for his family. \n\nHe would never speak a word of what happened \n\nin that forsaken mansion to anyone.' + '\n\n\nTHE END'),origin('center'), pos(width() / 2, height() / 2)])}

    else if(score < 100){
        add([text('John was only able to make it out with ' + score + ' gems, along with his life. \n\nIt took some time to scrounge up the remaining money to buy the medicine, \n\nbut he got got it in time. He would never speak a word of what happened \n\nin that forsaken mansion to anyone.' + '\n\n\nTHE END'),origin('center'), pos(width() / 2, height() / 2)])
    }

    
    //AFF: Relaods the game by pressing space when you finish.
    keyPress('space', () => {
        document.location.reload(true)
    })
})



start("game", {
    level:0,
    score: 0
})