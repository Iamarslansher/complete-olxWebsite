import React from "react";
import "./index.css";
import { useEffect, useState } from "react";

import Navbar from "../../ReuseAble/Navbar";
import Slider from "../../ReuseAble/Slider";
import MoreServices from "../../ReuseAble/MoreServices";
import CardItem from "../../ReuseAble/Card";
import Footer from "../../ReuseAble/Footer";
import { getingAds } from "../../config/firebase";

function MainDashbord() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const ads = await getingAds();
    setProducts(ads);
  };

  return (
    <div>
      <Navbar />
      <Slider />
      <MoreServices />
      {products.length == 0 ? (
        <h2 style={{ textAlign: "center" }}>
          <img
            src="https://i.pinimg.com/originals/f7/b3/db/f7b3db9036f64203f261a894b1c6333b.gif"
            alt=""
          />
        </h2>
      ) : (
        <div className="cardContainer">
          {products.map((item) => {
            return <CardItem item={item} />;
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default MainDashbord;
