import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeProduct from "../components/HomeProduct";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeProduct />
      <Footer />
    </>
  );
};

export default Home;
