import React from 'react';
import {sketch} from './sketch';
import { Routes, Route, useParams } from "react-router-dom";
import {  ReactP5Wrapper } from "react-p5-wrapper";
import labels from '../labels.json';

export const Sketchcontainer = (props)=> {

    let wordsIndex=useParams();
    console.log(`Estos son los parametros ${wordsIndex.indice1}`);
    console.log(typeof(wordsIndex.indice1));
    let indices= wordsIndex.indice1.split(',');
    console.log(`Estos son los indices después de aplicar split ${indices}`)
    console.log(`Este es el tipo de dato recibido ${typeof(indices)}`);
    indices.pop();
    let labels2=JSON.parse(JSON.stringify(labels));
    console.log(`este es el array labels2 ${labels2[0].sentence1}`)
    let sentenceAndIndex = labels2.map((element)=>{ return {0: element.id, 1:element.sentence1 }})
    console.log(sentenceAndIndex);
    let sentenceAndIndexInImage=[];
    let selectedSentences;
    for (let i =0; i<indices.length ; i ++)
    { sentenceAndIndexInImage.push(sentenceAndIndex.filter((element)=>{ return element[0]==indices[i]}) ) }
   selectedSentences=sentenceAndIndexInImage.map( (element)=>{return element[0][1] })
  
    console.log(`estas son las frases que corresponden a las imágenes ${selectedSentences}`)  
    



    return <ReactP5Wrapper sketch={sketch} selectedSentences={selectedSentences}></ReactP5Wrapper> 


}
