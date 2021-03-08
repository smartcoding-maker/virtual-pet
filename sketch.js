var dog,sadDog,happyDog;
var foodStock,foodS,FeedTime,LastFed
var foodObj,database

function preload(){

  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  fullBottle=loadImage("Images/Milk.png");
  emptyBottle=loadImage("Images/milkImage.png")
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  milk=createSprite(200,200,150,150);
  milk.addImage(fullBottle);
  milk.scale=0.15;
  feed=createButton("FEED THE DOG")
  feed.position(700,95)
  feed.mousePressed(feedDog)
}

function draw() {
  background(46,139,87);
  drawSprites();
}
function feedDog(){
  dog.addImage(happyDog)
  milk.addImage(emptyBottle)
}
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
