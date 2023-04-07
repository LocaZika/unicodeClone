import { PostForm } from "../PostForm";
import { Posts } from "../Posts";


export default function Forum() {
  return (
    <div className="forum">
      <PostForm />
      <Posts />
    </div>
  )
}
