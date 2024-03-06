import { Outlet } from 'react-router-dom';

import PostsList from './PostsList';

export const App = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts
}
