import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { docData } from 'rxfire/firestore';
import { LabelsItem } from "./LabelsItem";

import  "./LabelsList.css";



export const LabelsList = () => {
  // 
  const [ImagenesEtiquetadas, setImagenesEtiquetadas] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "ImagenesEtiquetadas");
    getDocs(queryCollection)
      .then((resp) =>
        setImagenesEtiquetadas(resp.docs.map((tag) => ( tag.data() )))        
      )
      .catch((err) => console.log(err))
      .finally();
  }, [id]);
  
  return (
    <div>
      <ul className="labels-list">
        {ImagenesEtiquetadas.map((image) =>(          
        <LabelsItem key={uuidv4()} nameFile={image.nameFile} labels={image.labels}/>))}        
      </ul>
    </div>
  );
};
