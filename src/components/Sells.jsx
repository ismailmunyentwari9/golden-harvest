import React from 'react';
import CoffeeBag from './rsc/coffee.png';

const products = [
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
  {
    name: 'MEDIUM-ROASTED BEANS',
    price: 123,
    discountPrice: 34,
    image: CoffeeBag,
  },
];

const Sells = () => (
  <div className="sells py-10">
    <h2 className="text-center font-serif text-black font-bold text-4xl pb-6 ">
      FEATURED PRODUCTS
    </h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center rounded-b-xl">
      {products.map((product) => (
        <div
          key={product.name}
          className=" m-2  bg-white shadow-lg rounded-t-sm rounded-b-2xl transition-transform transform hover:scale-105 group "
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover p-2 " />
          <div className="mt-4 p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="mt-2">
              <span className="text-xl flex ">
                $
                {product.price}
                <span className="block text-sm text-red-500 line-through">
                  $
                  {product.discountPrice}
                </span>
              </span>

            </div>
          </div>
          <button type="button" className="bg-green-700 text-center w-full rounded-b-2xl py-4 text-white  text-[20px] font-thin hidden  group-hover:block">
            <span title="Add To Cart" className="fa fa-shopping-cart mr-2" />
            More Options
            {' '}
            <span title="Quick Review" className="fa fa-eye" />
          </button>
        </div>

      ))}
    </div>
  </div>
);

export default Sells;
