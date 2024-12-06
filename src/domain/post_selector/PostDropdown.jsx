import React from 'react';

/**
 * Dropdown component for selecting a post from a list.
 * Displays post titles and updates the selected post when a change occurs.
 */
const PostDropdown = ({ posts, selectedPost, onSelectPost }) => {
  return (
    <div>
      <label htmlFor="post">Posts:</label> {/* Label for the dropdown */}
      <select
        id="post" // The dropdown's unique ID
        value={selectedPost} // Current selected post ID
        onChange={(e) => onSelectPost(e.target.value)} // Handles the change event and updates the selected post
      >
        <option value="">Select a post</option> {/* Placeholder option */}
        {posts.map((post) => (
          // Renders each post as an option in the dropdown
          <option key={post.id} value={post.id}>
            {post.title} {/* Display post title */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostDropdown;
