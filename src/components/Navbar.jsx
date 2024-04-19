import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 py-2 bg-white drop-shadow-xl">
      <div>
        <Link to="/" className="">
          <img src="/brand/logo.png" alt="Mortal Trading" className="h-16" />
        </Link>
      </div>
      <div className="flex hover:[&>a]:bg-sky-200 [&>a]:px-4 [&>a]:py-1 [&>a]:rounded-xl">
        <Link to="/about">
          About
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/blog">
          Blogs
        </Link>
        <Link to="/money-management">
         Money Management
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
