var PLAY=1;
var END=0;
var gameState=PLAY;
var playerenemy,playerememyImage;
var cheery,cheeryImage;

var pacman,pacmanImage;
var pacmansound1,pacmansound2;
var ghost_red,ghost_blue,ghost_pink,ghost_green;
var lives,score;


function preload(){
  //load image
  cheeryImage=loadImage("cheery.png");

  pacmanImage=loadImage("pacman.png");
  ghost_redImage=loadImage("ghost red.png");
  ghost_greenImage=loadImage("ghost green.png")
  ghost_blueImage=loadImage("ghost blue.png");
  ghost_pinkImage=loadImage("ghost pink.png");
  //load sound
  pacmansound1=loadSound("Pacman-sound.mp3");
  pacmansound2=loadSound("pacman_eatfruit.wav");
}

function setup(){
  createCanvas(500,400);
    board1=createSprite(1,118,115,8);
    board2=createSprite(5,60,15,700);
    board3=createSprite(1,152,115,8);
    board4=createSprite(60,94,8,55);
    board5=createSprite(60,175,8,55);
    board6=createSprite(40,200,40,8);
    board7=createSprite(40,70,40,8);
    board8=createSprite(20,40,8,60);
    board9=createSprite(241,0,800,8);
    board10=createSprite(248,15,450,8);
    board11=createSprite(24,290,8,180);
    board12=createSprite(200,400,800,8);
    board13=createSprite(245,380,443,8);
    board14=createSprite(100,280,8,60);
    board15=createSprite(84,250,40,8);
    board16=createSprite(120,340,120,8);
    board17=createSprite(135,310,8,60);
    board18=createSprite(180,260,40,8);
    board19=createSprite(210,290,80,8);
    board20=createSprite(220,319,8,50);
    board21=createSprite(300,260,40,8);
    board22=createSprite(290,200,8,50)
    board23=createSprite(300,177,100,8);
    board24=createSprite(340,210,40,8);
    board25=createSprite(255,160,90,8);
    board26=createSprite(210,135,8,50);
    board27=createSprite(221,109,30,8);
    board28=createSprite(300,135,8,50);
    board29=createSprite(289,110,30,8);
    board30=createSprite(380,300,100,8);
    board31=createSprite(400,325,8,50);
    boars32=createSprite(280,330,8,40);
    board33=createSprite(490,200,15,370);
    board34=createSprite(470,42,8,60);
    board35=createSprite(453,70,40,8);
    borad36=createSprite(438,95,8,55);
    board37=createSprite(460,120,57,8);
    board38=createSprite(460,150,57,8);
    board39=createSprite(435,175,8,55);
    board40=createSprite(456,200,35,8);
    board41=createSprite(470,290,8,180);
    board42=createSprite(250,45,100,8);
    board43=createSprite(250,65,8,40);
    board44=createSprite(366,90,8,100);
    board45=createSprite(340,80,60,8);
    board46=createSprite(150,95,8,100);
    board47=createSprite(173,85,50,8);
    board48=createSprite(100,95,8,50);
    board49=createSprite(110,90,20,8);
    board50=createSprite(170,210,100,8);
    board51=createSprite(220,190,8,40);
    board52=createSprite(390,200,8,50);
    board53=createSprite(400,260,50,8);
    board54=createSprite(150,185,8,40);
    board55=createSprite(110,175,40,8);
    
    pacman=createSprite(250,100,20,20);
    pacman.addImage(pacmanImage);
    pacman.scale=0.1;
  
  
    ghost_red=createSprite(230,170,20,20);
    ghost_red.addImage(ghost_redImage);
    ghost_red.scale=0.1;
  
  
    ghost_blue=createSprite(270,140,20,20);
    ghost_blue.addImage(ghost_blueImage);
    ghost_blue.scale=0.1;
  
  
    ghost_pink=createSprite(390,120,20,20);
    ghost_pink.addImage(ghost_pinkImage);
    ghost_pink.scale=0.2;
  
  
    ghost_green=createSprite(120,100,20,20);
    ghost_green.addImage(ghost_greenImage);
    ghost_green.scale=0.1;
    
  
  
  
   edge=createEdgeSprites();

  
  
    
  }

