import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import styles from "./Header3.module.css";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// Import logo asset
import blackLogo from "../assets/img/logo/black-logo.svg";

interface Header3Props {
  variant?: string;
}

export default function Header3({ variant }: Header3Props) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky("");
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        {/* Top Header */}
        <div className="cs_top_header">
          <div className="max-w-7xl mx-auto px-4">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left header-info">
                <ul className="cs_header_contact_list cs_mp_0 cs_white_color">
                  <li className="flex items-center">
                    <EnvelopeIcon className="w-4 h-4 mr-2" />
                    <a
                      href="mailto:info@walkgoodtravel.com"
                      aria-label="Email link"
                    >
                      info@walkgoodtravel.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <a href="tel:+15551234567" aria-label="Phone call link">
                      +1 555 123 4567
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    Walk Good Travel, NYC
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links top-header-social-icon">
                    <div className="cs_social_btns cs_style_1 flex space-x-3">
                      <a
                        href="#"
                        aria-label="Social link"
                        className="cs_center"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="Social link"
                        className="cs_center"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="Social link"
                        className="cs_center"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="Social link"
                        className="cs_center"
                      >
                        <svg
                          className="w-4 h-4"
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
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="cs_main_header">
          <div className="max-w-7xl mx-auto px-4">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <img src={blackLogo} alt="Walk Good Travel" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </span>
                  <nav className={mobileToggle ? `${styles.navActive}` : ""}>
                    <ul className="cs_nav_list flex space-x-8">
                      <li>
                        <Link
                          href="/"
                          className="hover:text-theme transition-colors"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="hover:text-theme transition-colors"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/destinations"
                          className="hover:text-theme transition-colors"
                        >
                          Destinations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours"
                          className="hover:text-theme transition-colors"
                        >
                          Tours
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog"
                          className="hover:text-theme transition-colors"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="hover:text-theme transition-colors"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn flex items-center">
                  <div className="main-button flex items-center space-x-4">
                    <a
                      onClick={() => setSearchToggle(!searchToggle)}
                      className="search-trigger search-icon cursor-pointer"
                    >
                      <MagnifyingGlassIcon className="w-5 h-5" />
                    </a>
                    <Link href="/contact" className="theme-btn">
                      <span>
                        Get Quote{" "}
                        <svg
                          className="w-4 h-4 ml-2 inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_140"></div>

      {/* Search Modal */}
      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <XMarkIcon
            onClick={() => setSearchToggle(!searchToggle)}
            className="w-6 h-6 search-close cursor-pointer"
          />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search destinations..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
