var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,100,200);
  fixedrect.shapeColor = "blue";
  movingrect=createSprite(50,100,200,100);
  movingrect.shapeColor="blue";
  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background("yellow");

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&movingrect.x-fixedrect.x>movingrect.width/-2+fixedrect.width/-2
    &&movingrect.y-fixedrect.y>movingrect.height/-2+fixedrect.height/-2){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  } else {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  drawSprites();
}