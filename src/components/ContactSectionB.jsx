/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ContactSectionB = () => (
  <div className="w-ful contacts py-10">
    <div className="flex lg:flex-row flex-col lg:w-[80%] w-full lg:container mx-auto gap-[5%] py-[2%] bg-black opacity-50 p-12 ">
      <div className="lg:w-1/2 w-full flex justify-center flex-col">
        <h2 className="text-green-500 text-xl font-bold">GET IN TOUCH WITH US</h2>
        <h3 className="text-[25px]">How Can We Help You?</h3>
        <form action="POST" className="mt-5">
          {/* First Inputs */}
          <div className="input-group flex gap-10">
            <input type="text" placeholder="First Name" name="firstname" className="w-1/2" />
            <input type="text" placeholder="Second Name" name="lastname" className="w-1/2" />
          </div>

          {/* Second Inputs */}
          <div className="input-group flex">
            <input type="text" placeholder="Email" name="email" className="w-full" />
          </div>

          {/* Third Inputs */}
          <div className="input-group flex">
            <input type="text" placeholder="Phone" name="phone" className="w-full" />
          </div>

          {/* Forth Inputs */}
          <div className="input-group flex">
            <textarea placeholder="Message" name="message" id="3" cols="80" rows="2" />
          </div>

          <button type="button" className="bg-green-400 text-black text-lg  px-3 rounded mt-5">Submit</button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full mt-10">
        <h2 className="text-green-500 text-xl font-bold">VISIT TEAM GEEK</h2>
        <p className="border-b-4 border-green-400 pb-5 mb-5 font-thin text-lg">
          Feel free to reach out to us
          to schedule a conversation
          or communicate with our
          team via phone or email.
          If you're interested in
          learning more about Golden Harvest

        </p>
        <div className="flex flex-col">
          <p className="flex">
            <span className="fa fa-phone text-green-400 text-2xl mr-5" />
            <span>
              <p>+971504777204</p>
              <p>+971529155445</p>
              <p>+250788202604</p>
            </span>
          </p>
          <p className="flex mt-5">
            <span className="fas fa-map-marker text-green-400 text-2xl mr-5" />
            <span>
              <p>United Arab Emirates,</p>
              <p>Cold Stores Building, Block 29</p>
            </span>
          </p>
          <p className="mt-5">
            <span className="fa fa-envelope text-green-400 text-2xl mr-5" />
            <span>Info@goldenharvestz.com</span>
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto  flex flex-col justify-center opacity-none text w-[80%] mt-10">
      <h2 className="text-green-500 text-3xl font-bold">Explore and Savor:</h2>
      <p className="lg:w-3/5 w-[95%] my-2 font-thin lg:text-lg text-sm">Feel free to browse our collection and discover the exceptional range of teas and coffees we offer. If you have any questions or need assistance in finding the perfect blend, our dedicated team is here to help. Simply reach out, and we'll be pleased to assist you in your quest for the perfect brew.</p>

      <p className="lg:w-3/5 w-[95%] my-2 font-thin lg:text-lg text-sm">Thank you for choosing Golden Harvest as your tea and coffee destination. We look forward to becoming a part of your daily ritual and sharing in the joy of sipping the golden goodness of life with you. Cheers to your golden harvest!</p>
    </div>
  </div>
);
export default ContactSectionB;
