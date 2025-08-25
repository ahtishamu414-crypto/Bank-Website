import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] bg-black-gradient feedback-card">
      {/* Quote Icon */}
      <img src={quotes} alt="quote" className="w-[42px] h-[27px] object-contain" />

      {/* Feedback Text */}
      <p className="font-normal text-white text-[18px] leading-[32px] my-10">
        {content}
      </p>

      {/* Profile Info */}
      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full object-cover" />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-white text-[20px]">{name}</h4>
          <p className="text-dimWhite text-[16px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
