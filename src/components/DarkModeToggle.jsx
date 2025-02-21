import React, { memo } from 'react'
import { usePostContext } from '../context/PostContext';

const DarkModeToggle = memo(() => {
  const { isFakeDark, setIsFakeDark } = usePostContext();

  return (
    <button
      onClick={() => setIsFakeDark((prev) => !prev)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
);
})

export default DarkModeToggle


