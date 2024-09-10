import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="p-3 lg:mt-12 mt-7 flex justify-center items-center mb-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white light:bg-white light:text-black dark:border dark:border-white">
          <figure className="max-w-xs dark:border dark:border-white">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions flex items-center justify-between">
              <div className="badge bg-black text-white p-3">
                Rs {item.price}
              </div>
              <div className="badge badge-outline p-3 text-xs">
                {item.category}
              </div>
              <div>
                <button className="py-1 px-4 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 duration-300 cursor-pointer">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
