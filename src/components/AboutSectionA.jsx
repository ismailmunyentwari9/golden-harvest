import React from 'react';
import { Link } from 'react-router-dom';
// import CoffeBean from './rsc/coffeeabout.png';

const AboutSextionA = () => (
  <div className="AboutSextionA">
    <div className="bg-green-600
    h-auto w-full flex py-[5%]  px-[1%] lg:flex-row flex-col"
    >
      <div className="fadeDownBig lg:w-1/2 w-full flex justify-center flex-col items-center animated fadeDownBig">
        <h3 className="lg:text-[100px] text-[70px]">About Us</h3>
        <button type="button" className="text-[25px] flex items-center gap-3 bg-green-700 text-white font-bold py-4 px-3 rounded-lg">
          <Link to="/"><span>Home</span></Link>
          <span className="fa fa-angle-right text-[35px]" />
          <Link to="/about"><span>About</span></Link>
        </button>
      </div>
      <div className="lg:w-1/2 w-full lg:mt-auto mt-10">
        <img src="https://freepngimg.com/download/coffee/68495-coffee-instant-tea-drink-mug-design-coffeemaker.png" alt="coffe bean" className="w-full rounded animate-pulse" />
      </div>
    </div>
  </div>
);
export default AboutSextionA;
