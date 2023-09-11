import React from 'react';
import Tea1 from './rsc/Gisovu 200.png';
import CoffeeBag from './rsc/coffee.png';
import Tea2 from './rsc/Gisovu 250.png';
import Tea3 from './rsc/Rwandan Habal 200.png';
import Tea7 from './rsc/Rwandan green 200.png';
import Coffee7 from './rsc/gishugi 200.png';
import Tea8 from './rsc/Rwandan green 250.png';
import Coffee4 from './rsc/bourbon 250.png';
import Coffee1 from './rsc/maraba 200.png';
import 'animate.css';

const products = [
  {
    id: 9,
    name: 'Tea Gisovu 200g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Tea1,
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
    id: 10,
    name: 'Tea Gisovu 250g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Tea2,
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
    id: 11,
    name: 'Tea Rwandan Habal 200g',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Tea3,
    BigProducts: CoffeeBag,
  },
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
    id: 15,
    name: 'Tea Rwandan green 200',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Tea7,
    BigProducts: CoffeeBag,
  },
  {
    id: 16,
    name: 'Tea Rwandan green 250',
    price: 123,
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    specification: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.',
    discountPrice: 34,
    image: Tea8,
    BigProducts: CoffeeBag,
  },
];

const Sells = () => (
  <div className=" sells py-10 container mx-auto">
    <h2 className="animate__animated animate__bounce text-center font-serif text-black font-bold text-4xl pb-6 ">
      FEATURED PRODUCTS
    </h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center rounded-b-xl">
      {products.map((product, index) => (
        <div
          key={product.name}
          className=" wow fadeInLeftBig animated m-2  bg-white shadow-lg rounded-t-sm rounded-b-2xl transition-transform transform hover:scale-105 group "
          data-wow-delay={`${index * 0.3}s`}
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
