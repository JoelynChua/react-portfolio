import React from "react";

// Import stock images
import stock from "../img/image1.jpg";
import stock1 from "../img/app-Images/foodieHeaven.png";
import stock2 from "../img/app-Images/Ongaku.png";
import stock3 from "../img/app-Images/arcadia.png";
import stock4 from "../img/app-Images/budgetWithMe.png";
import stock5 from "../img/image6.jpg";

import "../styles/portfolio.css"; // Move styles to external CSS if not already

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock1} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">Foodie Heaven low-fi prototype</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      Food recommender website
                    </span>

                    <ul className="tech-list">
                      <li>Adobe XD</li>
                    </ul>

                  </div>
                </div>
                <div className="prototype-buttons">
                  <a
                    href="https://xd.adobe.com/view/cc5e55ad-8bdf-47a5-4249-ed6edfa4c386-ba6f/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="signup-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock2} alt="Project 2" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">Music app prototype</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Music app player</span>
                  </div>

                  <ul className="tech-list">
                    <li>Adobe XD</li>
                  </ul>

                </div>
                <div className="prototype-buttons">
                  <a href="https://xd.adobe.com/view/eea714ce-02e9-437c-4b59-2a2eca5b043e-9896/" target="_blank" className="signup-btn">
                    Low-fi prototype
                  </a>
                  <a href="https://xd.adobe.com/view/4402d469-08c0-41f1-51c2-44765c55b60f-3233/" target="_blank" className="signup-btn">High-fi prototype</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock3} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">Hotel management website prototype</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      A high-fidelity prototype for a comprehensive hotel management website, enabling guests to effortlessly
                      check in, explore hotel amenities—including detailed food menus and available services—make reservations,
                      and give feedback.

                      <ul className="tech-list">
                        <li>Adobe XD</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="prototype-buttons">
                  <a
                    href="https://xd.adobe.com/view/637c3645-6586-450f-904c-d981d000f57e-362f/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="signup-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock4} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">Expense tracker prototype</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      A high-fidelity prototype for a mobile expense tracker app, designed to promote regular expense
                      tracking by simplifying the process with convenient features like receipt scanning and currency
                      conversion.

                      <ul className="tech-list">
                        <li>Adobe XD</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="prototype-buttons">
                  <a
                    href="https://xd.adobe.com/view/b15296d7-2caf-4e12-bc5c-82ecf75d4937-e401/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="signup-btn">
                    View
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
