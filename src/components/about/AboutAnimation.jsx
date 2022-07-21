import React from "react";
// import Skills from "../skills/SkillsAnimation"


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
            Nous sommes une société ouverte et dynamique offrant un centre communautaire pour tous les artistes et le public amateur d'art. Notre belle galerie est située au centre et facilement accessible.
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
                    <span>Age:</span> 26 ans
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
            
          </div>
        </div>
      </div>
       {/* <Skills />  */}
    </>
  );
};

export default AboutAnimation;
