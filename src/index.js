import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, loader as postsLoader } from 'components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NewPost, { action as newPostAction } from 'routes/NewPost';
import RootLayout from 'routes/RootLayout';
import PostDetails, {loader as postDetailsLoader} from 'routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          {path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
