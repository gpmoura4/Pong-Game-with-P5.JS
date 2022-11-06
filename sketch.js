//variáveis Bola
// (B) = Bola

let xB = 300;
let yB = 300;
let diametroB = 14;
let raio = diametroB/2;
let speedXB = 3;
let speedYB = 2;


//variáveis Raquete
// (R) = Raquete

let xR = 10;
let yR = 300;
let widthR = 10;
let heightR = 80;

let xR2 = 578;
let yR2 = 300;
let widthR2 = 10;
let heightR2 = 80;
let speedR2;

let hit = false;

//variáveis placar

let pontosR1 = 0;
let pontosR2 = 0;

//variáveis sons

var raquetada;
var ponto;
var trilha;

  function preload (){
    trilha = loadSound("trilha.mp3");
    raquetada = loadSound("raquetada.mp3");
    ponto = loadSound("ponto.mp3");
    
  }

function setup() {
  createCanvas(600, 600); // width and height, respectivamente
  trilha.loop();
}

function draw() {
  
  background(255);
  
  // (B) = Bola
  mostraB();
  movimentaB();
  rebateBorda();
  
  // (R) = Raquete
  mostraR(xR, yR);
  mostraR(xR2, yR2);
  
  //rebateR ();
  
  movimentaR();
  movimentaR2();

  rebateRLibrarie( xR, yR , widthR, heightR);
  rebateRLibrarie(xR2, yR2, widthR2, heightR2);
  
  placar();
  mostraPlacar();
  
}




function mostraB (){
  circle ( xB, yB, diametroB);
  
  
}


function movimentaB (){
  xB += speedXB;
  yB += speedYB;
}

function rebateBorda (){
  
  if (xB - raio < 0 || xB + raio > width){
    
    speedXB *= -1;
    ponto.play();
  }
  
  if (yB - raio < 0 || yB + raio > width){
    
    speedYB *= -1;
    ponto.play();
  }
}

function rebateR (){
  
  if (xB - raio < xR + widthR && yB - raio > yR && yB + raio < yR + heightR){
    speedXB *= -1;
  }
  
}

function mostraR (x, y){
  
  rect (x, y, widthR, heightR);

}


function movimentaR() {
   if (keyIsDown(UP_ARROW)){
    
    yR += -5;
  }
  
  
  if (keyIsDown(DOWN_ARROW)){
    
    yR += 5;
  }
}
 

function movimentaR2() {
   if ( keyIsDown(SHIFT) ){
    
    yR2 += -5;
  }
  
  
  if (keyIsDown(CONTROL)){
    
    yR2 += 5;
  }
}
  


  function rebateRLibrarie (x , y , a , b) {
    
     hit = collideRectCircle(x, y, a, b, 
                             xB, yB, raio);
      
     if (hit){
      speedXB *= -1;
      raquetada.play();
     }
  
  }

  /*
  function movimentaR2 (){
    
    speedR2 = yB - yR2 - heightR2/2 - 30;
    yR2 += speedR2;
    raqueta.play();
  } 
  */



  function mostraPlacar (){
  
    textAlign(CENTER);
    textSize(20);
    stroke(0);
    fill(color(255,255,0));
    rect(125, 15, 50, 40);  
    rect(425, 15, 50, 40);  
    fill(0);
    text(pontosR1, 150, 40);
    text(pontosR2, 450, 40);
  }



  function placar (){
    
    if (xB > 592){
      
      pontosR1 += 1;
      
    }
    
    else {
      
      if (xB < 9){
        
        pontosR2 += 1;
        
      }
      
    }
    
  }


  
