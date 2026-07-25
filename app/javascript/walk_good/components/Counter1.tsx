import React from "react";
import styles from "./Counter1.module.css";

const Counter1 = () => {
  return (
    <section className="counter-section theme-bg fix">
      <div className="max-w-7xl mx-auto px-4">
        <div className="counter-wrapper">
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".2s">
            <div className="counter-content">
              <h2>
                <span className="count">15</span>+
              </h2>
              <p>Years Experience</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".4s">
            <div className="counter-content">
              <h2>
                <span className="count">2</span>.5K+
              </h2>
              <p>Happy Travelers</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".6s">
            <div className="counter-content">
              <h2>
                <span className="count">85</span>+
              </h2>
              <p>Destinations</p>
            </div>
          </div>
          <div
            className="counter-items style-2 wow fadeInUp wow"
            data-wow-delay=".8s"
          >
            <div className="counter-content">
              <h2>
                <span className="count">25</span>+
              </h2>
              <p>Awards & Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter1;
