var robots = require('./robots');

var counter = 0;


robots.robotTwo.moveLeft = function(){
  robots.robotTwo.moveTwo("left");
}

robots.robotOne.moveRight = function(){
  robots.robotOne.moveTwo('right');
}


function moveTogether(){
  robots.robotOne.moveRight();
  robots.robotTwo.moveLeft();
  counter++
  if(robots.checkCollision()){
    return counter;
  }else{
    return moveTogether();
  }
}

console.log(moveTogether());
