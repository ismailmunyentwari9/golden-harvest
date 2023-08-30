const Mission = () => (
  <div className="mission flex items-center h-[80vh] ">
    <div className="w-[70%]   container mx-auto bg-black flex justify-center flex-col items-center opacity-75 py-10 rounded animate-pulse">

      <p className="lg:text-[40px] md:text-[20px] text-15px w-[70%] text-center font-bold text-white animate-pulse animation-baunce">Awesome Coffee & Tea Selection Delivered To Your Door</p>
      <p className="lg:text-[20px] md:text-[15px] text-[10px] font-normal text-white text-center">Our mission is to connect you to the complete coffee and tea experience.</p>
      <button className="mt-5 bg-green-400 rounded text-lg text-white font-bold py-1 px-3  hover:font-normal hover:bg-green-800" type="button">
        Order  Now
        <span className="ml-3 fa fa-shopping-cart" />
      </button>
    </div>
  </div>
);
export default Mission;
