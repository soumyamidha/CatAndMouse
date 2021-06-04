var background , background_image;
var cat , catImage1, catImage2 , catImage3;
var mouse , mouseImage1 , mouseImage2,mouseImage3 ;

function preload() {
background_image = loadImage("images/garden.png");
catImage1=loadImage("images/cat1.png");
mouseImage1=loadImage("images/mouse1.png");
catImage2=loadImage("images/cat2.png", "images/cat3.png");
mouseImage2=loadImage("images/mouse2.png" , "images/mouse3.png");
catImage3=loadImage("images/cat4.png");
mouseImage3=loadImage("images/mouse4.png");
}

function setup() {
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImage1);
    mouse.scale = 0.15;
}

function draw() {
   background(background_image);

   if(cat.x - mouse.x < (cat.width - mouse.width)/2)
   { 
       cat.velocityX= 0;
       cat.addAnimation("catLastImage", catImage3);
       cat.x =300;
       cat.scale=0.2;
       cat.changeAnimation("catLastImage");
       mouse.addAnimation("mouseLastImage", mouseImage3);
       mouse.scale=0.15;
       mouse.changeAnimation("mouseLastImage");
   } 


   keyPressed();
  drawSprites();
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImage2);
       cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImage2);
        mouse.frameDelay = 25;
       mouse.changeAnimation("mouseTeasing");
    }
}



