import { Img } from "./Img";
import {Buttonverhistoria} from "./Buttonverhistoria"
import './LabelsItem.css'
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter, Route} from 'react-router-dom';
import { ReactP5Wrapper } from "react-p5-wrapper";



export const LabelsItem = (props) => {
  console.log("estas son las propiedades "+Object.getOwnPropertyNames(props));
  console.log(`estas son las props que llegan a labelsItem ${props.labels}`);
  let indices=props.labels.map(label=> ( label.index));
  console.log(indices);
    

    return(
      
    
      <li className="card">
   
        <a href="#">{props.nameFile}</a>   
        
        <Buttonverhistoria indice={indices}> </Buttonverhistoria>
        <p>Etiquetas: </p>
        <div className="labels-item" label={props.label} indice={indices}>

          {props.labels.map(label=>(<p className="etiqueta" key={uuidv4()} text={label.text} index={label.index}> {label.text} {label.index} </p>))}
       
        </div>
    </li> )
  } 

  

