const Mission = () => (
  <div className="mission flex items-center h-[80vh] ">
    <div className="w-[70%]   container mx-auto bg-black flex justify-center flex-col items-center opacity-75 py-10 rounded">

      <p className="lg:text-[40px] md:text-[20px] text-15px w-[70%] text-center font-bold text-white animate-pulse">Awesome Coffee & Tea Selection Delivered To Your Door</p>
      <p className="lg:text-[20px] md:text-[15px] text-[10px] font-normal text-white text-center">Our mission is to connect you to the complete coffee and tea experience.</p>
      <button className="mt-5 bg-orange-500 rounded text-[25px] text-black font-bold py-1 px-3  hover:font-normal hover:bg-orange-400" type="button">
        Order  Now
        <span className="ml-3 fa fa-shopping-cart" />
      </button>
    </div>
  </div>
);
export default Mission;
