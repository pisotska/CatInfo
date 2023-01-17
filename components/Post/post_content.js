import React from "react";
import image1 from "../Post/img/photo_1.jpg";
import image2 from "../Post/img/photo_2.jpg";

function PostContent() {
  return (
    <div className="content_container">
      <img className="photo1" src={image1} />
      <img className="photo2" src={image2} />
      <div className="content-text">Позначки "Подобається": 2073 </div>
    </div>
  );
}

export default PostContent;
