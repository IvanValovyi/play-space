let games = [
    {
        name:'WarAge Premium',
        description:'Warage is a classic real-time RTS strategy game that will take you to the fantasy world.',
        details:`Features: You have two conflicting sides that have different types of troops to fight. You can build structures in any available place on the map. Waiting for you: Two full campaign PvE missions (the ability to play without the Internet in offline mode). PvP multiplayer for up to 6 players. Team PvP 2 on 2, 3 on 3 etc. Classic controls with the addition of new and convenient features. Large-scale PvP and PvE battles`,
        icon_img:'1.png',
        preview_img:'1.png',
        rating:3.8,
        price:1.99,
        url:'war-age-premium'
    },{
        name:'Card Title',
        description:' Et sollicitudin ac orci phasellus egestas tellus. Tellus mauris a diam maecenas sed. Ullamcorper morbi tincidunt ornare massa.',
        details:`Bibendum est ultricies integer quis auctor elit sed vulputate. Molestie at elementum eu facilisis sed odio morbi. Pulvinar etiam non quam lacus. Et sollicitudin ac orci phasellus egestas tellus. Tellus mauris a diam maecenas sed. Ullamcorper morbi tincidunt ornare massa. Nibh praesent tristique magna sit amet purus gravida quis. Dui sapien eget mi proin sed libero enim sed faucibus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Odio eu feugiat pretium nibh ipsum consequat nisl. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.`,
        icon_img:'2.png',
        preview_img:'2.png',
        rating:3.5,
        price:7.59,
        url:'card-title'
    },{
        name:'Venom City Craft',
        description:'Venom City Craft is a game in which you can explore 3D worlds, fight mobs, destroy and build cubes.',
        details:`In Venom City Craft you can do anything you want! Game can gives you a total freedom, build & craft for girls and boys. Craft and build survival, city build craft exploration, kraft weapons and master craft weapons, crafting & building.This game does not require any craft man skills - you can do all style of craft from first minutes of the game.Use blocks to create your own house, or go to meet enemies, dangers and treasures, here you can do everything!`,
        icon_img:'3.png',
        preview_img:'3.png',
        rating:3.5,
        price:2.67,
        url:'venom-city-craft'
    },{
        name:'Game Name',
        description:' Dui sapien eget mi proin sed libero enim sed faucibus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper.',
        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Vel fringilla est ullamcorper eget nulla. Et tortor consequat id porta nibh venenatis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vitae nunc sed velit dignissim sodales. Massa vitae tortor condimentum lacinia quis. Eget nunc scelerisque viverra mauris in aliquam sem.`,
        icon_img:'4.png',
        preview_img:'4.png',
        rating:3.5,
        price:1.99,
        url:'game-name'
    },{
        name:'Card Title',
        description:' Odio eu feugiat pretium nibh ipsum consequat nisl. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.',
        details:`Sed viverra ipsum nunc aliquet bibendum. Adipiscing elit ut aliquam purus sit amet. Vitae turpis massa sed elementum tempus. Id ornare arcu odio ut sem nulla pharetra diam sit. Amet facilisis magna etiam tempor orci. Tempus egestas sed sed risus. Dictumst quisque sagittis purus sit amet volutpat. A cras semper auctor neque vitae tempus quam. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Morbi tempus iaculis urna id.`,
        icon_img:'5.png',
        preview_img:'5.png',
        rating:3.5,
        price:3.79,
        url:'card-title-2'
    },{
        name:'Game Title',
        description:'Gravida neque convallis a cras semper auctor. Massa ultricies mi quis hendrerit dolor magna eget est.',
        details:`Tempor commodo ullamcorper a lacus. Vel elit scelerisque mauris pellentesque. Eget nulla facilisi etiam dignissim diam. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Arcu dictum varius duis at. Ridiculus mus mauris vitae ultricies leo integer malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Gravida dictum fusce ut placerat orci. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Nulla pharetra diam sit amet nisl suscipit adipiscing.`,
        icon_img:'6.png',
        preview_img:'6.png',
        rating:3.7,
        price:2.99,
        url:'game-title'
    },
]

export function get_one(url){
    return games.filter(el => el.url == url)[0]
}

export function get_other(url){
    return games.filter(el => el.url !== url)
}

export default games