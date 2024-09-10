import React from "react";
import Login from "./Login";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-12" id="hero">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 sm:gap-10 lg:gap-40">
          <img
            alt="hero img"
            src="./hero.jpeg"
            className="w-3/4 sm:w-1/2 lg:w-1/3 rounded-lg shadow-2xl"
          />

          <div className="lg:w-2/5">
            <h1 className="text-4xl font-bold">
              Shop Smarter, Shop Faster with NovaCart!
            </h1>
            <p className="py-6 xl:py-8">
              Seamless shopping with unbeatable prices. Discover handpicked
              products from tech to fashion, all just a click away. Fast
              shipping, personalized picks, and secure checkout with NovaCart.
            </p>
            <label className="input input-bordered flex items-center gap-2 mb-5 dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your email to login"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              />
            </label>
            <button
              className="btn text-white bg-black hover:bg-slate-800 duration-300 xl:mt-4"
              onClick={() => {
                document.getElementById("my_modal_3").showModal();
              }}
            >
              Get Started
            </button>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