function draw(){
  background("black");
  
  if( gameState===PLAY){
  
  if(keyDown("left")){
    pacman.x=pacman.x-4;
  }
  if(keyDown("right")){
    pacman.x=pacman.x+4;
  }
    if(keyDown("up")){
    pacman.y=pacman.y-4;
  }
  if(keyDown("down")){
    pacman.y=pacman.y+4;
  }
    if(pacman.isTouching(ghost_red)){
      gameState=END;
    }
     if(pacman.isTouching(ghost_blue)){
      gameState=END;
    }
     if(pacman.isTouching(ghost_green)){
      gameState=END;
    }
     if(pacman.isTouching(ghost_pink)){
      gameState=END;
    }
    
  ghost_red.x=pacman.x
  ghost_blue.x=pacman.x
  ghost_green.y=pacman.y
  ghost_pink.y=pacman.y
    
  }
  
  if( gameState===END){
  
    if(pacman.isTouching(ghost_blue)){
      text("GAMEOVER",220,200);
      textSize(5000);
    }
    if(pacman.isTouching(ghost_red)){
      text("GAMEOVER",220,200);
      textSize(5000);
    }
    if(pacman.isTouching(ghost_green)){
      text("GAMEOVER",220,200);
      textSize(5000);
    }
    if(pacman.isTouching(ghost_pink)){
      text("GAMEOVER",220,200);
      textSize(5000);
    }
  }  
  //edge and pacman
    
   pacman.bounceOff(edge);
   pacman.bounceOff(board1);
   pacman.bounceOff(board2);
   pacman.bounceOff(board3);
   pacman.bounceOff(board4);
   pacman.bounceOff(board5);
   pacman.bounceOff(board6);
   pacman.bounceOff(board7);
   pacman.bounceOff(board8);
   pacman.bounceOff(board9);
   pacman.bounceOff(board10);
   pacman.bounceOff(board11);
   pacman.bounceOff(board12);  
   pacman.bounceOff(board13);
   pacman.bounceOff(board14);
   pacman.bounceOff(board15);  
   pacman.bounceOff(board16);
   pacman.bounceOff(board17);
   pacman.bounceOff(board18);  
   pacman.bounceOff(board19);
   pacman.bounceOff(board20);
   pacman.bounceOff(board21);  
   pacman.bounceOff(board22);
   pacman.bounceOff(board23);  
   pacman.bounceOff(board24);
   pacman.bounceOff(board25); 
   pacman.bounceOff(board26);  
   pacman.bounceOff(board27);
   pacman.bounceOff(board28);  
   pacman.bounceOff(board29);
   pacman.bounceOff(board30); 
   pacman.bounceOff(board31);
   pacman.bounceOff(board33);
   pacman.bounceOff(board34);  
   pacman.bounceOff(board35);
   pacman.bounceOff(board37);  
   pacman.bounceOff(board38);
   pacman.bounceOff(board39);  
   pacman.bounceOff(board40);
   pacman.bounceOff(board41); 
   pacman.bounceOff(board42);
   pacman.bounceOff(board43); 
   pacman.bounceOff(board44);
   pacman.bounceOff(board45); 
   pacman.bounceOff(board46);
   pacman.bounceOff(board47); 
   pacman.bounceOff(board48);
   pacman.bounceOff(board49); 
   pacman.bounceOff(board50);
   pacman.bounceOff(board51); 
   pacman.bounceOff(board52);
   pacman.bounceOff(board53); 
   pacman.bounceOff(board54);
   pacman.bounceOff(board55); 

    //red
    
   ghost_red.bounceOff(board1);
   ghost_red.bounceOff(board2);
   ghost_red.bounceOff(board3);
   ghost_red.bounceOff(board4);
   ghost_red.bounceOff(board5);
   ghost_red.bounceOff(board6);
   ghost_red.bounceOff(board7);
   ghost_red.bounceOff(board8);
   ghost_red.bounceOff(board9);
   ghost_red.bounceOff(board10);
   ghost_red.bounceOff(board11);
   ghost_red.bounceOff(board12);  
   ghost_red.bounceOff(board13);
   ghost_red.bounceOff(board14);
   ghost_red.bounceOff(board15);  
   ghost_red.bounceOff(board16);
   ghost_red.bounceOff(board17);
   ghost_red.bounceOff(board18);  
   ghost_red.bounceOff(board19);
   ghost_red.bounceOff(board20);
   ghost_red.bounceOff(board21);  
   ghost_red.bounceOff(board22);
   ghost_red.bounceOff(board23);  
   ghost_red.bounceOff(board24);
   ghost_red.bounceOff(board25); 
   ghost_red.bounceOff(board26);  
   ghost_red.bounceOff(board27);
   ghost_red.bounceOff(board28);  
   ghost_red.bounceOff(board29);
   ghost_red.bounceOff(board30); 
   ghost_red.bounceOff(board31);
   ghost_red.bounceOff(board33);
   ghost_red.bounceOff(board34);  
   ghost_red.bounceOff(board35);
   ghost_red.bounceOff(board37);  
   ghost_red.bounceOff(board38);
   ghost_red.bounceOff(board39);  
   ghost_red.bounceOff(board40);
   ghost_red.bounceOff(board41); 
   ghost_red.bounceOff(board42);
   ghost_red.bounceOff(board43); 
   ghost_red.bounceOff(board44);
   ghost_red.bounceOff(board45); 
   ghost_red.bounceOff(board46);
   ghost_red.bounceOff(board47); 
   ghost_red.bounceOff(board48);
   ghost_red.bounceOff(board49); 
   ghost_red.bounceOff(board50);
   ghost_red.bounceOff(board51); 
   ghost_red.bounceOff(board52);
   ghost_red.bounceOff(board53); 
   ghost_red.bounceOff(board54);
   ghost_red.bounceOff(board55); 
    
    //blue
    
   ghost_blue.bounceOff(board1);
   ghost_blue.bounceOff(board2);
   ghost_blue.bounceOff(board3);
   ghost_blue.bounceOff(board4);
   ghost_blue.bounceOff(board5);
   ghost_blue.bounceOff(board6);
   ghost_blue.bounceOff(board7);
   ghost_blue.bounceOff(board8);
   ghost_blue.bounceOff(board9);
   ghost_blue.bounceOff(board10);
   ghost_blue.bounceOff(board11);
   ghost_blue.bounceOff(board12);  
   ghost_blue.bounceOff(board13);
   ghost_blue.bounceOff(board14);
   ghost_blue.bounceOff(board15);  
   ghost_blue.bounceOff(board16);
   ghost_blue.bounceOff(board17);
   ghost_blue.bounceOff(board18);  
   ghost_blue.bounceOff(board19);
   ghost_blue.bounceOff(board20);
   ghost_blue.bounceOff(board21);  
   ghost_blue.bounceOff(board22);
   ghost_blue.bounceOff(board23);  
   ghost_blue.bounceOff(board24);
   ghost_blue.bounceOff(board25); 
   ghost_blue.bounceOff(board26);  
   ghost_blue.bounceOff(board27);
   ghost_blue.bounceOff(board28);  
   ghost_blue.bounceOff(board29);
   ghost_blue.bounceOff(board30); 
   ghost_blue.bounceOff(board31);
   ghost_blue.bounceOff(board33);
   ghost_blue.bounceOff(board34);  
   ghost_blue.bounceOff(board35);
   ghost_blue.bounceOff(board37);  
   ghost_blue.bounceOff(board38);
   ghost_blue.bounceOff(board39);  
   ghost_blue.bounceOff(board40);
   ghost_blue.bounceOff(board41); 
   ghost_blue.bounceOff(board42);
   ghost_blue.bounceOff(board43); 
   ghost_blue.bounceOff(board44);
   ghost_blue.bounceOff(board45); 
   ghost_blue.bounceOff(board46);
   ghost_blue.bounceOff(board47); 
   ghost_blue.bounceOff(board48);
   ghost_blue.bounceOff(board49); 
   ghost_blue.bounceOff(board50);
   ghost_blue.bounceOff(board51); 
   ghost_blue.bounceOff(board52);
   ghost_blue.bounceOff(board53); 
   ghost_blue.bounceOff(board54);
   ghost_blue.bounceOff(board55); 

    //pink
    
   ghost_pink.bounceOff(board1);
   ghost_pink.bounceOff(board2);
   ghost_pink.bounceOff(board3);
   ghost_pink.bounceOff(board4);
   ghost_pink.bounceOff(board5);
   ghost_pink.bounceOff(board6);
   ghost_pink.bounceOff(board7);
   ghost_pink.bounceOff(board8);
   ghost_pink.bounceOff(board9);
   ghost_pink.bounceOff(board10);
   ghost_pink.bounceOff(board11);
   ghost_pink.bounceOff(board12);  
   ghost_pink.bounceOff(board13);
   ghost_pink.bounceOff(board14);
   ghost_pink.bounceOff(board15);  
   ghost_pink.bounceOff(board16);
   ghost_pink.bounceOff(board17);
   ghost_pink.bounceOff(board18);  
   ghost_pink.bounceOff(board19);
   ghost_pink.bounceOff(board20);
   ghost_pink.bounceOff(board21);  
   ghost_pink.bounceOff(board22);
   ghost_pink.bounceOff(board23);  
   ghost_pink.bounceOff(board24);
   ghost_pink.bounceOff(board25); 
   ghost_pink.bounceOff(board26);  
   ghost_pink.bounceOff(board27);
   ghost_pink.bounceOff(board28);  
   ghost_pink.bounceOff(board29);
   ghost_pink.bounceOff(board30); 
   ghost_pink.bounceOff(board31);
   ghost_pink.bounceOff(board33);
   ghost_pink.bounceOff(board34);  
   ghost_pink.bounceOff(board35);
   ghost_pink.bounceOff(board37);  
   ghost_pink.bounceOff(board38);
   ghost_pink.bounceOff(board39);  
   ghost_pink.bounceOff(board40);
   ghost_pink.bounceOff(board41); 
   ghost_pink.bounceOff(board42);
   ghost_pink.bounceOff(board43); 
   ghost_pink.bounceOff(board44);
   ghost_pink.bounceOff(board45); 
   ghost_pink.bounceOff(board46);
   ghost_pink.bounceOff(board47); 
   ghost_pink.bounceOff(board48);
   ghost_pink.bounceOff(board49); 
   ghost_pink.bounceOff(board50);
   ghost_pink.bounceOff(board51); 
   ghost_pink.bounceOff(board52);
   ghost_pink.bounceOff(board53); 
   ghost_pink.bounceOff(board54);
   ghost_pink.bounceOff(board55); 
  
    
    //green

   ghost_green.bounceOff(board1);
   ghost_green.bounceOff(board2);
   ghost_green.bounceOff(board3);
   ghost_green.bounceOff(board4);
   ghost_green.bounceOff(board5);
   ghost_green.bounceOff(board6);
   ghost_green.bounceOff(board7);
   ghost_green.bounceOff(board8);
   ghost_green.bounceOff(board9);
   ghost_green.bounceOff(board10);
   ghost_green.bounceOff(board11);
   ghost_green.bounceOff(board12);  
   ghost_green.bounceOff(board13);
   ghost_green.bounceOff(board14);
   ghost_green.bounceOff(board15);  
   ghost_green.bounceOff(board16);
   ghost_green.bounceOff(board17);
   ghost_green.bounceOff(board18);  
   ghost_green.bounceOff(board19);
   ghost_green.bounceOff(board20);
   ghost_green.bounceOff(board21);  
   ghost_green.bounceOff(board22);
   ghost_green.bounceOff(board23);  
   ghost_green.bounceOff(board24);
   ghost_green.bounceOff(board25); 
   ghost_green.bounceOff(board26);  
   ghost_green.bounceOff(board27);
   ghost_green.bounceOff(board28);  
   ghost_green.bounceOff(board29);
   ghost_green.bounceOff(board30); 
   ghost_green.bounceOff(board31);
   ghost_green.bounceOff(board33);
   ghost_green.bounceOff(board34);  
   ghost_green.bounceOff(board35);
   ghost_green.bounceOff(board37);  
   ghost_green.bounceOff(board38);
   ghost_green.bounceOff(board39);  
   ghost_green.bounceOff(board40);
   ghost_green.bounceOff(board41); 
   ghost_green.bounceOff(board42);
   ghost_green.bounceOff(board43); 
   ghost_green.bounceOff(board44);
   ghost_green.bounceOff(board45); 
   ghost_green.bounceOff(board46);
   ghost_green.bounceOff(board47); 
   ghost_green.bounceOff(board48);
   ghost_green.bounceOff(board49); 
   ghost_green.bounceOff(board50);
   ghost_green.bounceOff(board51); 
   ghost_green.bounceOff(board52);
   ghost_green.bounceOff(board53); 
   ghost_green.bounceOff(board54);
   ghost_green.bounceOff(board55); 
  
   drawSprites();
}
  
 
  

