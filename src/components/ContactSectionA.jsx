import React from 'react';
import { Link } from 'react-router-dom';
// import CoffeBean from './rsc/coffeeabout.png';

const ContactSextionA = () => (
  <div className="AboutSextionA">
    <div className="bg-green-600
    h-auto w-full flex py-[5%]  px-[1%] lg:flex-row flex-col"
    >
      <div className=" fadeDownBig animated lg:w-1/2 w-full flex justify-center flex-col items-center">
        <h3 className="lg:text-[100px] text-[70px]">Contact Us</h3>
        <button type="button" className="text-[25px] flex items-center gap-3 bg-green-700 text-white font-bold py-4 px-3 rounded-lg">
          <Link to="/"><span>Home</span></Link>
          <span className="fa fa-angle-right text-[35px]" />
          <Link to="/contact">
            <span>
              Contact Us
            </span>

          </Link>
        </button>
      </div>
      <div className="lg:w-1/3 w-1/2 self-center lg:mt-auto mt-10">
        <img src="https://icon-library.com/images/contact-us-icon-png/contact-us-icon-png-1.jpg" alt="coffe bean" className="w-full rounded animate-pulse" />
      </div>
    </div>
  </div>
);
export default ContactSextionA;
