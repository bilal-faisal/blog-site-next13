import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mt-5">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blogs" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
