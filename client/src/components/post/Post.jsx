import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postInfo">
        <p className="postTitle">{post.title}</p>
        <p className="postAuthor">{"@"+ post.username}</p> 
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <hr />
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}