import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

const HomeProduct = () => {
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
  const filterData = product.filter((data) => data.home === true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplayTime: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-7">
        <div>
          <h1 className="font-bold text-2xl pb-2">Recommended Products</h1>
          <p>
            Discover the pinnacle of innovation with our top-rated products.
            From cutting-edge technology and stylish accessories to
            high-performance gear and luxury items, experience seamless
            performance, stunning design, and advanced features across all our
            offerings.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
