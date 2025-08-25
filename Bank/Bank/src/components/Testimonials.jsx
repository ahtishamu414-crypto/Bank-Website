import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id="client" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      {/* Heading & Description */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px]">
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-white max-w-[470px] text-left`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Feedback Cards - 3 in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
