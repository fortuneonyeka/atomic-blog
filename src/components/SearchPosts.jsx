import { usePostContext } from "../context/PostContext";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePostContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};

export default SearchPosts;
