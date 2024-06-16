import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaBox } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScoll);

    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  });

  //nav item array

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Blog", path: "blog" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white md:bg-transparent">
      <nav
        className={`px-4 py-4 lg:px-14 ${isSticky ? "sticky left-0 right-0 top-0 border-b bg-white duration-300" : ""}`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <a
            href=""
            className="flex items-center space-x-3 text-2xl font-semibold"
          >
            <img
              className="inline-block w-10 items-center"
              src={logo}
              alt="Nexcent Logo"
            />

            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* nav items for large device */}
          <ul className="hidden space-x-12 md:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                  spy={true}
                  className="cursor-pointer text-gray900 first:font-medium hover:text-brandPrimary"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="hidden items-center space-x-12 lg:flex">
            <a className="hidden items-center text-brandPrimary hover:text-gray900 lg:flex">
              Login
            </a>
            <button className="rounded bg-brandPrimary px-4 py-2 text-white transition-all duration-300 hover:bg-newtralDGrey">
              Sign Up
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <a
              onClick={toggleMenu}
              className="text-newtralDGrey focus:text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaBox className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </a>
          </div>

          {/* nav items for mobile devices */}
          <div
            className={`mt-16 space-y-4 bg-brandPrimary px-4 py-7 ${isMenuOpen ? "fixed left-0 right-0 top-0 block" : "hidden"}`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                  spy={true}
                  className="cursor-pointer text-gray900 first:font-medium hover:text-brandPrimary"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
