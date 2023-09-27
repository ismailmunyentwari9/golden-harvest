import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from './rsc/logo.png';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (

    <div className="container mx-auto flex items-center justify-between px-5 ">
      <div>
        <img className="w-24 md:w-36" src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:block">
        <ul className="lg:flex gap-5 hidden">
          <Link
            to="/"
            className={`text-lg font-bold ${activeLink === 'home' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            <li>Home</li>
          </Link>
          <NavLink
            to="/about"
            className={`${activeLink === 'about' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            <li className="text-lg font-bold">About</li>

          </NavLink>
          <Link
            to="/contact"
            className={`text-lg font-bold ${activeLink === 'contact' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            <li className="text-lg font-bold">Contact</li>

          </Link>
          <Link
            to="/tea"
            className={`text-lg font-bold ${activeLink === 'tea' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('tea')}
          >
            {' '}
            <li className="text-lg font-bold">Tae</li>
          </Link>
          <Link
            to="/coffee"
            className={`text-lg font-bold ${activeLink === 'coffee' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('coffee')}
          >
            {' '}
            <li className="text-lg font-bold">Coffee</li>
          </Link>
          <li><span className="fa fa-search text-white" /></li>
        </ul>
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <span className="fa fa-facebook text-lg" />
        <span className="fa fa-twitter text-lg" />
        <span className="fa fa-instagram text-lg" />
        <Link to="/contact">
          <button type="button" className="bg-green-500 font-bold text-black rounded py-1 px-3 md:px-4 lg:block hidden">
            CONTACT US
          </button>

        </Link>
        <button type="button" className="group flex flex-col">
          <span className="bg-green-400 font-bold text-white rounded py-1 px-3 md:px-4 lg:hidden flex flex-col">Menu List</span>
          <ul className="bg-white hidden group-hover:block">
            <Link
              to="/"
              className={`text-lg font-bold ${activeLink === 'home' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              <li className="flex border-b-2 border-red-950">
                <i className="fa fa-angle-right animate-bounce delay-1 text-xl mr-1 font-bold text-black" />
                Home
              </li>

            </Link>
            <Link
              to="/about"
              className={`text-lg font-bold ${activeLink === 'about' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              <li className="flex border-b-2 border-red-950">
                <i className="fa fa-angle-right animate-bounce delay-1 text-xl mr-1 font-bold text-bg-green-500" />
                About
              </li>

            </Link>
            <Link
              to="/contact"
              className={`text-lg font-bold ${activeLink === 'contact' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              <li className="flex border-b-2 border-red-950">
                <i className="fa fa-angle-right animate-bounce delay-1 text-xl mr-1 font-bold text-black" />
                Contact
              </li>
            </Link>
            <Link
              to="/tea"
              className={`text-lg font-bold ${activeLink === 'tea' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('tea')}
            >
              <li className="flex border-b-2 border-red-950">
                <i className="fa fa-angle-right animate-bounce delay-1 text-xl mr-1 font-bold text-black" />
                Tea
              </li>

            </Link>
            <Link
              to="/coffee"
              className={`text-lg font-bold ${activeLink === 'coffee' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('coffee')}
            >
              <li className="flex border-b-2 border-red-950">
                <i className="fa fa-angle-right animate-bounce delay-1 text-xl mr-1 font-bold text-black" />
                Coffee
              </li>

            </Link>

          </ul>
        </button>
      </div>
    </div>
  );
};

export default Nav;
