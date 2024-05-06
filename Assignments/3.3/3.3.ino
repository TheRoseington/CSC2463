const int buzPin = 8;
const int potPin = A0;
int potVal = 0;


void setup() {
  Serial.begin(9600);
  pinMode(buzPin, OUTPUT);
}


void loop() {
/*
  tone(buzPin, 2000);
  delay(1000);
  noTone(buzPin);
  delay(1000);
*/
  potVal = analogRead(potPin);
  Serial.println(potVal);
  delay(16);
  
}

