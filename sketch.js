let port;
let connectButton;
let inData;
let outByte = 0;
let buzzerOn = false;


function setup() {
  createCanvas(400, 400);
  background (220);
  port = createSerial();

  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
}


function draw() {

  let str = port.readUntil("\n");
  text(str, 20, 20);

  angleMode(DEGREES);
  let rotDeg = map(str, 0, 1023, 0, 360);
  translate(width/2, height/2);
  rotate(rotDeg);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
  //square.mouseMoved(buzz);
  /*
  //checking if the mouse is within the square
  if (mouseX >= squareX && mouseX <= squareX + squareSize && mouseY >= squareY && mouseY <= squareY + squareSize){
    if (!buzzerOn){
      console.log("Buzzer ON");
      buzzerOn = true;
    }
  } else {
    if (buzzerOn){
      console.log("Buzzer OFF");
      buzzerOn = false;
    } 
  }
   */ 
}

function connect(){
  if (!port.opened()){
    port.open('Arduino', 9600);
  }else{
    port.close();
  }
} 

function buzz() {
  let c = random(['red','yellow','blue']);
  background(c);
}