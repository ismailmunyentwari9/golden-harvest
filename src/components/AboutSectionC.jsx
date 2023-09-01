import React from 'react';

const AboutSectionC = () => (
  <div className="flex container mx-auto w-5/6 my-20 lg:flex-row flex-col  lg:p-5 p-2">
    <div className="lg:w-1/2  w-full font-thin">
      <div className="flex  text-black gap-2 mt-5   justify-center">
        {' '}
        <span className="text-4xl fa fa-balance-scale text-black" />
        <div>
          <p className="font-bold">WHY CHOOSE GOLDEN HARVEST</p>
          <p className="lg:font-bold font-bold my-5 lg:w-5/6 w-full">Savor Every Sip and Immerse Yourself in Culture, where taste knows no boundaries , and every moment is steeped in golden perfection</p>
          <p className="text-[20px] font-thin lg:text-2xl text-lg italic lg:w-5/6 w-full">
            We take great pride
            in sourcing only the
            freshest and most
            flavorful coffee
            varieties and tea
            blends available.
            With a passion for
            delivering exceptional
            taste experiences,
            we have established
            ourselves as a trusted name in the industry

          </p>
          <div className="flex flex-col mt-10 gap-4">
            <p>
              <span className="border-2 rounded-full p-1 text-white bg-orange-700 mr-2 border-black fa fa-check" />
              <span className="font-thin">
                Best Way to Serve Our Coffee
              </span>

            </p>
            <p>
              <span className="border-2 rounded-full p-1 text-white bg-orange-700 mr-2 border-black fa fa-check" />
              <span className="font-thin">
                Low Cost & Onlie Order
              </span>

            </p>
          </div>
        </div>

      </div>
    </div>
    <div className="flex   flex-col lg:gap-20 gap-5 lg:w-1/2 w-full mt-20 ">
      <div className="flex gap-10">
        <div className="flex gap-3  lg:flex-row flex-col">
          <span className="fas fa-users text-orange-700 text-[35px]  " />
          <span className="font-thin lg:text-2xl text-lg">

            <span className="font-bold">34+</span>
            {' '}
            Satisfied Our Global Customers
          </span>
        </div>
        <div className="flex gap-3  lg:flex-row flex-col">
          <span className="fas fa-seedling text-orange-700 text-[35px] " />
          <span className="font-thin lg:text-2xl text-lg">
            <span className="font-bold">32+</span>
            {' '}
            Popular Testy Coffee Menu
          </span>
        </div>
        <div />
      </div>
      <div className="flex gap-10">
        <div className="flex gap-3  lg:flex-row flex-col">
          <span className="fas fa-award text-orange-700 text-[35px]  " />
          <span className="font-thin lg:text-2xl text-lg">

            <span className="font-bold">We’ve 13+</span>
            {' '}
            Years Of Experience
          </span>
        </div>
        <div className="flex gap-3  lg:flex-row flex-col">
          <span className="fas fa-clipboard-list text-orange-700 text-[35px] " />
          <span className="font-thin lg:text-2xl text-lg">
            <span className="font-bold">10+</span>
            {' '}
            Coffee Iteams Online Orders
          </span>
        </div>
        <div />
      </div>
    </div>
  </div>
);
export default AboutSectionC;
