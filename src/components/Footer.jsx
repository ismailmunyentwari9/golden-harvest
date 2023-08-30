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
          <h2 className="lg:text-lg md:text-sm text-xs font-bold mb-5">Categories</h2>
          <ul>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Coffee
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Barista
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Roastery Equipments
            </li>
          </ul>
        </div>
        <div>
          <h2 className="lg:text-lg md:text-sm text-xs font-bold mb-5">About Golden Harvest</h2>
          <ul>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-400" />
              Our Story
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Training
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Wholesale
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Cafe Menu
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h2 className="lg:text-lg md:text-sm text-xs font-bold mb-5">Customer Care</h2>
          <ul>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              My Account
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Order Tracking
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Shipping & Refunds
            </li>
            <li className="flex border-b-2 border-red-950 lg:text-sm text-xs">
              <i className="fa fa-angle-right animate-bounce delay-1000 text-xl mr-1 font-bold text-green-500" />
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-[98%] container mx-auto border-b border-red-950 lg:text-sm text-xs mb-3" />
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
          <h2 className="font-bold text-xl">Call for order:</h2>
          <p className="location">
            {' '}
            <p>+971504777204</p>
            <p> +971529155445 </p>
            <p>+250788202604</p>
            <p>Info@goldenharvestz.com</p>

          </p>
        </div>
        <div>
          {' '}
          <h2 className="font-bold text-xl">Location :</h2>
          <p className="location">
            {' '}
            <p>United Arab Emirates, </p>
            <p> Cold Stores Building, Block 29, </p>
            <p>Central Fruit and Vegetable Market</p>

          </p>
        </div>

      </div>
    </div>
  </div>
);
export default Footer;
