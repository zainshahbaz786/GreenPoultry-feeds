import React from "react";
import BroilerFeed from "./Images/broilerfeeds.jpg";
import LayerFeed from "./Images/layerfeeds.jpg";
import BreederFeed from "./Images/breederfeeds.jpg";

const OurProductsPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingBottom: "60px" }}>
        Green Poultry Feed Brands
      </h1>
      {/* inserting cards of types */}
      <div className="CardContainer">
        {/* 1st div  */}
        <div className="feedcards">
          <div className="image" style={{ backgroundColor: "#f5f5f0" }}>
            <img
              alt=""
              href="#"
              src={BroilerFeed}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="content">
            <h3 style={{ color: "#EC7063", fontWeight: "900" }}>
              Broiler Feeds
            </h3>
            <ol>
              <li>
                <b>G1(14PS)</b>Broiler Pre Starter Ration 0 to 10 Days
              </li>
              <li>
                <b>G2(14SS)</b>Broiler Starter Ration 11 to 20 Days
              </li>
              <li>
                <b>G3(14GS)</b>Broiler Grower Ration 21 to 28 Days
              </li>
              <li>
                <b>G4(15FS)</b>Finisher Ration
              </li>
            </ol>
          </div>
        </div>
        {/* 2nd Div   */}
        <div className="feedcards">
          <div class="image" style={{ backgroundColor: "#f5f5f0" }}>
            <img
              alt=""
              href="#"
              src={LayerFeed}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="content">
            <h3 style={{ color: "#2ECC71", fontWeight: "900" }}>Layer Feeds</h3>
            <ol>
              <li>
                <b>G10</b>Layer Chick Starter 0-4 Weeks
              </li>
              <li>
                <b>G11</b>Layer Chick Grower 5-8 Weeks
              </li>
              <li>
                <b>G12</b>Layer Developer 9-16 Weeks
              </li>
              <li>
                <b>G13</b>PL Layer Pre-Layer 16 Weeks
              </li>
              <li>
                <b>G13</b>CC Cage Ration
              </li>
              <li>
                <b>G13</b>FOH layer Floor Ration
              </li>
            </ol>
          </div>
        </div>
        {/* 3rd div  */}
        <div class="feedcards">
          <div class="image" style={{ backgroundColor: "#f5f5f0" }}>
            <img
              alt=""
              href="#"
              src={BreederFeed}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="content">
            <h3 style={{ color: "#34495E", fontWeight: "900" }}>
              Breeder Feeds
            </h3>
            <ol>
              <li>
                <b>G16</b>Breeder Starter
              </li>
              <li>
                <b>G17</b>Breeder Grower
              </li>
              <li>
                <b>G18</b>Breeder Layer
              </li>
            </ol>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        corporis error, quidem explicabo, officiis eius perspiciatis veniam
        quaerat optio assumenda vel sit neque et? Voluptates error quibusdam
        labore quam ipsum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        corporis error, quidem explicabo, officiis eius perspiciatis veniam
        quaerat optio assumenda vel sit neque et? Voluptates error quibusdam
        labore quam ipsum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        corporis error, quidem explicabo, officiis eius perspiciatis veniam
        quaerat optio assumenda vel sit neque et? Voluptates error quibusdam
        labore quam ipsum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        corporis error, quidem explicabo, officiis eius perspiciatis veniam
        quaerat optio assumenda vel sit neque et? Voluptates error quibusdam
        labore quam ipsum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        corporis error, quidem explicabo, officiis eius perspiciatis veniam
        quaerat optio assumenda vel sit neque et? Voluptates error quibusdam
        labore quam ipsum.
      </p>
    </>
  );
};

export default OurProductsPage;
