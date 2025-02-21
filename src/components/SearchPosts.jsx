import { memo } from "react";
import { usePostContext } from "../context/PostContext";


const SearchPosts = memo(() => {
  const { searchQuery, setSearchQuery } = usePostContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
})


export default SearchPosts;
