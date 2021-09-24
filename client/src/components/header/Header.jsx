import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        
        <span className="headerTitleLg">BLOGS</span>
        <span className="headerTitleSm">Share your experience with us ...</span>
        
     </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/414551/pexels-photo-414551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
    </div>
  );
}