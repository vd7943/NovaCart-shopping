import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("https://novacart-backend.onrender.com/product");
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Crafted for You:{" "}
            <span className="font-extrabold text-4xl pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-text">
              Unbeatable Products, Unmatched Value!
            </span>
          </h1>
          <p className="text-stone-600 my-5 dark:text-white">
            At{" "}
            <span className="text-black font-bold dark:text-gray-400">
              NovaCart
            </span>
            , we pride ourselves on delivering top-notch products that combine
            style, functionality, and durability. Each item in our collection is
            carefully selected to offer the best value without compromising on
            quality. Explore our range and experience a perfect fusion of
            innovation and craftsmanship, designed just for you.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 duration-300 cursor-pointer">
            <Link to="/">Back</Link>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {product.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
