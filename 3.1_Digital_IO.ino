

const int ledPin = 13;
int ledState = LOW;

const int buttonPin1 = 2;
const int buttonPin2 = 4;
int buttonState1 = 0;
int buttonState2 = 0;
int lastButtonState1 = 0;
int lastButtonState2 = 0;
int buttonPushCounter1 = 0;
int buttonPushCounter2 = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);

  if (buttonState1 != lastButtonState1) {
   if (buttonState1 == HIGH) {
      buttonPushCounter1++;
      Serial.println("1 on");
      Serial.print("number of button1 pushes: ");
      Serial.println(buttonPushCounter1);
    }
    else {
      Serial.println("1 off");
    }
    delay(50); 
  }

lastButtonState1 = buttonState1;

  if (buttonState2 != lastButtonState2) {
    if (buttonState2 == HIGH) {
      buttonPushCounter2++;
      Serial.println("2 on");
      Serial.print("number of button2 pushes: ");
      Serial.println(buttonPushCounter2);
    }
    else {
      Serial.println("2 off");
    }
    delay(50);
  }

lastButtonState2 = buttonState2;

  if (buttonPushCounter1 % 2 == 0) {
    digitalWrite(ledPin, HIGH);
    delay(500);
    digitalWrite(ledPin, LOW);
    delay(1000);

  }
  else {
    digitalWrite(ledPin, LOW);
  }


  if (buttonPushCounter2 % 2 == 0){
    digitalWrite(ledPin, HIGH);
    delay(10);
    digitalWrite(ledPin, LOW);
    delay(30);
  }
  else {
    digitalWrite(ledPin, LOW);
  }
}


