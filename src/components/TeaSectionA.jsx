import React from 'react';
import { Link } from 'react-router-dom';

const TeaSectionA = () => (
  <div className="AboutSextionA">
    <div className="bg-green-600
    h-auto w-full flex py-[5%]  px-[1%] lg:flex-row flex-col"
    >
      <div className="fadeDownBig animated lg:w-1/2 w-full flex justify-center flex-col items-center">
        <h3 className="lg:text-[100px] text-[70px]">Our Tea</h3>
        <button type="button" className="text-[25px] flex items-center gap-3 bg-green-700 text-white font-bold py-4 px-3 rounded-lg">
          <Link to="/"><span>Home</span></Link>
          <span className="fa fa-angle-right text-[35px]" />
          <Link to="/tea">
            <span>
              Tea Products
            </span>

          </Link>
        </button>
      </div>
      <div className="lg:w-1/3 lg:mt-auto mt-10">
        <img src="https://freepngimg.com/save/155652-organic-mint-green-tea-png-download-free/512x512" alt="coffe bean" className="w-full rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export default TeaSectionA;
