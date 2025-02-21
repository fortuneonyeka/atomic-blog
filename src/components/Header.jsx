import Results from './Results';
import SearchPosts from './SearchPosts';
import { usePostContext } from '../context/PostContext';

const Header = () => {
  const {onClearPosts} = usePostContext()
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts
          
         
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header


