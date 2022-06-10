import { Img } from "./Img";

export const ImgList = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <div key={tag.id}>
          <Img id={tag.Index} text={tag.Text} />
        </div>
      ))}
    </div>
  );
};
