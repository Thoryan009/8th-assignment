import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
const Banner = () => {
    // const 
  return (
    <div >
      <div className="hero bg-base-200 ">
        <div className="hero-content pt-20 pb-0 text-center">
          <div className="">
            <h1 className="text-5xl font-bold max-w-md mx-auto">
              We Build{" "}
              <span className="primary-color font-extrabold">Productive</span>{" "}
              Apps
            </h1>
            <p className="py-6 text-gray-500 max-w-3xl mx-auto">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-5 justify-center mb-8">
              <button className="btn btn-outline">
                {" "}
                <IoLogoGooglePlaystore /> Google Play Store
              </button>
              <button className="btn btn-outline">
                {" "}
                <FaAppStoreIos /> App Store
              </button>
            </div>
            <div>
              <img src="/assets/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
        <div className="primary-bg text-white p-16">
        <h4 className="font-extrabold  text-center text-5xl pb-10">Trusted by Millions, Built for You</h4>
        <div className="flex justify-center gap-25">
          <div className="text-center space-y-5">
            <h6 className="font-thin ">Total Downloads</h6>
            <h2 className="font-extrabold text-6xl">29.6M</h2>
            <h6>21% More than last month</h6>
          </div>
          <div className="text-center space-y-5">
            <h6 className="font-thin ">Total Reviews</h6>
            <h2 className="font-extrabold text-6xl">955K</h2>
            <h6>46% More than last month</h6>
          </div>
          <div className="text-center space-y-5">
            <h6 className="font-thin ">Active Apps</h6>
            <h2 className="font-extrabold text-6xl">132+</h2>
            <h6>31 More will launch</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
