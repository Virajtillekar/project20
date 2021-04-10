var BGImg;
var cat,cat1,cat2;
var rat,rat1,rat2;

function preload() {
    //load the images here
    BGImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 =loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    rat1 = loadAnimation("images/mouse1.png");
    rat2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    rat3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,1000,800);
    bg.addImage("bg",BGImg);

    cat = createSprite(870,600);
    cat.addAnimation("cat",cat1);
    cat.scale = 0.2

    rat = createSprite(200,600);
    rat.addAnimation("rat",rat1);
    rat.scale = 0.15

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - rat.x < (cat.width - rat.width)/2) { 
        cat.velocityX=0; 
        cat.addAnimation("tomLastImage", cat3); 
        cat.x =300; 
        cat.scale=0.2;
         cat.changeAnimation("tomLastImage"); 
         rat.addAnimation("jerryLastImage",rat3); 
        rat.scale=0.15;
        rat.changeAnimation("jerryLastImage");
         }


    drawSprites();
}

function keyPressed(){
     if(keyCode === LEFT_ARROW){ 
         cat.velocityX = -5;
        cat.addAnimation("tomRunning", cat2);
        cat.changeAnimation("tomRunning");
        rat.addAnimation("jerryTeasing",rat2);
        rat.changeAnimation("jerryTeasing");
             } 
            }
