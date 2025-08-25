import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* Top Section */}
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        
        {/* Logo + Description */}
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="HooBank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              {/* White headings */}
              <h4 className="font-medium text-[18px] leading-[27px] text-white mb-4">
                {section.title}
              </h4>

             
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-white hover:cursor-pointer text-[16px] leading-[24px] transition-colors duration-300 ${
                      index !== section.links.length - 1 ? "mb-3" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <p className="text-dimWhite text-[16px] leading-[27px] text-center">
          Copyright © 2025 HooBank. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer hover:brightness-125 transition-all duration-300 ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
