import { usePostContext } from '../context/PostContext';

const Results = () => {
  const {posts} = usePostContext()
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results






