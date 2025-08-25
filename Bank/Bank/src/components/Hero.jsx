import React from "react";
import style from "../style";
import discount from "../assets/discount.svg";
import robot from "../assets/robot.png";
import Getstarted from "./Getstarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${style.paddingY} bg-black`}
    >
      {/* Left Section */}
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        {/* Discount badge */}
        <div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2 relative">
          <img
            src={discount}
            alt="Discount"
            className="w-[32px] h-[32px] mr-2"
          />
          <p className="text-white">
            20% Discount for 1 Month Account
          </p>
        </div>

        {/* Heading + Getstarted button */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-semibold ss:text-[72px] text-[52px] text-white flex-1">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
            <br />
            Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4">
            <Getstarted />
          </div>
        </div>

        {/* Description */}
        <p className="text-white max-w-[470px] mt-5">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Right Section - Robot Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={robot}
          alt="Robot"
          className="w-full max-w-[700px] h-auto object-contain"
        />
         <div className="absolute z-[0] w-[40%] h-[3%] top-[0]  pink__gradient"/>
         <div className="absolute z-[0] w-[40%] h-[30%] rounded-full bottom-40  white__gradient"/>
         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
    </section>
  );
};
export default Hero