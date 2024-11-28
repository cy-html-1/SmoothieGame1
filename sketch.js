let gameState = "current game state";  // Tracks the current state of the game
// Initial message
let currentMessage = "Welcome to Good Smoothies. Select from menu: \n \n S for strawberry 🍓\n V for vanilla 🌸\n C for chocolate 🍫\n \n X to void transaction";
let menu = "S for strawberry 🍓 \n V for vanilla 🌸\n C for chocolate \n O to review order \n X to cancel the order ";
let smoothieS="Strawberry smoothie selected 🍓";
let smoothieV="Vanilla smoothie selecte🌸";
let smoothieC="Chocolate smoothie selected 🍫";
let review="Review Order";
let cancelled="Order Cancelled";
let smallSize;
let mediumSize;
let largeSize;
let music; //audio variable
//let dFont;
let jumboSize;
let arrsmoothieSize=[0,1,2] //Arrays for smoothie sizes in small, medium, and large
//🌸🥛🥤🧋💸💳💵💰💲 //Emoji library to use in game

//Media
let sofiaFont;
let chocolateSmoothie;
let strawberrySmoothie1;
let vanillaSmoothie;

let selectedFlavor;

function preload(){
  chocolateSmoothie=loadImage("chocolateSmoothiecom.jpg");
  strawberrySmoothie1=loadImage("strawberrySmoothie1com.png");
  vanillaSmoothie=loadImage("vanillaSmoothiecom.png");
  //dFont=loadFont("DeliusSwashCaps-Regular.ttf");
  music=loadSound("last-night-nick-petrov-main-vers_comp.mp3");
  /*
  Music from #Uppbeat (free for Creators!):
  https://uppbeat.io/t/nick-petrov/last-night
  License code: D6BCXHINWRH9AJHB
  */
}


function setup() {
  createCanvas(600, 400);
  textSize(20);
  stroke(3);
  //textFont(dFont);
  slider = createSlider(0, 1, 0.50, 0.01);
  music.loop();
 
}
function smoothieCup(x, y, size, color) {
  push();
    
  translate(x,y);
  scale(size); //scale the cup
  
  //straw
  fill(209, 204, 199);
  noStroke();
  //push();
  fill(245, 245, 245);
  rect( 222,150,13,100); //straw
  //pop();
  
  //bottom cup holder
  //push();
  fill(230, 222, 213);
  rect(208, 240, 40, 80); //bottom cup holder
  //pop();
  
  //middle section
  //push();
  fill(191, 190, 186);
  rect(200, 200, 55, 80);
  //pop();
   rect(200,200,55,15); //stripe
  //push();
  fill(97, 94, 92);
  rect(200,200,55,15); //stripe
  //pop();
  arc(228, 200, 55, 55, PI, TWO_PI); //top
  
  pop();

}

