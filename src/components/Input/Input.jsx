import { useDispatch } from 'react-redux';
import { debounce } from '../../services';
import { inputSlice } from './inputSlice';

export default function Input(props) {
  const dispatch = useDispatch();
  const {change} = inputSlice.actions;
  const { type, placeHolder } = props;
  const setType = type ?? 'text';
  const setPlaceHolder = placeHolder ?? null;
  const handleChangle = debounce((e) => {
    dispatch(change(e.target.value));
  })
  return (
    <input type={setType} onChange={handleChangle} placeholder={setPlaceHolder}/>
  )
}
