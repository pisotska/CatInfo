import React from "react";
import PostHeader from "./post_header";
import PostContent from "./post_content";
import PostFooter from "./post_footer";

const Post = () => {
  return (
    <div className="container">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
};

export default Post;
