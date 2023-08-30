/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Coffe from './rsc/Goldenhaverstz-2.png';
import Barista from './rsc/BArista-534-251-25.jpg';

const About = () => (
  <div>
    <div className="about flex lg:flex-row flex-col w-[90%] container mx-auto gap-2 mb-10">
      <div className="lg:w-1/3 w-full">
        <div className="flex items-center text-green-700 gap-2 mt-5">
          {' '}
          <span className="fa fa-american-sign-language-interpreting text-[45px] text-green-700" />
          <p className="w-2/3 font-bold text-lg">ABOUT GOLDEN HARVEST</p>

        </div>
        <h1 className="text-[45px]">WHO WE ARE</h1>
        <p className="text-l w-5/6 animate-pulse">
          <i className="fas fa-quote-left" />
          {' '}
          Welcome to Golden Harvest, a leading distributor of premium coffee and exquisite tea products. With a passion for delivering exceptional taste experiences, we have established ourselves as a trusted name in the industry. Our journey began with a vision to bring the finest coffee beans and tea leaves from around the world to our customers' doorstep. We take great pride in sourcing only the freshest and most flavorful coffee varieties and tea blends available.
          {' '}
          <i className="fas fa-quote-right" />
        </p>
        <button type="button" className="py-1 px-2 bg-green-700 text-[25px] text-white font-bold-medium rounded hover:bg-green-600 mt-4">
          LEARN MORE
          <span className="fa fa-arrow-right font-normal ml-2" />
          {' '}
        </button>
      </div>
      <div className="lg:w-2/3 w-full about-right  mt-3 gap-2">
        <div className="flex lg:flex-row md:flex-row flex-col gap-4   p-2 transform hover:scale-105 transition duration-300 ease-in-out ">
          <img className="lg:w-1/2 md:w-1/2 w-full  rounded-lg animate-pulse" src={Coffe} alt="coffe" />
          <p className=" text-l lg:w-1/2 md:w-1/2 w-full  mt-[2%] font-bold italic">
            <i className="fa fa-coffee text-orange-800" />
            {' '}
            Immerse yourself in the enchanting world of tea artistry. Every leaf holds a symphony of delicate flavors, ready to dance on your taste buds. From soothing herbal infusions to robust black teas, our curated collection promises pure indulgence. Let every sip awaken your senses to the richness of extraordinary tea. Welcome to a realm where each cup is a delightful journey.
            {' '}
            <i className="fa fa-coffee text-orange-800" />
          </p>
        </div>
        <div className=" w-1/1  transform hover:scale-105 transition duration-300 ease-in-out flex lg:flex-row md:flex-row flex-col gap-4">
          <p className="lg:w-1/2 md:w-1/2 w-full  text-l mt-[3%] font-bold italic animation-pulse ml-2">
            <i className="fas fa-mug-hot text-orange-800" />
            {' '}

            Savor the natural sweetness with every sip of our exquisite coffee. From rich blends to delicate flavors, each cup is a masterpiece of taste, carefully curated for your ultimate enjoyment. Welcome to a world where every brew brings you pure bliss.
            {' '}
            <i className="fas fa-mug-hot text-orange-800" />
          </p>
          <img className="lg:w-1/2 md:w-1/2 w-full  animate-pulse " src={Barista} alt="fruits" />

        </div>
      </div>
    </div>

  </div>
);

export default About;
