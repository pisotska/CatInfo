import React from "react";
import image from "../Post/img/photo.jpg";

function PostHeader() {
  return (
    <div className="header_container">
      <img className="photo" src={image} />
      <div className="header_nick">karatusia</div>
    </div>
  );
}

export default PostHeader;