function draw() {
  
  background(255, 254, 224);
  music.setVolume(slider.value());
  // Display the message to the player
  fill(0);
  textAlign(CENTER);
  text(currentMessage, width / 2, height / 2.6);
  if(selectedFlavor != null){
    image(selectedFlavor,300, 53, 60,60);
    
  }
  
  push();
  //Interactive emojis
  textSize(60)
  //text("🌸", 100, 250); //flower
  text("🧋", mouseX, mouseY); //smoothie cursor for tracker or mouse
  //text("🧋", touchX, touchY); //smoothie cursor touch
  pop();
  
  sofiaFont=loadFont("sofiaRegular.ttf");
                  
  //image(chocolateSmoothie, 300,300, 40, 40);
  //image(strawberrySmoothie1, 300, 300,40, 40);
  //image(vanillaSmoothie, 300,300, 40, 40);
  

}  
function keyPressed(){   
  textAlign(CENTER);
  text(currentMessage, width / 2, height / 2.6);
  selectedFlavor=null;
  if(key==='M' || key==='m'){
     currentMessage = "Welcome to Good Smoothies. Select from menu: \n \n S for strawberry 🍓 \n V for vanilla 🌸 \n C for chocolate 🍫 ";
  } else if(key==='0'){
    currentMessage="No cashback \n \n \n \n I to receive order";
  } else if(key==='1'){
    currentMessage="10% tip received 💸 \n \n Thank you! \n \n i to receive order";
  } else if(key==='2'){
    currentMessage="15% tip received 💸 \n \n Thank you! \n \n i to receive order";
  } else if(key==='3'){
    currentMessage="20% tip received 💸 \n \n Thank you! \n \n i to receive order";
  //} else if(key==='9'){
    //currentMessage="Thank you for stopping by Good Smoothies \n \n Thank you for for your business! \n Come back soon 😊 \n \n Z to exit game \n \n M for main menu";
  } else if(key==='/'){
    currentMessage="Cashback cancelled \n \n i to receive order";
  } else if(key==='!'){
    currentMessage="One smoothie coming up! \n \n A to add to order \n T to subtract item \n \n O to review order \n P for payment";
  } else if(key==='@'){
    currentMessage="Two smoothies coming up! \n \n A to add to order \n T to subtract item \n \n O to review order \n P for payment";
  } else if(key==='#'){
    currentMessage="Three smoothies coming up! \n \n A to add to order \n T to subtract item \n \n O to review order \n P for payment";
 } else if(key==='A' || key==='a'){
    currentMessage="Item added to order \n \n T to subtract item \n O to review order \n P for payment \n \n X to void transaction \n M for main menu";   //Improve on how to add to order
  } else if(key==='B' || key==='b'){
    currentMessage="Large size selected \n \n Q for quantity \n \n X to void transaction \n M for main menu";
  } else if(key==='C' || key==='c'){
      currentMessage="Chocolate flavor selected 🍫 \n \n K for milk type 🥛 \n \n X to void transaction \n M for main menu"; 
    selectedFlavor=chocolateSmoothie;
    
  } else if(key==='D' || key==='d'){
     currentMessage='Debit card payment received 💳 \n \n F to tip \n i to recive order'; //Consider adding a cashback feature
  } else if(key==='E' || key==='e'){
     currentMessage='$10 cashback \n \n i to recive order'; //Consider adding a cashback feature
 } else if(key==='F' || key==='f'){
    currentMessage="How much would you like to tip? \n \n 1 for 10% \n 2 for 15% \n 3 for 20% \n \n X to void transaction \n M for main menu"; //3 was for 15% and 2 for 20%
  } else if(key==='G' || key==='g'){
    currentMessage="Gift card payment received 💳 \n \n F to tip \n i to receive order";
  //} else if(key==='H' || key==='h'){
    //currentMessage="Cash payment received 💵 \n \n % to receive change\n F //to tip \n I to receive order"; //The soothie shop no longer accepts cash payments
  } else if(key==='I' || key==='i'){
    currentMessage="Order served up! \n \n Thank you for stopping by Good Smoothies! \n \n Come back soon 😊 \n \n \n Z to exit game \n \n M for main menu";
  } else if(key==='J' || key==='j'){
    currentMessage="Jumbo size selected \n \n Q for quantity \n \n X to void transaction \n M for main menu";
  } else if(key==='K' || key==='k'){
    currentMessage="Y for soy milk \n \n \n L for almond milk";
  } else if(key==='L' || key==='l'){
    currentMessage="Almond milk selected \n \n U for size \n \n X to void transaction \n M for main menu";
  } else if(key==='N' || key==='n'){
    currentMessage="Medium size selected \n \n Q for quantity \n \n X to void transaction \n M for main menu";
  } else if(key==='O' || key==='o'){
      currentMessage="Order Overview \n \n A to add item\n T to subtract item \n P for payment \n \n X to void transaction \n M for main menu";  
  } else if(key==='P' || key==='p'){
    currentMessage="Would you like to pay with a credit, debit, or gift card? \n \n R for credit \n D for debit \n G for gift card \n \n X to void transaction \n M for main menu"; //Improve on how to subtract
  } else if(key==='Q' || key==='q'){
    currentMessage='How many smoothies would you like to order? \n \n ! for one smoothie \n @ for two smoothies \n # for three smoothies \n \n X to void transaction \n M for main menu';
  } else if(key==='R' || key==='r'){
    currentMessage="Credit card payment received 💳 \n \n F to tip \n i to receive order";
  }else if(key==='S' || key==='s'){
      currentMessage="\n \n Strawberry flavor selected 🍓 \n \n K for milk type 🥛 \n \n X to void transaction \n M for main menu"; 
    selectedFlavor=strawberrySmoothie1;
  } else if(key==='T' || key==='t'){
    currentMessage="Item subtracted from order \n \n A to add item \n T to subtract item \n O to review order \n P for payment \n \n X to void transaction \n M for main menu";   //Improve on how to subtract
  } else if(key==='U' || key==='u'){
    currentMessage="Select smoothie size \n \n W for small \n N for medium \n B for large \n J for jumbo \n \n X to void transaction \n M for main menu";
  } else if(key==='V' || key==='v'){
      currentMessage="Vanilla flavor selected 🌸 \n \n K for milk type 🥛 \n \n X to void transaction \n M for main menu"; 
     selectedFlavor=vanillaSmoothie;
  } else if(key==='W' || key==='w'){
    currentMessage="Small size selected \n \n Q for quantity \n \n X to void transaction \n M for main menu";
  } else if(key==='X' || key==='x'){
      currentMessage="Ordered cancelled \n \n Come back soon  👋🙂 \n \n M for main menu";
  } else if(key==='Z' || key==='z'){
    currentMessage="End of game \n \n Come back for more 🥤😃 \n \n M for main menu";
  } else if(key==='Y' || key==='y')
    currentMessage="Soy milk selected \n \n U for size \n \n X to void transaction \n M for main menu";
}
//function menuStart() {
   // the start state
//let smoothieQuantityOptions= [0,1,2,3,4,5]
  
  if (gameState==="start") {
     currentMessage = "Welcome to Good Smoothies. Select from menu: \n \n S for a strawberry smoothie 🍓 \n V for a vanilla smoothie 🌸 \n C for a chocolate smoothie 🍫 \n \n X to void transaction";
  //} else if (key==='M' || key==='m'){
     //currentMessage = "Welcome to Good Smoothies. Select from menu: \n S //for a strawberry smoothie \n V for a vanilla smoothie\n C for a chocolate //smoothie \n O to review order \n X to cancel the order";
 }