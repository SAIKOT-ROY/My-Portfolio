import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar font-bold mb-12 rounded-lg shadow-md max-w-[1800px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow
             bg-gradient-to-l bg-blue-100 rounded-box w-52"
          >
            <li>
              <Link
                to="about"
                spy={true}
                activeClass="border-b-4 border-[#67DB52]"
                smooth={true}
                offset={50}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                spy={true}
                activeClass="border-b-4 border-[#67DB52]"
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                activeClass="border-b-4 border-[#67DB52]"
                smooth={true}
                offset={50}
                duration={500}
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                activeClass="border-b-4 border-[#67DB52]"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="text-2xl ml-8">Saikot Roy</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="about"
              spy={true}
              activeClass="border-b-4 border-[#52a6db]"
              smooth={true}
              offset={50}
              duration={500}
              className="hover:border-b-4 hover:border-[#52a6db]"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              spy={true}
              activeClass="border-b-4 border-[#67DB52]"
              smooth={true}
              offset={50}
              duration={500}
              className="hover:border-b-4 hover:border-[#52a6db]"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              activeClass="border-b-4 border-[#67DB52]"
              smooth={true}
              offset={50}
              duration={500}
              className="hover:border-b-4 hover:border-[#52a6db]"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              activeClass="border-b-4 border-[#67DB52]"
              smooth={true}
              offset={50}
              duration={500}
              className="hover:border-b-4 hover:border-[#52a6db]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
