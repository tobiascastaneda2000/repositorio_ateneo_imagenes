import { Img } from "./Img";
import './LabelsItem.css'
import { v4 as uuidv4 } from 'uuid';

export const LabelsItem = (props) => {
    
    return(
      <li className="card">
        <a href="#">{props.nameFile}</a>        
        <p>Etiquetas: </p>
        <div className="labels-item">
          {props.labels.map(label=>(<p className="etiqueta" key={uuidv4()}> {label.text} </p>))}
        </div>
    </li> )
  } 

  

