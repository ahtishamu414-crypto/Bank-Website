import React from 'react'
import style from "../style";
import Arrow from "../assets/arrow-up.svg";

const Getstarted = () => {
  return (
    <div className={`${style.flexCenter} h-[140px] w-[140px] absolute top-[260px] left-[450px] p-[2px] rounded-full bg-blue-gradient`}>
      {/* Inner black circle */}
      <div className={`${style.flexCenter} flex-col bg-black w-full h-full rounded-full`}>
        
  
        <div className={`${style.flexCenter} flex-row`}>
          <p className="text-[18px] leading-[23px] font-medium text-gradient">
            Get
          </p>
          <img src={Arrow} alt="Arrow" className="w-[23px] h-[23px] object-contain ml-1" />
        </div>

       
        <p className="text-[18px] leading-[23px] font-medium text-gradient">
          Started
        </p>
      </div>
    </div>
  )
}

export default Getstarted
