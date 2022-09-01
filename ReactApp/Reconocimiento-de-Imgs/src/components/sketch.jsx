import React, { useState, useEffect } from "react"

export function sketch(p){
  

 



  class Burbuja {
    //Declaramos la clase 'Burbuja' con tres propiedades

    constructor(x,y,c){
     this.x=x;
     this.y=y;
     this.c=c;
    }
   
    
   
   up(n) {
      //Creamos un método 'caer' para mover los objetos 'gota'.
      p.fill(this.c, 20);
      p.noStroke();
      this.y = this.y-n;
      if (this.y<=0) {
        this.y =p.height+20;
      }
      p.ellipse(this.x+p.random(2), this.y, 110, 110);
    }
  }

  class Flower {
constructor(color1, color2){
this.color1=color1;
this.color2=color2;}
display(){
p.noStroke();
p.fill(this.color1);
p.noStroke();
p.beginShape();
p.vertex(50,-15);
p.vertex(0,0);
p.vertex(50,15);
p.bezierVertex(70,0,50,-15,50,-15); 
p.endShape();
p.noFill();
p.fill(this.color2);
p.rotate(p.radians(90));
p.noStroke();
p.beginShape();
p.vertex(50,-15);
p.vertex(0,0);
p.vertex(50,15);
p.bezierVertex(70,0,50,-15,50,-15); 
p.endShape();
p.fill(this.color1);
p.rotate(p.radians(180));
p.noStroke();
p.beginShape();
p.vertex(50,-15);
p.vertex(0,0);
p.vertex(50,15);
p.bezierVertex(70,0,50,-15,50,-15); 
p.endShape();
p.fill(this.color2);
p.rotate(p.radians(270));
p.noStroke();
p.beginShape();
p.vertex(50,-15);
p.vertex(0,0);
p.vertex(50,15);
p.bezierVertex(70,0,50,-15,50,-15); 
p.endShape();

  }

}
let flowers=[];
/*let figuras2=new Figura2[4]; 
let figuras3=new Figura3[2]; 
let figuras4=new Figura4[4]; 
let figuras4b=new Figura4[4]; 
let figuras5=new Figura5[4]; 
let figuras6=new Figura6[1];*/
let burbujas= [];
let sentence;
let rotation;
let rotation2;
let rotation3;
let PositionX;
let PositionY;
let rotationSpeed;
let rotationSpeed2;
let scale;
let scaleSpeed;
let upSpeed;
let color1;
let color2;
let color3;
let color4;
let color5;
let Font;
let Font2;
let m;
let sentences;
rotationSpeed=1;
  rotation=1;
  rotation2=360;
  rotation3=45;
  color1=p.color(250,60,20,160);//naranja variante 1
  color2=p.color(222,18,201,160);// violeta
  color3=p.color(229,248,7,160); //amarillo
  color4=p.color(255,7,71,160);//rosa
  color5=p.color(122,14,78,160);//fucsia 
  rotationSpeed2=0.003;
  scale=1;
  scaleSpeed=0.003;


  p.updateWithProps = props => {
    sentences=props.selectedSentences
    console.log(sentences)
  }

  p.setup=() =>{


  p.createCanvas(p.displayWidth, p.displayHeight);
  Font2=p.loadFont("../../assets/RobotoCondensedRegular.otf",50);

  /*p.textFont(Font);*/
  m=p.millis();
  sentence="La casa roja emergio volando";
  for ( let i=0; i<100; i++){
    burbujas.push(new Burbuja (p.random(p.width),p.random(p.height)+20*i,p.color(48,66,200,20)));}
   for( let i =0; i<8; i++)
     { 
      flowers.push(new Flower(color1,color4));
     
    
    }
  
 
  
  
    /* for( i =0; i<figuras6.length; i++)
    { 
      figuras6[i]= new Figura6(color4,color5, color1);}*/

  
}

p.draw=()=>{

  p.fill(9,2,36,70);
  p.rect(0,0,p.displayWidth, p.displayHeight);
  
   let PositionX=100;
   let PositionY=100;
   p.fill(250,60,20,150);      
   p.textAlign(p.CENTER);
   p.textFont(Font2,70);
   p.text("el sol cayo",500,500);   
   
  
   for(let i=0; i<100; i++){
      upSpeed=p.int(p.random(3));
     burbujas[i].up(upSpeed);}
   
  for (let i = 0; i<flowers.length; i++)
   { 
     
   p.push();
   p.translate(PositionX,PositionY);
 
 if(rotation<=360)
   {rotation=rotation+0.5;}
   
 if(rotation>=360)
   {rotation=0;}
 
 
 p.rotate(p.radians(rotation));
 flowers[i].display();
 PositionX=PositionX+200;
  
   p.pop();
 }

 PositionY=p.displayHeight-250;
 PositionX=700;

/*for (let b = 0; b<figuras6.length; b++)
  { 
   p.push();

  p.translate(PositionX,PositionY);
  
 if(scale>=1.6 ||scale<=0.9 )
{scaleSpeed=-1*(scaleSpeed);}

  {scale=scale+scaleSpeed;} 
  p.scale(scale+p.random(0.001, 0.002));
  p.rotate(p.radians(90));


    figuras6[b].show();
    PositionX=PositionX+1000;

 
     p.pop();
}   
     
     

/*if(millis()<2000)
{ int fuente=70;
  int y=height/2;
  int opacity=160;
  for(int i=0; i<2;i++)
 
  {fill(250,60,20,opacity); 
  textAlign(CENTER);
  textFont(Font2,fuente);
  text(sentence,width/2,y);
  y=y-60;
  opacity=opacity-140;
  fuente=fuente+20;} 
  
 }

if (millis()>2000)
{
textAlign(CENTER);
textFont(Font2,70);
text("el sol cayo",width/2,height/2);} */
  



}}