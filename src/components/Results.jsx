import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext';

const Results = () => {
  const {posts} = useContext(PostContext)
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results






