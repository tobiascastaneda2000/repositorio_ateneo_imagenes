import { Img } from "./Img";

export const ImgList = ({ ImagenesEtiquetadas }) => {
  let wordsAndIndex=[];
  let nameFile=[];
  let nuevoValor;
  let tags;
  console.log('Esta es la longitud del objeto imagenesEtiquetadas'+Object.keys(ImagenesEtiquetadas).length);
  console.log(`Este es el tipo de dato que nos llega desde la db ${typeof(ImagenesEtiquetadas)}`);
  for (let i=0; i<ImagenesEtiquetadas.length; i++ )
{ let etiquetas=ImagenesEtiquetadas[i]

  for( let clave in etiquetas)

  { 
    /*console.log(etiquetas[clave]);*/
     nuevoValor=etiquetas[clave];

    /*console.log(nuevoValor);*/
    if (Array.isArray(nuevoValor)){
    
      tags=nuevoValor.map(function(element){
      /*return  element.text*/
     /* return <div> Soy un div  ${element.text} ${element.index} </div>*/
   
  }) 
  console.log('esta son las etiquetas de la imagen'+i+ tags)}
 
else {
   nameFile[i]= nuevoValor
console.log('Este es el path de la imagen'+i+ nameFile[i])

  }
   
    } }
    return(
      <div> {nuevoValor.map(function(element){
 <div> Soy un div  ${element.text} ${element.index} </div>
      }) } 
    </div> )
  } 

  

