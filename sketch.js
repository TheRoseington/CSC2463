let soundFX;
let botton = [];


function preload(){
soundFX = new Tone.Players ({
  monkey : "assets/Monkey.mp3",
  run : "assets/Run.mp3",
  seph : "assets/Sephiroh.mp3",
  nyan : "assets/Nyan.mp3",
  boom : "assets/VineBoom.mp3",
  wow :  "assets/Woow.mp3",
  bekfast : "assets/BrekfastEffect.mp3",
  bonk : "assets/bonk.mp3"

}).toDestination();
}

//function keyPressed(){
 // if (key == 'a'){
 //   soundFX.player('monkey').start();
 // }
 // else if (key == 's'){
 //   soundFX.player('run').start();
 // }
 // else if (key == 'd'){
 //   soundFX.player('seph').start();
 // }
 // else if (key == 'f'){
//    soundFX.player('nyan').start();
 // }
 // else if (key == 'g'){
 //   soundFX.player('boom').start();
 // }
//  else if (key == 'h'){
//    soundFX.player('wow').start();
 // }
 // else if (key == 'j'){
 //   soundFX.player('bekfast').start();
//  }
 // else if (key == 'k'){
 //   soundFX.player('bonk').start();
 // }
//}

function setup() {
  createCanvas(400, 400);

let button1 = createButton('monkey');
button1.position (50,100);
button1.mousePressed(() => soundFX.player('monkey').start() );

let button2 = createButton('run');
button2.position (50,150);
button2.mousePressed(() => soundFX.player('run').start());

let button3 = createButton('seph');
button3.position (50,200);
button3.mousePressed(() => soundFX.player('seph').start());

let button4 = createButton('nyan');
button4.position (50,250);
button4.mousePressed(() => soundFX.player('nyan').start());

let button5 = createButton('boom');
button5.position (150,100);
button5.mousePressed(() => soundFX.player('boom').start());

let button6 = createButton('wow');
button6.position (150,150);
button6.mousePressed(() => soundFX.player('wow').start());

let button7 = createButton('bekfast');
button7.position (150,200);
button7.mousePressed(() => soundFX.player('bekfast').start());

let button8 = createButton('bonk');
button8.position (150,250);
button8.mousePressed(() => soundFX.player('bonk').start());


}



function draw() {
  background(100,40,100);
  fill (50,200,100);
  text ("JAM ON", 50,50);
  
}
