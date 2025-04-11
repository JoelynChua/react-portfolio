import React from "react";
import myImage from "../img/my-images/linkedIn pic.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "90" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: "80" },
        { id: "Python_skill", content: "Python", porcentage: "75%", value: "75" },
        { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "85%", value: "85" },
        { id: "Wordpress_skill", content: "Wordpress", porcentage: "80%", value: "80" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi! I'm Joelyn — an enthusiastic and driven Year 2 student from the School of Information Systems at Singapore Management University. I’m passionate about building intuitive, user-centered websites and applications that make a real impact."
        },
        {
          id: "second-p-about",
          content:
            "My journey in tech began with a diploma in Information Technology at Temasek Polytechnic, where I laid the foundation for my skills in software development. Since then, I’ve continued to deepen my expertise, especially in UI/UX design and full-stack web development."
        },
        {
          id: "third-p-about",
          content:
            "I love creating digital experiences that are not only functional but also meaningful. I’m currently seeking opportunities in software development where I can grow, contribute, and learn alongside like-minded people."
        },
        {
          id: "contact-about",
          content: (
            <p>
              Feel free to reach out to me at{' '}
              <a href="#contact" style={{ color: 'blue' }}>
                joelyn.joelynnn@gmail.com
              </a>
            </p>
          )
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                        <div className="about-img" style={{ textAlign: "center" }}>
                          <img
                            src={myImage}
                            alt="Joelyn Profile"
                            className="img-fluid rounded b-shadow-a"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="skill-mf">
                      {/* Optional: Uncomment to show skills */}
                      {/* <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      ))} */}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => (
                        <div className="lead" key={content.id}>
                          {content.content}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
