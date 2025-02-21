import React from 'react'
import { usePostContext } from '../context/PostContext';

const DarkModeToggle = () => {
  const { isFakeDark, setIsFakeDark } = usePostContext();

  return (
    <button
      onClick={() => setIsFakeDark((prev) => !prev)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle


