let seq1;
let bgMelody = ["C3", "A3", "E3", "G4"];
let seq2; //clear
let melody2 =["G4",null, "G5"];

  
  
  let reverb = new Tone.Freeverb(0);
  reverb.wet.value = 0;
  let delay = new Tone.FeedbackDelay(0, 0.5);
  delay.wet.value = 0.2;
  let vibrato = new Tone.Vibrato(5, 0.2);

  let polySynth = new Tone.PolySynth({
    oscillator: {
      type:"sine"
    },
    "envelope":{
      "attack": 0.01,
      "decay": 0.1,
      "release": 4,
    }
  });

polySynth.connect(reverb);
reverb.connect(delay);
delay.connect(vibrato);
vibrato.toDestination();

seq1 = new Tone.Sequence(function (time,note){
  polySynth.triggerAttackRelease(note, 0.8);
}, bgmelody, "2n");


seq2 = new Tone.Sequence(function (time,note){
  polySynth.triggerAttackRelease(note,0.8);
}, melody2,"8n");




//draw stuff

let selectedColor;
let button;

function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB,360,100,100);
  x = mouseX;
  y = mouseY;


  let btn = createButton ("clear");
  btn.position(3,210);
  btn.mousePressed(clear);


}


//draw
function draw() {

const r = color(0,100,100);
const o = color(35,100,100);
const yl = color(55,100,100);
const g = color(110,100,100);
const c = color(180,100,100);
const b = color(240,100,100);
const m = color(300,100,100);
const br = color(30,100,55);
const w = color(0,0,100);
const bl = color(0,100,0);

  noStroke();
  fill(r);
  square(0,0,20);
  noStroke();
  fill(o);
  square(0,20,20);
  noStroke();
  fill(yl);
  square(0,40,20);
  noStroke();
  fill(g);
  square(0,60,20);
  noStroke();
  fill(c);
  square(0,80,20);
  noStroke();
  fill(b);
  square(0,100,20);
  noStroke();
  fill(m);
  square(0,120,20);
  noStroke();
  fill(br);
  square(0,140,20);
  noStroke();
  fill(w);
  square(0,160,20);
  noStroke();
  fill(bl);
  square(0,180,20);


  
  if(mouseIsPressed){

    if(mouseX <= 20){
      if(mouseY <= 20){
        selectedColor = r;
      }
      if(mouseY <= 40 && mouseY >= 20){
        selectedColor = o;
      }
      if(mouseY <= 60 && mouseY >= 40){
        selectedColor = yl;
      }
      if(mouseY <= 80 && mouseY >= 60){
        selectedColor = g;
      }
      if(mouseY <= 100 && mouseY >= 80){
        selectedColor = c;
      }
      if(mouseY <= 120 && mouseY >= 100){
        selectedColor = b;
      }
      if(mouseY <= 140 && mouseY >= 120){
        selectedColor = m;
      }
      if(mouseY <= 160 && mouseY >= 140){
        selectedColor = br;
      }
      if(mouseY <= 180 && mouseY >= 160){
        selectedColor = w;
      }
      if(mouseY <= 200 && mouseY >= 180){
        selectedColor = bl;
      }
  
    }
    else{
    stroke(selectedColor);
    strokeWeight(5);
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
 
  }

}
