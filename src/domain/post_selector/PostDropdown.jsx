import React from 'react';

const PostDropdown = ({ posts, selectedPost, onSelectPost }) => {
  return (
    <div>
      <label htmlFor="post">Posts:</label>
      <select
        id="post"
        value={selectedPost}
        onChange={(e) => onSelectPost(e.target.value)}
      >
        <option value="">Select a post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostDropdown;
