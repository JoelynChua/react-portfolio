import React from "react";
import $ from "jquery";

import logo1 from "../img/my-images/download20250405113908.png";
import logo2 from "../img/my-images/download20250405113838.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      const navBar = document.querySelector(".navbar-expand-md");
      if (window.pageYOffset > 50) {
        navBar.classList.add("navbar-reduce");
        navBar.classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        navBar.classList.add("navbar-trans");
        navBar.classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });

    // Smooth scroll
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function (e) {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        const target = $(this.hash);
        const finalTarget = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (finalTarget.length) {
          e.preventDefault(); // prevent jump
          $("html, body").animate(
            {
              scrollTop: finalTarget.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
        }
      }
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <a
            className="navbar-brand js-scroll"
            href="#page-top"
            aria-label="Back to top"
          >
            <img
              src={this.state.logo}
              alt="Joelyn Logo"
              style={{ maxWidth: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
