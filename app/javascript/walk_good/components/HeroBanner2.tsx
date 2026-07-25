import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./HeroBanner2.module.css";

const HeroBanner2 = () => {
  useEffect(() => {
    // Initialize background images if needed
  }, []);

  const [isActive, setIsActive] = useState("tour");

  return (
    <section className="hero-section-2">
      <div
        className={`hero-2 bg-cover ${styles.heroBg}`}
        data-background="/assets/img/hero/hero2.jpg"
      >
        <div className="max-w-7xl mx-auto px-4 custom-container-3">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2">
              <div className="hero-content">
                <div className="sub-title wow fadeInUp">
                  Walk good, travel better
                </div>
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Discover Your Next <br />
                  Adventure Journey
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Experience authentic Caribbean culture and beyond with our
                  expertly curated travel experiences. <br /> From hidden gems
                  to must-see destinations, we make every journey unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best-price-section mb-0">
        <div className="max-w-7xl mx-auto px-4 custom-container-3">
          <div className="hero-bottom">
            <div className="flex flex-wrap">
              <div className="best-price-wrapper w-full">
                <div className="content wow fadeInUp" data-wow-delay=".3s">
                  <h2>Find Your Perfect Trip</h2>
                </div>
                <ul className="nav flex">
                  <li
                    className={`nav-item wow fadeInUp ${
                      isActive === "destinations" ? "active" : ""
                    }`}
                    onClick={() => setIsActive("destinations")}
                    data-wow-delay=".3s"
                  >
                    <a className="nav-link cursor-pointer">Destinations</a>
                  </li>
                  <li
                    className={`nav-item wow fadeInUp ${
                      isActive === "tour" ? "active" : ""
                    }`}
                    onClick={() => setIsActive("tour")}
                    data-wow-delay=".5s"
                  >
                    <a className="nav-link cursor-pointer">Tours</a>
                  </li>
                  <li
                    className={`nav-item wow fadeInUp ${
                      isActive === "experiences" ? "active" : ""
                    }`}
                    onClick={() => setIsActive("experiences")}
                    data-wow-delay=".7s"
                  >
                    <a className="nav-link cursor-pointer">Experiences</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content w-full">
                <div
                  className={`tab-pane ${
                    isActive === "destinations" ? "active" : ""
                  }`}
                >
                  <div className="comment-form-wrap">
                    <form action="#" method="POST">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                        <div className="col">
                          <div className="form-clt">
                            <span>Looking For</span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Destination Name"
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Budget</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>Select Budget</option>
                                <option>$500 - $1000</option>
                                <option>$1000 - $2000</option>
                                <option>$2000 - $5000</option>
                                <option>$5000+</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Region</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>All Regions</option>
                                <option>Caribbean</option>
                                <option>Central America</option>
                                <option>South America</option>
                                <option>Africa</option>
                                <option>Asia</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Travel Date</span>
                            <div className="form-clt">
                              <input
                                type="date"
                                name="date1"
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Search</span>
                            <button
                              type="submit"
                              className="theme-btn w-full flex items-center justify-center"
                            >
                              Search
                              <MagnifyingGlassIcon className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={`tab-pane ${isActive === "tour" ? "active" : ""}`}
                >
                  <div className="comment-form-wrap">
                    <form action="#" method="POST">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                        <div className="col">
                          <div className="form-clt">
                            <span>Tour Type</span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Adventure, Cultural, etc."
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Duration</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>Select Duration</option>
                                <option>1-3 days</option>
                                <option>4-7 days</option>
                                <option>1-2 weeks</option>
                                <option>2+ weeks</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Destination</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>All Destinations</option>
                                <option>Jamaica</option>
                                <option>Barbados</option>
                                <option>Trinidad & Tobago</option>
                                <option>Costa Rica</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Start Date</span>
                            <div className="form-clt">
                              <input
                                type="date"
                                name="date1"
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Search Tours</span>
                            <button
                              type="submit"
                              className="theme-btn w-full flex items-center justify-center"
                            >
                              Find Tours
                              <MagnifyingGlassIcon className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={`tab-pane ${
                    isActive === "experiences" ? "active" : ""
                  }`}
                >
                  <div className="comment-form-wrap">
                    <form action="#" method="POST">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                        <div className="col">
                          <div className="form-clt">
                            <span>Experience Type</span>
                            <input
                              type="text"
                              name="name"
                              placeholder="Food, Music, Art, etc."
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Group Size</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>Select Size</option>
                                <option>Solo</option>
                                <option>Couple</option>
                                <option>Small Group (3-8)</option>
                                <option>Large Group (9+)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Location</span>
                            <div className="form">
                              <select className="single-select w-full">
                                <option>All Locations</option>
                                <option>Kingston</option>
                                <option>Montego Bay</option>
                                <option>Negril</option>
                                <option>Ocho Rios</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Preferred Date</span>
                            <div className="form-clt">
                              <input
                                type="date"
                                name="date1"
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-clt">
                            <span>Find Experiences</span>
                            <button
                              type="submit"
                              className="theme-btn w-full flex items-center justify-center"
                            >
                              Explore
                              <MagnifyingGlassIcon className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
