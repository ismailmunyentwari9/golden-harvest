import { Link } from 'react-router-dom';
import Logo from './rsc/logo.png';

const Nav = () => (

  <div className="container mx-auto py-5 flex items-center justify-between px-5">
    <div>
      <img className="w-24 md:w-36" src={Logo} alt="Logo" />
    </div>
    <div className="hidden md:block">
      <ul className="lg:flex gap-5 hidden">
        <Link to="/"><li className="text-lg font-bold text-green-500">Home</li></Link>
        <Link to="/about"><li className="text-lg font-bold">About</li></Link>
        <Link to="/contact"><li className="text-lg font-bold">Contact</li></Link>
        <Link to="/tea">
          {' '}
          <li className="text-lg font-bold">Tae</li>
        </Link>
        <Link to="/coffee">
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
          <Link to="/">
            <li className="flex border-b-2 border-red-950">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
              Home
            </li>

          </Link>
          <Link to="/about">
            <li className="flex border-b-2 border-red-950">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-bg-green-500" />
              About
            </li>

          </Link>
          <Link to="/contact">
            <li className="flex border-b-2 border-red-950">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
              Contact
            </li>
          </Link>
          <Link to="/tea">
            <li className="flex border-b-2 border-red-950">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
              Tea
            </li>

          </Link>
          <Link to="/coffee">
            <li className="flex border-b-2 border-red-950">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
              Coffee
            </li>

          </Link>

        </ul>
      </button>
    </div>
  </div>
);

export default Nav;
