import { Link } from "react-router-dom"

function PublicNavBar() {
  return (
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/create-post">Create Post</Link></li>
    <li><Link to="/posts">Posts</Link></li>
    </ul>
    </nav>
  )
}

export default PublicNavBar