import React, { memo, useState, useMemo } from 'react';
import { createRandomPost, usePostContext } from '../context/PostContext';

const Archive = memo(function Archive({ archiveOptions }) {
  const [showArchive, setShowArchive] = useState(archiveOptions.show);
  const { onAddPost } = usePostContext();

  // Memoize the posts array creation since it's expensive
  const posts = useMemo(() => 
    Array.from({ length: 10000 }, () => createRandomPost()),
    [] 
  );

  // Memoize the rendered posts list to prevent unnecessary re-renders
  const renderedPosts = useMemo(() => {
    if (!showArchive) return null;
    
    return (
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <p>
              <strong>{post.title}:</strong> {post.body}
            </p>
            <button onClick={() => onAddPost(post)}>Add as new post</button>
          </li>
        ))}
      </ul>
    );
  }, [posts, showArchive, onAddPost]);

  return (
    <aside>
      <h2>{archiveOptions.title}</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>
      {renderedPosts}
    </aside>
  );
});

export default Archive;
