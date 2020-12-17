var bullet, wall, thickness;
var speed, weight;
var bulletWeight;
var lbullet, lwall;
var damage

function setup(){

bullet = createSprite(100,200,50,50);
wall = createSprite(1200,200,thickness,height/2);

speed = random(223,321);
weight = random(30,52);

thickness = random(15,55);
bulletWeight = 32;

bullet.velocityX = speed;

}

function draw(){
 createCanvas(1600,400);
 background(200);

if(hasCollided(bullet, wall)){
    
   console.log (damage);

    bullet.velocityX = 0;
    damage = 0.5 * bulletWeight * speed * speed/wall.width * wall.width * wall.width;

    if(damage <15){
        bullet.shapeColor = color(255,0,0);
    }

    if(damage >15){
        bullet.shapeColor = color(0,255,0);
    }

}
     
     drawSprites();
}

function hasCollided(lbullet, lwall){
    bullet.RightEdge = lbullet.x + lbullet.width;
    wall.LeftEdge = lwall.x;
    if(bullet.RightEdge >= wall.LeftEdge){
       return true;
    }

    return false;
}