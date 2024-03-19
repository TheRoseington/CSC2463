let button = [];
let synth = new Tone.PolySynth();
let bend = new Tone.PitchShift();
let reverb = new Tone.Freeverb(0.05);
let feedback = new Tone.FeedbackDelay("8n", 0.4);
let crusher = new Tone.BitCrusher(3);

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();


let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}


function setup() {
  createCanvas(400, 400);

pitchSlider = createSlider(-12, 12, 0, 0.1);
pitchSlider.position (120, 200);
pitchSlider.mouseMoved(()=> bend.pitch = pitchSlider.value());
}


function keyPressed(){
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased(){
  let playNotes = notes[key];
  synth.triggerRelease(playNotes);
}


function draw() {

  background(250, 175, 140);
  text ('play A-K for synth', 140, 180);


  let button1 = createButton('Feedback On');
  button1.position (100,230);
  button1.mousePressed(()=>synth.connect(feedback).start())
  feedback.toDestination();

  let button2 = createButton('Feedback Off');
  button2.position (200,230);
  button2.mousePressed(()=>synth.disconnect(feedback).start());


  let button3 = createButton('Reverb On');
  button3.position (100,260);
  button3.mousePressed(()=>synth.connect(reverb).start())
  reverb.toDestination();

  let button4 = createButton('Reverb Off');
  button4.position (200,260);
  button4.mousePressed(()=>synth.disconnect(reverb).start());


  let button5 = createButton('Bit On');
  button5.position (100,290);
  button5.mousePressed(()=>synth.connect(crusher).start())
  
  crusher.toDestination();

  let button6 = createButton('Bit Off');
  button6.position (200,290);
  button6.mousePressed(()=>synth.disconnect(crusher).start());
}
