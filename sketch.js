var car;
var wall;

var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var weight;
var deformation;


function setup() {

  createCanvas(windowWidth, windowHeight);

  background('black');

  car = createSprite(windowWidth/16, windowHeight/2, windowWidth/16, windowHeight/9);
  car.shapeColor = 'white';

  wall = createSprite(windowWidth - windowWidth/16, windowHeight/2, windowWidth/16, windowHeight);
  wall.shapeColor = 'grey';

}


function draw() {

  background('black');

  if (gamestate === PLAY) {

    if (keyDown('space')) {

    car.velocityX = Math.round(random(45, 60));

    weight = Math.round(random(1522, 3000));
    deformation = Math.round((0.5 * weight * car.velocityX * car.velocityX)/22500);
    console.log(deformation);

  }

  //console.log(car.velocityX);
  //console.log(weight);

}

  if (car.collide(wall)) {

    gamestate = END;
    
  }

  if (gamestate === END) {

    car.velocityX = 0;

    stroke('white');
    fill('white');
    textSize(50);
    text('Score:  ' + deformation, windowWidth/2-100, windowHeight/2);

    if (deformation > 180) {

      car.shapeColor = 'red';

    }

    if (deformation < 180 && deformation > 18) {

       car.shapeColor = 'orange';

    }

    if (deformation < 80) {

      car.shapeColor = 'green';
 
    }

  }

  drawSprites();  
 
}