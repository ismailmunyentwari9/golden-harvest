import React from 'react';
import { Link } from 'react-router-dom';
// import CoffeBean from './rsc/coffeeabout.png';

const AboutSextionA = () => (
  <div className="AboutSextionA">
    <div className="bg-orange-50
    h-auto w-full flex py-[5%]  px-[1%]"
    >
      <div className="w-1/2 flex justify-center flex-col items-center">
        <h3 className="text-[100px]">About Us</h3>
        <button type="button" className="text-[25px] flex items-center gap-3 bg-orange-700 text-white font-bold py-4 px-3 rounded-lg">
          <Link to="/"><span>Home</span></Link>
          <span className="fa fa-angle-right text-[35px]" />
          <span>
            About Us
          </span>
        </button>
      </div>
      <div className="w-1/2">
        <img src="https://www.pngmart.com/files/1/Coffee-Beans-PNG-File.png" alt="coffe bean" className="w-full rounded animate-pulse" />
      </div>
    </div>
  </div>
);
export default AboutSextionA;
