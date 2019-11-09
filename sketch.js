var canvas,backgroundImage,gameState=0,playerCount=0;
var database,form,player,game;
function setup(){

    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);

   
}
function draw(){
    background("white");
  

}
