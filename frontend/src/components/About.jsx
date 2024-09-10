import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 mb-20">
      <div className="text-center pt-8">
        <h1 className="font-extrabold text-4xl pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-text">
          About NovaCart
        </h1>

        <p className="text-lg text-stone-600 leading-relaxed dark:text-gray-300 max-w-2xl mx-auto transition duration-300 hover:text-gray-900">
          NovaCart is committed to offering products that merge innovation with
          style and durability. Our goal is to provide our customers with
          unparalleled value while maintaining high-quality standards. From tech
          gadgets to everyday essentials, NovaCart delivers products that suit
          every lifestyle.
        </p>
        <p className="text-lg text-stone-600 mt-4 leading-relaxed dark:text-gray-300 max-w-2xl mx-auto transition duration-300 hover:text-gray-900">
          Founded with a passion for technology and user-centric design, we
          constantly evolve to bring you the latest in modern convenience. Join
          us as we continue to shape the future of e-commerce.
        </p>
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 duration-300 cursor-pointer">
            <Link to="/product">Explore Our Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
