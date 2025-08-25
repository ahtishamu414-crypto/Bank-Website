import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] transition-all duration-300`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[92px] w-[100px] object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)] rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
