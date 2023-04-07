import { useDispatch, useSelector } from 'react-redux';
import './post.scss';
import { postSelector } from '../../redux';
import { useEffect } from 'react';
import { getPosts } from '../../redux';

export default function Posts() {
  const {posts, status} = useSelector(postSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [])
  console.log(posts);
  return (
    <div className='posts'>
      {
        status === 'pending' ? (<p>Page Loading</p>) : (
          posts.map(({id, title, content}) => (
            <div className="post" key={id}>
              <div className="post__img"></div>
              <div className="post__title">{title}</div>
              <div className="post__content">{content}</div>
            </div>
          ))
        )
      }
    </div>
  )
}
