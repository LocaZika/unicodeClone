import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './postForm.scss';
import { useState } from 'react';
import { debounce } from '../../services';
import { post } from '../../api';

export default function PostForm() {
  const [value, setValue] = useState({
    inputChange: '',
    textareaChange: '',
  })
  const handleInputChange = debounce((e) => {
    setValue({...value, inputChange: e.target.value})
  });
  const handleTextareaChange = debounce((e) => {
    setValue({...value, textareaChange: e.target.value})
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: value.inputChange,
      content: value.textareaChange,
      comments: [],
    };
    post('posts', data).then(({res}) => {
      if (res.ok === true) {
        setValue({
          inputChange: '',
          textareaChange: '',
        })
      }
    });
  };
  return (
    <div className='post-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="postTitle" onChange={handleInputChange}/>
        <textarea name='postContent' onChange={handleTextareaChange}></textarea>
        <button type='submit'>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  )
}
