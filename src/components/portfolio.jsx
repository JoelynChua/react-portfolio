import React from "react";

// Import stock images
import stock from "../img/image1.jpg";
import stock1 from "../img/app-Images/foodieHeaven.png";
import stock2 from "../img/app-Images/Ongaku.png";
import stock3 from "../img/app-Images/arcadia.png";
import stock4 from "../img/app-Images/budgetWithMe.png";
import stock5 from "../img/app-Images/canCook.png";
import stock6 from "../img/app-Images/activityAI.png";
import stock7 from "../img/app-Images/eco-pals.png";


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
                  Projects that I have worked on!✨✨
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">

            {/* Card 7 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock7} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">Eco-Pals prototype</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      A mobile app prototype designed to foster eco-friendly habits using an engaging mix of games and a points-based
                      reward system. Users can effortlessly discover local eco-friendly events and activities or create their own,
                      encouraging shared participation with friends. The app also features helpful in-app reminders to keep users on
                      track with their sustainability goals.
                      <ul className="tech-list">
                        <li>Figma</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="prototype-buttons">
                  <a href="https://www.figma.com/proto/anqx8K0SPLmYeRMxwgLzhi/idp-it2?node-id=0-1&t=KEzZLWBqpjNns6Jo-1" target="_blank" className="signup-btn">
                    Hi-fi prototype
                  </a>

                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock6} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">"What to do in Singapore" day-trip itineray planner Website</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      A website that aggregates upcoming events in Singapore from the TicketMaster API, while also allowing
                      event organizers to sign up and list their own events. Users can conveniently browse events and
                      create organized, well-informed "Day-trip in Singapore" itineraries.
                      <ul className="tech-list">
                        <li>Firebase</li>
                        <li>Vue</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="prototype-buttons">
                  <a href="https://wad-2-proj-frontend.vercel.app/" target="_blank" className="signup-btn">
                    Website
                  </a>
                  <a href="https://github.com/JoelynChua/WAD2Proj" target="_blank" className="signup-btn">Github repo</a>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4">
              <div className="work-box full-height">
                <div className="work-img centered-img">
                  <img src={stock5} alt="Project 1" className="img-fluid" />
                </div>
                <div className="work-content">
                  <h2 className="w-title">SMU Heap Hackthon -- CanCook</h2>
                  <div className="w-more">
                    <span className="w-ctegory">
                      A recipe recommendation website designed to help users discover tasty dishes using ingredients they
                      already have, reducing food waste. It features an interactive "spin-the-wheel" for those moments
                      when you can't decide what to cook! ✨
                      <ul className="tech-list">
                        <li>Firebase</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="prototype-buttons">
                  <a href="can-cook-website-frontend.vercel.app/" target="_blank" className="signup-btn">
                    Website
                  </a>
                  <a href="https://github.com/JoelynChua/CanCookWebsite" target="_blank" className="signup-btn">Github repo</a>
                </div>
              </div>
            </div>


            {/* Card 4 */}
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

            {/* Card 3 */}
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

            {/* Card 2 */}
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

            {/* Card 1 */}
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






          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
