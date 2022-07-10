import React from "react";
import Social from "../Social";
import TextLoop from "react-text-loop";
import SocialTwo from "../SocialTwo";

const SliderAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/s12.jpg"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Salut ! je suis Salma Baruka
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <TextLoop>
                <p className="loop-text lead"> Modeliste</p>
                <p className="loop-text lead"> Stylistes</p>
                <p className="loop-text lead"> Modeliste</p>
              </TextLoop>
              <br /> <span> Basé en R D Congo</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            
            >
              Je suis une styliste axé sur la création d'expériences conviviales, je suis
              passionnée par la création d'excellents style en mode qui améliorent
              la vie de ceux qui m'entourent.
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Social />
            </div>
            {/* End .social */}

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">Visitez mon Portfolio</span>
                  <span className="second">Visitez mon Portfolio</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <SocialTwo/>
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderAnimation;
