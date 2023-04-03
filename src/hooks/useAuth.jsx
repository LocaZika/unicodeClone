import { useDispatch, useSelector } from "react-redux"


export default function useAuth() {
  const authState = useSelector(state => state.auth);
  const authDispatch = useDispatch();
  return [authState, authDispatch]
}
