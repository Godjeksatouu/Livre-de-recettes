import { useState } from "react";
import { logoImage } from "../assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className=" bg-customGreen relative ">
      <div className="container flex flex-row p-4 items-center justify-between    ">
        {/* logo */}
        <Link
          to={"/"}
          className="flex flex-row justify-center items-center gap-y-2"
        >
          <div className="h-[40px] w-[40px] hidden md:block">
            <img
              src={logoImage}
              alt="image of  book "
              className="w-full h-full  object-contain"
            />
          </div>
          <p className="text-white uppercase text-xl md:flex md:flex-col gap-[-1px] md:ml-2">
            <span className="p-0 md:mb-[-8px]">Open</span>
            <span className="font-extrabold p-0">Recipes</span>
          </p>
        </Link>

        {/* mobile nav */}
        <div className="sm:hidden  ">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu className="text-white" size={30} />
          </button>

          <div
            className={`fixed top-0 left-0 animate z-50    h-full w-full ${
              isOpen ? "translate-x-0" : "translate-x-[-100%]"
            } `}
          >
            <nav className={`relative h-full animate  `}>
              <ul className="flex flex-col    text-customBlack gap-x-16 text- text-xl  bg-white max-w-[70vw] h-full   child:text-base child:border-b-2 child:border-b-customLightGray child:cursor-pointer child:font-semibold  shadow-2xl">
                <button
                  className="  flex flex-row items-center justify-end "
                  onClick={toggleMenu}
                >
                  <IoMdClose className="  bg-customGreen text-white h-12 w-12 p-3 animate hover:scale-95 " />
                </button>
                <li className="p-3 hover:bg-customYellow animate">
                  <Link
                    onClick={toggleMenu}
                    to={"/"}
                    className="w-full h-full inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li className="p-3 hover:bg-customYellow animate">
                  <Link
                    onClick={toggleMenu}
                    to={"/about"}
                    className="w-full h-full inline-block"
                  >
                    About
                  </Link>
                </li>
                <li className="p-3 hover:bg-customYellow animate">
                  <Link
                    onClick={toggleMenu}
                    to={"/recipes"}
                    className="w-full h-full inline-block"
                  >
                    Recipes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* desktop nav */}
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center gap-x-16 text-white text-xl">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/recipes"}>Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
