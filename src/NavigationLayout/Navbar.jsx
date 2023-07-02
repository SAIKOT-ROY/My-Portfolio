const Navbar = () => {
  return (
    <div className="navbar bg-base-200 font-bold mb-10 rounded-l shadow-sm max-w-[1800px] mx-auto">
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
             bg-gradient-to-l text-white bg-blue-500 rounded-box w-52"
          >
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Skill Bars</a>
            </li>
            <li>
              <a>My Projects</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Skill Bars</a>
          </li>
          <li>
            <a>My Projects</a>
          </li>
          <li>
            <a>
              <a>Contact Me</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
