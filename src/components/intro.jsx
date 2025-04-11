import React from "react";
import "./stars.scss";
import { Typewriter } from "react-simple-typewriter";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        {/* Decorative animated background layers */}
        <div id="stars" aria-hidden="true" />
        <div id="stars2" aria-hidden="true" />
        <div id="stars3" aria-hidden="true" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container text-center">
              <h1 className="intro-title mb-4">Hello, I am Joelyn Chua</h1>
              <p className="intro-subtitle">
                <strong className="text-slider">
                  <span>
                    <Typewriter
                      words={[
                        "Full Stack Developer",
                        "UI/UX Designer"
                      ]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={40}
                      delaySpeed={1500}
                    />
                  </span>
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                  aria-label="Scroll to portfolio work section"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
