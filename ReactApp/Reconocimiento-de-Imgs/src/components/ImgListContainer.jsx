import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { docData } from 'rxfire/firestore';


import { ImgList } from "./ImgList";

export const ImgListContainer = () => {
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
    <section>
      <div>
        <ImgList ImagenesEtiquetadas={ImagenesEtiquetadas} />
      </div>
    </section>
  );
};
