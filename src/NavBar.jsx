import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <a href="/">Logo</a>
        </div>
        <div className="nav-links">
          <a href="/Home">Home</a>
          <a href="/Blogs">Blog</a>
          <a href="/about">About Us</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </>
  );
}
