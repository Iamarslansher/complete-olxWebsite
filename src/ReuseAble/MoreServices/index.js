import React from "react";
import "./index.css";

import animal from "../../Views/MainDashbord/image/animal.png";
import bikes from "../../Views/MainDashbord/image/bikes.png";
import books from "../../Views/MainDashbord/image/books.png";
import camera from "../../Views/MainDashbord/image/camera.png";
import fshion from "../../Views/MainDashbord/image/fashion.png";
import furniture from "../../Views/MainDashbord/image/furniture.png";
import industrial from "../../Views/MainDashbord/image/industrial.png";
import jobs from "../../Views/MainDashbord/image/jobs.png";
import kids from "../../Views/MainDashbord/image/kids.png";
import mobiles from "../../Views/MainDashbord/image/mobiles.png";
import propertyForRent from "../../Views/MainDashbord/image/propertyForRent.png";
import propertyForSale from "../../Views/MainDashbord/image/propertyForSale.png";
import services from "../../Views/MainDashbord/image/services.png";
import vehicles from "../../Views/MainDashbord/image/vehicles.png";

function MoreServices() {
  const servicesObject = [
    { image: animal, title: "Animal" },
    { image: books, title: "Books" },
    { image: bikes, title: "Bikes" },
    { image: camera, title: "Camera" },
    { image: fshion, title: "Fashion" },
    { image: furniture, title: "furniture" },
    { image: industrial, title: "industrial" },
    { image: jobs, title: "Jobs" },
    { image: kids, title: "Kids" },
    { image: mobiles, title: "Mobiles" },
    { image: propertyForRent, title: "Property For Rent" },
    { image: propertyForSale, title: "Property For Sale" },
    { image: services, title: "Services" },
    { image: vehicles, title: "Vehicles" },
  ];

  return (
    <div className="moreServices-container">
      <h1 className="servicesHeading">
        More
        <span className="headingSpan"> Services</span>
      </h1>
      <p className="servicesText">
        Through OLX, users can find second-hand items at affordable prices, and
        sellers can reach a diverse audience, making the buying and selling
        process convenient and efficient. With its broad reach and user-friendly
        interface, OLX has become a go-to platform for those seeking
        cost-effective solutions for both buying and selling used goods and
        services.
      </p>
      <div className="services-div">
        {servicesObject.map((item) => {
          return (
            <div className="servicesItem">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreServices;
