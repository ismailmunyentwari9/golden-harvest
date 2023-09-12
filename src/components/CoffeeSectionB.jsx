/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import CoffeeBag from './rsc/coffee.png';
import Coffee1 from './rsc/maraba 200.png';
import Coffee2 from './rsc/maraba 250.png';
import Cofee3 from './rsc/bourbon 200.png';
import Coffee4 from './rsc/bourbon 250.png';
import Coffee5 from './rsc/peaberry 200.png';
import Coffee6 from './rsc/peaberry 250.png';
import Coffee7 from './rsc/gishugi 200.png';
import Coffee8 from './rsc/gishugi 250.png';

export const CoffeeItems = [
  {
    id: 1,
    name: 'Coffee Maraba 200g',
    price: 82.46,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee1,
    BigProducts: CoffeeBag,

  },
  {
    id: 2,
    name: 'Coffee Maraba 250g',
    price: 82.46,
    discountPrice: 34,
    image: Coffee2,
    BigProducts: CoffeeBag,
  },
  {
    id: 3,
    name: 'Coffee Bourbon 200g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Cofee3,

    BigProducts: CoffeeBag,
  },
  {
    id: 4,
    name: 'Coffee Bourbon 250g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee4,
    BigProducts: CoffeeBag,
  },
  {
    id: 5,
    name: 'Coffe peaberry 200g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee5,
    BigProducts: CoffeeBag,
  },
  {
    id: 6,
    name: 'Coffee Peaberry 250g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee6,
    BigProducts: CoffeeBag,
  },
  {
    id: 7,
    name: 'Coffee Gishugi 200g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee7,
    BigProducts: CoffeeBag,
  },
  {
    id: 8,
    name: 'Coffee Gishugi 250g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Coffee8,
    BigProducts: CoffeeBag,
  },
];

const CoffeeSectionB = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (

    <div className="container mx-auto w-5/6 lg:mt-10 mt-0 mb-[5rem]">
      <div className="md:grid md:grid-cols-3 lg:flex gap-4 ">
        <div className="bg-black opacity-100 shadow-2xl rounded lg:flex-col lg:w-2/12 md:col-span-3 md:flex md:gap-40 lg:gap-10  px-2 flex-justify-center mb-3">
          <p className="w-1/1 font-bold text-lg text-white mt-6 flex  flex-wrap">Best Selling Coffee</p>
          <div className="lg:w-auto md:h-auto md:w-1/3 border-2 rounded-2xl border-white">
            <img src={Coffee4} alt="home screen" />
          </div>
          <div className=":flex flex-col items-center justify-center">
            <div className="lg:gap-10 lg:w-1/1  py-2 md:w-1/1 md:flex md:flex-col md:gap-40 md:px-4">

              <p className="flex gap-3 items-center text-white  text-lg mt-5 border-2 border-white rounded-r-xl justify-center fadeLeft animated">
                Shop Now
                <i className="fa fa-times" />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-8/12 md:col-span-2">
          <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {CoffeeItems.map((data, index) => (
              <Link to={`/name/${data.name}`}>
                {' '}
                <div
                  className=" wow fadeInLeftBig animated  item hover:border-green-800 group flex flex-col justify-between py-5 hover:py-0 border border-solid border-gray-300 bg-white rounded-lg h-auto mb-4 relative col-span-4 lg:col-span-1 md:col-span-2"
                  key={data.id}
                  data-wow-delay={`${index * 0.3}s`}
                >

                  <div className=" px-3 item-header flex justify-between flex-wrap lg:col-span-1 md:col-span-2">
                    <span className="text-black text-xs leading-4 tracking-tighter">Coffee</span>
                    <span className="fas flex flex-col gap-2">
                      <i className="fa fa-heart" />
                      <i className="fa fa-exchange" />
                    </span>
                  </div>
                  <div className="item-image px-3 flex justify-center group">
                    <img className="w-216 h-216" src={data.image} alt="home screen" />
                  </div>
                  <div className="mt-10 px-3">
                    <span className="text-white text-xs leading-3 tracking-wider rounded bg-green-800 px-2 py-1">
                      New
                    </span>
                    <p className="category-name mt-3 text-sm text-black font-bold leading-6 ">
                      {data.name}
                    </p>
                    <p className="flex items-center justify-between category-price mt-3">
                      <span className="price text-black text-xl font-normal leading-6">
                        $
                        {data.price}
                      </span>

                    </p>
                  </div>
                  <div className="hidden group-hover:block">
                    <div className="flex justify-between px-4 py-3 bg-green-800 text-white rounded-b-lg">
                      <span>Item info</span>
                      <i className="fa fa-info border-2 border-white p-[4px] rounded cursor-pointer" />
                    </div>
                  </div>

                </div>

              </Link>
            ))}
          </div>
        </div>
        <div className="h-auto rounded pt-4 px-4 py-4 border border-solid border-gray-300 lg:h-auto lg:w-2/12  md:col-span-1 md:h-1/3 italic">
          <p className="computer-components font-bold text-green-700 text-lg leading-6 w-3/4 mb-7 ">
            Tea & Coffee
          </p>
          <div className="componets-items">
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4  hover:not-italic"><p>Arabica Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Bourbon Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Maraba Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium hover:not-italic leading-5"><p>Peaberry Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Gishugi Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Rwandan Black Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Printers</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Rwandan Green Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Rukeri Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Gisovu Coffee</p></a>
            <a href="#link" className="componets-items text-black text-medium font-medium landing-4 hover:not-italic"><p>Rwandan Herbal Coffees</p></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoffeeSectionB;
