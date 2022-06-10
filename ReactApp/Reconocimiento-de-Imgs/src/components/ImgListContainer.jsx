import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import { ImgList } from "./ImgList";

export const ImgListContainer = () => {
  const [tags, setTags] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "tags");
    const queryCollectionFilter = id
      ? query(queryCollection, where("id", "==", id))
      : queryCollection;
    getDocs(queryCollectionFilter)
      .then((resp) =>
        setTags(resp.docs.map((tag) => ({ id: tag.id, ...tag.data() })))
      )
      .catch((err) => console.log(err))
      .finally();
  }, [id]);

  return (
    <section>
      <div>
        <ImgList tags={tags} />
      </div>
    </section>
  );
};
