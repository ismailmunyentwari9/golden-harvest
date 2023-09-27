import Logo from './rsc/logo.png';

const currentYear = new Date().getFullYear();
const Footer = () => (
  <div className="footer">
    <div className="w-[95%] flex container mx-auto">
      <div className="lg:block md:block hidden">
        <img className="w-[20%] mt-5" src={Logo} alt="Logo" />
      </div>
      <div className="flex gap-10 font-thin w-[90%] mb-9 pt-2">
        <div className="w-1/3">
          <h2 className="lg:text-xl md:text-sm  font-bold mb-5">Categories</h2>
          <ul>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Coffee</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1"> Barista</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1"> Roastery Equipments</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="lg:text-xl md:text-sm  font-bold mb-5">About Golden Harvest</h2>
          <ul>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Our Story</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Training</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1"> Wholesale</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Cafe Menu</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Contact</span>
            </li>
          </ul>
        </div>
        <div className="text-black">
          <h2 className="lg:text-xl md:text-sm  font-bold mb-5">Customer Care</h2>
          <ul>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">My Account</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1"> Order Tracking</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1">Shipping & Refunds</span>
            </li>
            <li className="flex border-b-2 border-green-500 lg:text-sm ">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-2xl mr-1 font-bold text-black " />
              <span className="text-black font-bold mt-1"> Terms & Conditions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-[98%] container mx-auto border-b border-green-500 lg:text-sm  mb-3" />
    <div className="w-[95%] container mx-auto flex lg:flex-row flex-col lg:justify-between mb-10">
      <div className="mb-3">
        <p className="text-gray-500 text-sm">
          &copy;
          {' '}
          {currentYear}
          {' '}
          All rights reserved | Golden Harvest &amp; Coffe & Tea
        </p>
      </div>
      <div className="flex gap-10 lg:flex-row md:flex-row flex-col">
        <div>
          {' '}
          <h2 className="font-bold text-2xl">Call for order:</h2>
          <p className="location text-xl">
            {' '}
            <p>+971567166979</p>

            <p>Info@goldenharvestz.com</p>

          </p>
        </div>
        <div>
          {' '}
          <h2 className="font-bold text-2xl">Location :</h2>
          <p className="location text-xl">
            {' '}
            <p>United Arab Emirates, </p>
            <p> Cold Stores Building, Block 29</p>

          </p>
        </div>

      </div>
    </div>
  </div>
);
export default Footer;
