import React from "react";
import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "./About2.module.css";

// Import assets
import about03 from "../assets/img/about/03.jpg";
import about04 from "../assets/img/about/04.png";
import about05 from "../assets/img/about/05.jpg";
import groupImg from "../assets/img/about/group.png";
import planeShape2 from "../assets/img/about/plane-shape2.png";
import checkIcon from "../assets/img/check.png";

const About2 = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="max-w-7xl mx-auto px-4">
        <div className="about-wrapper-2">
          <div className="flex flex-wrap gap-4">
            <div className="lg:w-1/2">
              <div className="about-image">
                <img
                  src={about03}
                  alt="Walk Good Travel Experience"
                  className="wow img-custom-anim-left"
                />
                <div className="shape-image float-bob-y">
                  <img src={about04} alt="Caribbean Culture" />
                </div>
                <div className="group-image float-bob-x">
                  <img src={groupImg} alt="Travel Group" />
                </div>
                <div className="about-image-2">
                  <img
                    src={about05}
                    alt="Jamaica Adventures"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                  />
                  <div className="plane-shape">
                    <img src={planeShape2} alt="Travel" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    About Walk Good Travel
                  </span>
                  <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                    Authentic Caribbean Experiences & Cultural Connections
                  </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                  Walk Good Travel specializes in authentic Caribbean and
                  international cultural experiences. We connect travelers with
                  local communities, traditions, and hidden gems that showcase
                  the true spirit of each destination.
                </p>
                <div
                  className="about-items wow fadeInUp wow"
                  data-wow-delay=".3s"
                >
                  <div className="about-icon-items">
                    <div className="icon">
                      <img src={checkIcon} alt="Check" />
                    </div>
                    <div className="content">
                      <h5>
                        Authentic Cultural <br /> Experiences
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Connect with local communities and <br /> experience
                      genuine Caribbean culture.
                    </p>
                  </div>
                </div>
                <div
                  className="about-items wow fadeInUp wow"
                  data-wow-delay=".5s"
                >
                  <div className="about-icon-items">
                    <div className="icon">
                      <img src={checkIcon} alt="Check" />
                    </div>
                    <div className="content">
                      <h5>
                        Personalized Travel <br /> Planning
                      </h5>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Custom itineraries designed around <br /> your interests
                      and travel style.
                    </p>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="theme-btn wow fadeInUp wow flex items-center"
                  data-wow-delay=".7s"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
