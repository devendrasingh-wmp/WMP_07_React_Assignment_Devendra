import React from 'react';
import './PostDetails.css';

const PostDetails = ({ post }) => {
  if (!post) {
    return <p>No post selected.</p>;
  }

  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;