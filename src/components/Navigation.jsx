import { Link } from 'react-router-dom';
import Logo from './rsc/logo.png';

const Nav = () => (

  <div className="container mx-auto py-5 flex items-center justify-between px-5">
    <div>
      <img className="w-24 md:w-36" src={Logo} alt="Logo" />
    </div>
    <div className="hidden md:block">
      <ul className="lg:flex gap-5 hidden">
        <Link to="/"><li className="text-lg font-bold text-orange-500">Home</li></Link>
        <Link to="/about"><li className="text-lg font-bold">About</li></Link>
        <li className="text-lg font-bold">Contact</li>
        <li className="text-lg font-bold">Tae</li>
        <li className="text-lg font-bold">Coffee</li>
        <li><span className="fa fa-search text-white" /></li>
      </ul>
    </div>
    <div className="flex gap-2 md:gap-4 items-center">
      <span className="fa fa-facebook text-lg" />
      <span className="fa fa-twitter text-lg" />
      <span className="fa fa-instagram text-lg" />
      <button type="button" className="bg-orange-500 font-bold text-black rounded py-1 px-3 md:px-4 lg:block hidden">
        CONTACT US
      </button>
      {/* Medium Menu */}
      <button type="button" className="group flex flex-col">
        <span className="bg-orange-400 font-bold text-white rounded py-1 px-3 md:px-4 lg:hidden flex flex-col">Menu List</span>
        <ul className="bg-white hidden group-hover:block">
          <li className="flex border-b-2 border-red-950">
            <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
            Home
          </li>
          <li className="flex border-b-2 border-red-950">
            <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-bg-orange-500" />
            About
          </li>
          <li className="flex border-b-2 border-red-950">
            <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
            Tea
          </li>
          <li className="flex border-b-2 border-red-950">
            <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
            Coffee
          </li>
          <li className="flex border-b-2 border-red-950">
            <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-black" />
            Contact
          </li>
        </ul>
      </button>
    </div>
  </div>
);

export default Nav;
