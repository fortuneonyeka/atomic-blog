import React, { memo } from 'react'
import Posts from './Posts';
import FormAddPost from './FormAddPost';


const Main = memo(() => {
  return (
    <main>
      <FormAddPost  />
      <Posts />
    </main>
  );
})


export default Main



