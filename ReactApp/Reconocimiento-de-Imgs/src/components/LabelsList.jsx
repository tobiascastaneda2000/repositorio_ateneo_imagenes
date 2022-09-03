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


import { getStorage, ref, getDownloadURL } from "firebase/storage";
import getFirestoreApp from "../firebase/config";

// Get a reference to the storage service, which is used to create references in your storage bucket
//const storage = getFirestoreApp();


// Create a storage reference from our storage service



// Create a child reference


//const imagesRef = ref(storage, 'o');
//const imagesRef = ref(storage, '~2FImages.jpeg');
//const imagesRef = ref(storage, 'gs://reconocimiento-de-imagen-644f0.appspot.com/Images');
//console.log(imagesRef)
// imagesRef now points to 'images'

export const LabelsList = () => {
  // 
  const [ImagenesEtiquetadas, setImagenesEtiquetadas] = useState([]);
  const [ReferenciaImagenes, setReferenciaImagenes]=useState([]);
  const { id } = useParams();
  

  /*useEffect( ()=>{

    const storage = getStorage();
    getDownloadURL(ref(storage, 'Images/Sat Aug 27 13:06:37 GMT-03:00 2022'))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
    
       
        setReferenciaImagenes(url) })
      .catch((error) => {
        // Handle any errors
      }).finally();

   
 
  }, []); */


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
  console.log(ImagenesEtiquetadas);


    // Child references can also take paths delimited by '/'
    //const spaceRef = ref(storage, `images/${props.nameFile}`);
    // spaceRef now points to "images/space.jpg"
    // imagesRef still points to "images"
  return (
    <div>
    
      <ul className="labels-list">
        {ImagenesEtiquetadas.map((image) =>(    
              
        <LabelsItem key={uuidv4()} nameFile={image.nameFile} labels={image.labels}/>))} 

               
      </ul>
    </div>
  );
};
