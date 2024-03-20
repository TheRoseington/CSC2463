function preload(){
  sand = loadImage('assets/sandman.jpeg')
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  if (mouseIsPressed ===true){
    background(sand);
  }
  else if (mouseIsPressed === false){
    background(240);
    text('Press mouse', 100, height/3);
  }
}



let synth  = new Tone.FMSynth();
let ping = new Tone.PingPongDelay("4n",0.4);
let trem = new Tone.Tremolo(9, 0.75);
let ster = new Tone.StereoWidener(0);



synth.connect(trem);
trem.connect(ster);
ster.connect(ping);
ping.toDestination();

function mousePressed(){
  synth.triggerAttack('F6');
}
function mouseReleased(){
  synth.triggerRelease();
}