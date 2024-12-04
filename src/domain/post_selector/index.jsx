import React, { useState, useEffect } from 'react';
import PostDropdown from './PostDropdown';
import PostDetails from './PostDetails';
import { getPosts } from '../../services/api.services';

const PostSelector = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(0);
  const [selectedPost, setSelectedPost] = useState('');

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (selectedPostId) {
      const post = posts.find((p) => p.id === parseInt(selectedPostId));
      setSelectedPost(post);
    }
  }, [selectedPostId, posts]);

  return (
    <div>
      <h1>Post Selector</h1>
      <PostDropdown
        posts={posts}
        selectedPost={selectedPostId}
        onSelectPost={setSelectedPostId}
      />
      <PostDetails post={selectedPost} />
    </div>
  );
};

export default PostSelector;