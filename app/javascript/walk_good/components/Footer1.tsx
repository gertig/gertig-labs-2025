import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import styles from "./Footer1.module.css";

// Import logo asset
import whiteLogo from "../assets/img/logo/white-log.svg";

const Footer1 = () => {
  useEffect(() => {
    // Apply background image for this footer
    const footerElement = document.querySelector(
      ".footer-section[data-background]"
    );
    if (footerElement) {
      const htmlElement = footerElement as HTMLElement;
      const image = htmlElement.dataset.background;
      if (image) {
        htmlElement.style.backgroundImage = `url('${image}')`;
      }
    }
  }, []);

  return (
    <footer
      className={`footer-section fix bg-cover ${styles.footer}`}
      data-background="/assets/img/footer/footer-bg.jpg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer-widget-wrapper-new">
          <div className="flex flex-wrap">
            <div
              className="xl:w-1/3 lg:w-2/5 md:w-2/3 sm:w-1/2 wow fadeInUp wow"
              data-wow-delay=".2s"
            >
              <div className="single-widget-items text-center">
                <div className="widget-head">
                  <a href="#">
                    <img src={whiteLogo} alt="Walk Good Travel" />
                  </a>
                </div>
                <div className="footer-content">
                  <h3>Subscribe Newsletter</h3>
                  <p>Get Our Latest Deals and Updates</p>
                  <div className="footer-input">
                    <input
                      type="email"
                      id="email2"
                      placeholder="Your email address"
                    />
                    <button
                      className="newsletter-btn theme-btn flex items-center"
                      type="submit"
                    >
                      Subscribe <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="social-icon flex items-center justify-center space-x-4">
                    <a href="#" className="social-link">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:w-1/6 lg:w-1/4 md:w-1/3 sm:w-1/2 lg:pl-5 wow fadeInUp wow"
              data-wow-delay=".4s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/destinations">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/tours">Tours</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 lg:pl-5 wow fadeInUp wow"
              data-wow-delay=".6s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Services</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/tours">Adventure Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours">Cultural Experiences</Link>
                  </li>
                  <li>
                    <Link href="/tours">Custom Travel Planning</Link>
                  </li>
                  <li>
                    <Link href="/tours">Group Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours">Solo Travel Support</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:pl-5 wow fadeInUp wow"
              data-wow-delay=".6s"
            >
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-items">
                    <div className="icon">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div className="content">
                      <h6>
                        Walk Good Travel
                        <br />
                        New York, NY
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <EnvelopeIcon className="w-5 h-5" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="mailto:info@walkgoodtravel.com">
                          info@walkgoodtravel.com
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="tel:+15551234567">+1 555 123 4567</a> <br />
                        <a href="tel:+15557654321">+1 555 765 4321</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Copyright © <span>Walk Good Travel,</span> All Rights Reserved.
            </p>
            <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
