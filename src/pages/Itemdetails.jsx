/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ItemDetail = ({ Coffee, Tea }) => {
  // Add And Reduce  On Cart......
  const [addCart, SetAddCart] = useState(0);

  // hundlelling reduceCart.....
  const hundleReduceCart = () => {
    if (addCart > 0) {
      SetAddCart(addCart - 1);
    } else {
      alert('You have no Item in the Cart');
    }
  };

  // hundlelling addCart.....
  const hundleAddCart = () => {
    SetAddCart(addCart + 1);
  };
  const { name } = useParams();
  // Find the item with the matching ID in both sets of items
  const selectedCofeeItem = Coffee.find((item) => item.name.toString() === name);
  const selectedTeaItem = Tea.find((item) => item.name.toString() === name);

  // Determine which set of items to use based on whether an item is found in `items` or `watchitems`
  const item = selectedCofeeItem || selectedTeaItem;

  // State variables to control visibility of description and specification sections
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isSpecificationVisible, setIsSpecificationVisible] = useState(false);

  if (!item) {
    return <div>Item not found!</div>;
  }

  const {
    name: product, price, BigProducts,
    image, category,
    description, specification,
  } = item;
  const [CurrentImageIndex, setCurrentImageIndex] = useState(0);

  const Prev = () => {
    const newIndex = (CurrentImageIndex - 1 + item.image.length) % item.image.length;
    setCurrentImageIndex(newIndex);
  };

  const Next = () => {
    const newIndex = (CurrentImageIndex + 1) % item.image.length;
    setCurrentImageIndex(newIndex);
  };

  // Function to get random products excluding the current item
  const getRandomProducts = (array, excludeName, count) => {
    const shuffled = array.filter((item) => item.name !== excludeName).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get three random products excluding the current item from both tea and coffee items
  const randomProducts = getRandomProducts([...Coffee, ...Tea], item.name, 3);

  // Filter related products with the same category name
  const relatedProducts = (item.type === 'Coffee' ? Coffee : Tea).filter(
    (product) => product.category === category && product.name !== item.name,
  );
  // Shuffle the related products randomly
  const shuffledRelatedProducts = relatedProducts.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="w-full ">
      <div className=" pb-[10%]">
        <h2 className="ml-[12%] mt-[2%] flex gap-2">
          <Link to="/"><span className="font-bold-md text-xs md:text-sm lg:text-lg text-gray-00 border-r border-black  mr-3 pr-2">Home</span></Link>
          <Link to="/tea"><span className="font-bold-md text-xs md:text-sm lg:text-lg text-gray-00 border-r border-black  mr-3 pr-2">Tea</span></Link>
          <Link to="/coffee">
            <span className="font-bold-md text-xs md:text-sm lg:text-lg text-gray-00 border-r border-black  mr-3 pr-2">
              Coffee
            </span>

          </Link>
          <span className="font-bold-md text-xs md:text-sm lg:text-lg text-gray-00">{product}</span>
          <div className="flex">
            <i className="  fa fa-shopping-cart text-black text-lg" />
            <span className="font-bold  w-5 h-5  items-center rounded-full flex justify-center  bg-green-500">
              {addCart}
            </span>
          </div>

        </h2>
        <div className="container mx-auto w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-11  justify-center pt-[5%]">
          <div className="col-span-1 ">
            <div className="w-[90%] flex justify-center items-center h-[100%] border border-solid border-gray-500 pt-10 px-5 mb-[7%]">
              <img
                className="w-[350px]"
                src={BigProducts}
                alt={`Product ${CurrentImageIndex + 1}`}
              />

            </div>
            {/* Small Slidding buttom images  */}
            <div className="container mx-auto flex gap-2 justify-center text-center -mt-[5%]">
              <span
                onClick={Prev}
                className="group-hover:block cursor-pointer fa fa-angle-left text-black text-2xl font-bold  self-center"
              />
              <img
                className="w-[10%]  border border-solid border-gray-500 rounded-lg"
                src={image}
                alt={`Product ${CurrentImageIndex}`}
              />
              <img
                className="w-[10%] hidden lg:flex border border-solid rounded-lg"
                src={image}
                alt={`Product ${CurrentImageIndex + 1}`}
              />
              <img
                className="w-[10%] hidden lg:flex border border-solid border-gray-500 rounded-lg"
                src={image}
                alt={`Product ${CurrentImageIndex + 2}`}
              />
              <i
                onClick={Next}
                className="group-hover:block cursor-pointer fa fa-angle-right text-black text-2xl font-bold self-center"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col mt-[15%] lg:mt-[0%]">
            <h3 className="font-bold text-lg text-black w-1/2">{product}</h3>
            <span className="mt-3 flex gap-1">
              <span className="text-xl font-medium">
                $
                {price}
              </span>
            </span>
            <div className="font-bold-medium text-sm text-676770 mt-3">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix
              at, vel pertinax sensibus id, error epicurei mea et. Qui purto
              zril laoreet. Ex error omnium interpretaris pro.
            </div>
            <div className="flex gap-4 text-center mt-4">
              <span className="border border-solid border-gray-400  lg:px-8 lg:pt-3 px-4 py-3 h-auto text-xl rounded-xl font-bold">

                {addCart}
                {' '}
                Package(s)
              </span>

              <span className="flex flex-col font-bold text-3xl">
                <i onClick={hundleAddCart} className="fa fa-angle-up" />
                <i onClick={hundleReduceCart} className="fa fa-angle-down" />
              </span>
              <button
                type="button"
                className="rounded-lg bg-rgba-custom text-white font-bold lg:px-6 lg:py-2 px-3 py-1 text-sm"
              >
                Add to cart
                <i className="fa fa-shopping-cart ml-5" />
              </button>
            </div>
            <div className="flex gap-10 mt-10 text-lg">
              <span className="fa fa-heart-o" />
              <span className="fa fa-exchange" />
            </div>
            <div className="flex gap-3 mt-5 text-lg">
              <span className="font-bold">SKU:</span>
              <span className="text-gray-500">135</span>
            </div>
            <div className="flex gap-3 mt-5 text-lg">
              <span className="font-bold">Category:</span>
              <span className="text-gray-500">Drink</span>
            </div>
            <div className="flex gap-5 mt-5 text-lg bg-green-700 p-4 rounded-lg ">
              <span className="fa fa-info border-2 border-solid border-black h-[32px] px-2 py-1 rounded" />
              <span className="">
                <p className="text-white font-bold">
                  <span className="text-black font-bold"> Need help? </span>
                  Call UAE +971504777204
                </p>
                <p className="text-white font-bold">Monday - Friday 09:00 - 21:00</p>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="divider container mx-auto w-5/6 mt-16 border border-solid border-gray-200 lg:block hidden" />
      {/* Random Products */}
      <div className="container  mx-auto w-5/6 flex flex-col">
        <p className="text-3xl font-bold py-[2%] self-center lg:self-start">
          You May Like
          {' '}
          <span className="fa fa-coffee text-green-700" />
        </p>
        <div className="container mx-auto flex items-center justify-center gap-0 lg:gap-2 flex-col lg:flex-row">
          {randomProducts.map((product) => (
            <div
              className=" item hover:border-blue-500 group w-[200px]  flex flex-col justify-between pt-2 border border-solid border-gray-300 bg-white rounded-lg h-auto mb-4 relative col-span-4 lg:col-span-1 md:col-span-2"
              key={product.id}
            >
              <div className=" px-3 item-header flex justify-between flex-wrap lg:col-span-1 md:col-span-2" />
              <div className="item-image px-3 flex justify-center group">
                <img
                  className="w-[100%] h-auto"
                  src={product.image}
                  alt="home screen"
                />
              </div>
              <div className="mt-10 px-3">
                <span className="text-white font-bold text-xs leading-3 tracking-wider rounded bg-green-700 px-2 py-1">
                  New
                </span>
                <p className="category-name mt-3 text-sm text-black font-bold leading-6 ">
                  {product.name}
                </p>
                <p className="flex items-center justify-between category-price mt-3">
                  <span className="price text-black text-xl font-normal leading-6 group-hover:hidden mb-5">
                    $
                    {product.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
          <div className="bg-green-700 flex flex-col w-[215px] h-[200px] px-4 py-3 rounded-lg self-center  ml-0 lg:ml-[35%]">
            <h4 className="font-bold text-lg">Your Current Cart</h4>
            <span className="font-bold text-[26px] pt-4">
              $
              {addCart * 123}
            </span>
            <span className="font-[400] text-[15px]">
              for
              {' '}
              <span />
              {addCart}
              {' '}
              Package(s)
            </span>
            <button
              type="button"
              className=" rounded-lg bg-rgba-custom text-white font-bold px-6 py-3 w-[177px]"
            >
              Add to cart
              <i className="fa fa-plus ml-5" />
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="divider container mx-auto  my-2 border border-solid border-gray-200" />
        <p className="text-lg font-bold py-[5px] flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Description</span>
            {isDescriptionVisible && (
            <span className="font-medium w-1/3 mt-2 text-sm">{description}</span>
            )}
          </div>
          <span
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            className={`fa ${isDescriptionVisible ? 'fa-minus' : 'fa-plus'} border border-solid rounded border-gray-200 pt-[5px] text-[18px] px-1 hover:bg-green-500 h-7`}
          />
        </p>
        {/* Divider */}
        <div className="divider container mx-auto  my-2 border border-solid border-gray-200" />
        {/* Divider */}
        <div className="divider container mx-auto  my-2 border border-solid border-gray-200" />
        <p className="text-lg font-bold py-[5px] flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Specification</span>
            {isSpecificationVisible && (
            <span className="font-medium w-1/3 mt-2 text-sm">{specification}</span>
            )}
          </div>
          <span
            onClick={() => setIsSpecificationVisible(!isSpecificationVisible)}
            className={`fa ${isSpecificationVisible ? 'fa-minus' : 'fa-plus'} border border-solid rounded border-gray-200 pt-[5px] text-[18px] px-1 hover:bg-green-500 h-7`}
          />
        </p>
        {/* Divider */}
        <div className="divider container mx-auto  my-2 border border-solid border-gray-200" />
        {/* Related products */}
        <h2 className="text-3xl font-bold py-[5px] flex self-center lg:self-start">
          <span className="font-bold">Related Packages</span>
        </h2>
        <div className="mt-3">

          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-2 mt-4 lg:justify-start lg:items-baseline">
            {shuffledRelatedProducts.map((product) => (
              <div
                className=" item  group item hover:border-blue-500 group w-[200px]  flex flex-col justify-between pt-2 border border-solid border-gray-300 bg-white rounded-lg h-auto mb-4 relative col-span-4 lg:col-span-1 md:col-span-2"
                key={product.id}
              >
                <div className=" px-3 item-header flex justify-between flex-wrap lg:col-span-1 md:col-span-2">
                  <span className="text-gray-500 text-xs leading-4 tracking-tighter">Packages</span>
                  <span className="fas flex flex-col gap-2">
                    <i className="fa fa-heart-o" />
                  </span>
                </div>
                <div className="item-image px-3 flex justify-center group">
                  <img
                    className="w-[100%]"
                    src={product.image}
                    alt="home screen"
                  />
                </div>
                <div className="mt-10 px-3">
                  <span className="text-white font-bold text-xs leading-3 tracking-wider rounded bg-green-700 px-2 py-1">
                    New
                  </span>
                  <p className="category-name mt-3 text-sm text-black font-bold leading-6 ">
                    {product.name}
                  </p>
                  <p className="flex items-center justify-between category-price mt-3">
                    <span className="price text-black text-xl font-normal leading-6 group-hover:hidden mb-5">
                      $
                      {product.price}
                    </span>
                  </p>
                </div>
                <div className="hidden group-hover:block">
                  <div className="flex justify-between px-4 py-3 bg-green-700 text-white font-bold rounded-b-lg ">
                    <span>Add To Cart</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  Coffee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
ItemDetail.propTypes = {
  Tea: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default ItemDetail;
