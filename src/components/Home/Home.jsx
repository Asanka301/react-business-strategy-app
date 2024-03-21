import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                WE PROMOTE YOUR <span>BUSINESS</span>
              </h3>
              <p>
                Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosqui ratione.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
