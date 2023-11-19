var blockSize=25;
var rows=20;
var cols =20;
var board;
var context;

var snakeX= blockSize*5;
var snakeY=blockSize*5;
var velocityX=0;
var velocityY=0;
var foodX;
var foodY;

var gameOver=false;

window.onload=function()
{
    board=document.getElementById("board");
    board.height =rows*blockSize;
    board.width=cols*blockSize;
    context= board.getContext("2d");
    
    placeFood();
    document.addEventListener("keyup",changeDirection);
    setInterval(update,1000/10);


}

function update()
{
    if(gameOver){
        return;
    }
    
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="red";
    context.fillRect(foodX,foodY,blockSize,blockSize);

    if(snakeX==foodX && snakeY==foodY){
        placeFood()
    }


    context.fillStyle="lime";
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    
    if(snakeX<0 ||snakeX <cols*blockSize || snakeY<0 || snakeY< rows*blocksize){
        gameover=true;
        alert("GAME OVER!");
    }
    
}

function placeFood()
{
    foodX=Math.floor(Math.random()*cols)*blockSize;
    foodY=Math.floor(Math.random()*rows)*blockSize;
}


function changeDirection(e)
{
   if (e.code=="ArrowUp" && velocityY !=1){
    velocityX=0;
    velocityY=-1;
   }

   else if (e.code=="ArrowRight" && velocityX !=-1){
    velocityX=1;
    velocityY=0;
   }

   else if (e.code=="ArrowDown" && velocityY!=1)
   {
    velocityX=0;
    velocityY=1;
   }

   if (e.code=="ArrowLeft" && velocityX !=1)
   {
    velocityX=-1;
    velocityY=0;
   }
}
