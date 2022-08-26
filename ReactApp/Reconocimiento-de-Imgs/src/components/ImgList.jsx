import { Img } from "./Img";

export const ImgList = ({ ImagenesEtiquetadas }) => {
  let wordsAndIndex=[];
  let nameFile=[];
  console.log('Esta es la longitud del objeto imagenesEtiquetadas'+Object.keys(ImagenesEtiquetadas).length);
  for (let i=0; i<ImagenesEtiquetadas.length; i++ )
{ let etiquetas=ImagenesEtiquetadas[i]

  for( let clave in etiquetas)

  { 
    /*console.log(etiquetas[clave]);*/
    let nuevoValor=etiquetas[clave];

    /*console.log(nuevoValor);*/
    if (Array.isArray(nuevoValor)){
    
     let tags=nuevoValor.map(function(element){
      return  element.text
     /*`${element.text} ${element.index}`;*/
  }) 
  console.log('esta son las etiquetas de la imagen'+i+ tags)}
 
else {
   nameFile[i]= nuevoValor
console.log('Este es el path de la imagen'+i+ nameFile[i])

  }
   
    } }
     
  } 

  

