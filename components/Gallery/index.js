import React from "react";
import photo1 from "../Gallery/img/photo_1.jpg";
import photo2 from "../Gallery/img/photo_2.jpg";
import photo3 from "../Gallery/img/photo_3.jpg";
import photo4 from "../Gallery/img/photo_4.jpg";
import photo5 from "../Gallery/img/photo_5.jpg";
import photo6 from "../Gallery/img/photo_6.jpg";
import photo7 from "../Gallery/img/photo_7.jpg";
import photo8 from "../Gallery/img/photo_8.jpg";
import photo9 from "../Gallery/img/photo_9.jpg";

const Photos = () => {
  return (
    <div className="photo-container">
      <img className="photos" src={photo1} />
      <img className="photos" src={photo2} />
      <img className="photos" src={photo3} />
      <img className="photos" src={photo4} />
      <img className="photos" src={photo5} />
      <img className="photos" src={photo6} />
      <img className="photos" src={photo7} />
      <img className="photos" src={photo8} />
      <img className="photos" src={photo9} />
    </div>
  );
};

export default Photos;
