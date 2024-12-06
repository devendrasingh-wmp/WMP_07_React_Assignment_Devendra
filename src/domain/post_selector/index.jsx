import React, { useState, useEffect } from 'react';
import PostDropdown from './PostDropdown';
import PostDetails from './PostDetails';
import { getPosts } from '../../services/api.services';
import './PostSelector.css';

/**
 * Component for selecting a post and displaying its details.
 * Fetches posts from the API and updates the selected post based on user input.
 */
const PostSelector = () => {
  // State to store the list of posts fetched from the API
  const [posts, setPosts] = useState([]);
  
  // State to track the ID of the selected post
  const [selectedPostId, setSelectedPostId] = useState(0);
  
  // State to hold the details of the selected post
  const [selectedPost, setSelectedPost] = useState('');

  // Effect to fetch posts from the API when the component mounts
  useEffect(() => {
    getPosts().then((data) => setPosts(data)); // Sets the fetched posts in state
  }, []);

  // Effect to update the selected post whenever `selectedPostId` or `posts` changes
  useEffect(() => {
    if (selectedPostId) {
      // Finds the post with the selected ID and sets it as the `selectedPost`
      const post = posts.find((p) => p.id === parseInt(selectedPostId));
      setSelectedPost(post);
    }
  }, [selectedPostId, posts]);

  return (
    <div className="post-selector-container">
      <h1>Post Selector</h1>
      <div className="post-dropdown">
        {/* Dropdown component for selecting a post */}
        <PostDropdown
          posts={posts}
          selectedPost={selectedPostId}
          onSelectPost={setSelectedPostId}
        />
      </div>
      {/* Component to display the details of the selected post */}
      <PostDetails post={selectedPost} />
    </div>
  );
};

export default PostSelector;
