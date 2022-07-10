import React from "react";
import Skills from "../skills/SkillsAnimation";

const AboutAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="thumb" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/light.jpg"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>je suis Baruka Salma</h3>
            <h5>
              Je fais{" "}
              <span className="theme-color"> le Styliste et la Mode </span>
              basée en <span className="theme-color"> RDC</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Info personnel</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Nom :</span> Baruka Salma
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> Goma ville
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +24399504845
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationalité :</span> Congolaise
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span> 25 ans
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> barukab68@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Disponible
                  </p>
                </li>
                <li>
                  <p>
                    <span>Langues :</span> Francais, anglais
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
            <div className="beny_tm_button color-outline">
              <a href="img/about/cv.webp" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutAnimation;
