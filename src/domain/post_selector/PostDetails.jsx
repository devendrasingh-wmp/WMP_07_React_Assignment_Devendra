import React from 'react';
import './PostDetails.css';

/**
 * Component to display the details of a selected post.
 * Displays a message if no post is selected.
 */
const PostDetails = ({ post }) => {
  // Conditional rendering to handle the case where no post is selected
  if (!post) {
    return <p>No post selected.</p>; // Displays a message if the `post` prop is null or undefined
  }

  // Renders the details of the selected post
  return (
    <div className="post-card">
      <h2>{post.title}</h2> {/* Displays the title of the post */}
      <p>{post.body}</p> {/* Displays the body content of the post */}
    </div>
  );
};

export default PostDetails;
