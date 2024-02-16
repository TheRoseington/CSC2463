let characters = [];

function preload(){
  let animations = {
    stand: {row: 0, frame: 1},
    standUp: {row: 5, col: 2,frame: 1},
    standDown: {row: 5, col: 7, frame: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5,col: 6, frames: 6}
  };

  let character = new Character(100,100,80,80,'Sprites/Helsing.png',animations);
  let character2 = new Character(200,200,80,80,'Sprites/Helsing.png',animations);
  let character3 = new Character(300,50,80,80,'Sprites/Helsing.png',animations);

  characters.push(character, character2, character3);
}

function setup(){
createCanvas(400, 400);


}

function draw() {
  background(220);

characters.forEach((character) => {
  if (kb.pressing('d')){
    character.walkRight();
  }
  else if (kb.pressing('a')){
    character.walkLeft();
  }
  else if (kb.pressing('w')){
   character. walkUp();
  }
  else if (kb.pressing('s')){
    character.walkDown();
  }
  else {
    character.stop();
  }

if (character.sprite.x + character.sprite.width/2.5 > width){
  character.walkLeft();
}
else if (character.sprite.x - character.sprite.width/2.5 < 0){
 character.walkRight();
}
if (character.sprite.y + character.sprite.height/2.5 > height){
  character.walkUp();
}
else if (character.sprite.y -character.sprite.height/2.5 < 0){
  character.walkDown();
}

})
  
}

class Character {
  constructor(x,y,width,height,spriteSheet,animations){
    this.sprite = new Sprite(x,y,width,height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.anis.frameDelay = 6;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');
  }

 stop(){
  this.sprite.changeAni('stand');
  this.sprite.vel.x = 0;
  this.sprite.vel.y = 0;
}

 walkRight(){
  this.sprite.changeAni('walkRight');
  this.sprite.vel.x = 1;
  this.sprite.scale.x = 1;
  this.sprite.vel.y = 0;
}

 walkLeft(){
  this.sprite.changeAni("walkRight");
  this.sprite.vel.x = -1;
  this.sprite.scale.x = -1;
  this.sprite.vel.y = 0;
}

 walkUp(){
  this.sprite.changeAni('walkUp');
  this.sprite.vel.y = -1;
  this.sprite.vel.x = 0;
}

 walkDown(){
  this.sprite.changeAni('walkDown');
  this.sprite.vel.y = 1;
  this.sprite.vel.x = 0;
}
}


function keyTypedOld(){
 switch(key){
  case 'd':
    walkRight();
    break;
  case 'a' :
    walkLeft();
    break;
  case 'w':
    walkUp();
    break;
  case 's':
    walkDown();
    break;
 }

}
