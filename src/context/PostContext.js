import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { faker } from "@faker-js/faker";

export const PostContext = createContext();

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Memoize searched posts to prevent unnecessary filtering
  const searchedPosts = useMemo(() => {
    if (searchQuery.length === 0) return posts;
    
    return posts.filter((post) =>
      `${post.title} ${post.body}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  // Memoize handlers to prevent unnecessary re-renders in child components
  const handleAddPost = useCallback((post) => {
    setPosts((posts) => [post, ...posts]);
  }, []);

  const handleClearPosts = useCallback(() => {
    setPosts([]);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  // Memoize context value to prevent unnecessary re-renders of consuming components
  const value = useMemo(() => ({
    posts: searchedPosts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    setPosts,
    searchQuery,
    setSearchQuery,
    isFakeDark,
    setIsFakeDark,
  }), [
    searchedPosts,
    handleAddPost,
    handleClearPosts,
    searchQuery,
    isFakeDark
  ]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be within the context provider");
  }
  return context;
};