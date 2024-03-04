import { useState } from 'react';
import NewPost from './NewPost';
import Modal from './Modal';
import Post from './Post';
import calsses from './Posts.module.css';

const DUMMY_DATA = [
  { author: 'Max', body: 'React.JS is awesome' },
  { author: 'Leo', body: 'Check out th full course' },
];

export default function PostsList({onStopPosting, isPosting}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnterdAuthor] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnterdAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={calsses.posts}>
        {DUMMY_DATA.map(item => (
          <Post key={item.body} author={item.author} body={item.body} />
        ))}
      </ul>
    </>
  );
}
