import React from "react";
import {
  AppStoreIos,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
  FaAndroid,
  FaAppStore,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* upper section Banner */}
      <div className="bg-primary ">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>WE ARE READY TO TAKE YOUR CALL 24HOURS, 7 DAYS!</p>
          <h1 className="text-3xl md:text-5xl font-bold">+1 437-499-0651</h1>
        </div>
      </div>
      {/* bottem footer section  */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/* first col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            About Cab
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            dolores dolore adipisci quibusdam eum culpa deserunt illo hic.
            Possimus dolor accusamus nisi. Ipsa, quae laborum labore optio earum
            aliquid et?
          </p>
          {/* sicial link */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>
        {/* second col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Download
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            expedita obcaecati illo ut voluptates similique doloremque mollitia
            rem placeat dolore. Excepturi nihil atque tempora quae delectus,
            commodi vitae similique possimus!
          </p>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android user{" "}
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            IOS user{" "}
            <span>
              <FaAppStore className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>
        {/* third col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Contact
          </h1>
          <div className="flex items-center gap-4">
            <FaMapMarker /> 123 Street, Toronto, CA
          </div>
          <div className="flex items-center gap-4">
            <MdCall /> +1 437-499-0651
          </div>
          <div className="flex items-center gap-4">
            <MdEmail /> hamid.eqbali.1384
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer />{" "}
            <a href="https://hamideghbali.github.io/portfolio/">DO NOT TAP</a>
          </div>
        </div>
      </div>
      <p className="text-center py-4 text-sm">
        Copyright © 2024 .All rights reserved
      </p>
    </div>
  );
};

export default Footer;
