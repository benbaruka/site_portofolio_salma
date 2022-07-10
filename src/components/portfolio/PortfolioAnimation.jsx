import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {/* <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="1gyTUHP6ne8"
            onClose={() => setOpen(false)}
          /> */}
          {/* End Youtube Modal video */}

          {/* <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen2}
            videoId="100171151"
            onClose={() => setOpen2(false)}
          /> */}
          {/* End Youtube Modal video */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://www.instagram.com/p/Cff8zMNoETC/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Populaire </h3>
                <span>instagram Shoot</span>
              </a>
              <img
                src="img/portfolio/IMG_5380.jpg"
                alt="instagram Shoot"
                onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End youtube */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner video">
              <a
                href="https://www.instagram.com/p/CfZZ-3OrlkS/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Art </h3>
                <span>Art Shoot</span>
              </a>
              <img
                src="img/portfolio/11.jpg"
                alt="Vimeo Shoot"
                onClick={() => setOpen2(true)}
              />
            </div>
          </li>
          {/* End vimeo */}

          <SRLWrapper>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                >
                  <h3>Ave Simone</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/IMG_5380.jpg">
                  <img src="img/portfolio/IMG_5380.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                >
                  <h3>Kelly Smith</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/IMG_5380.jpg">
                  <img src="img/portfolio/IMG_5350.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                >
                  <h3>Duru Sweet</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/IMG_5380.jpg">
                  <img src="img/portfolio/IMG_5350.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/ibthemes"
                >
                  <h3>Lisa Kotlins</h3>
                  <span>Facebook Shoot</span>
                </a>

                <a href="img/portfolio/IMG_5380.jpg">
                  <img src="img/portfolio/IMG_5350.jpg" alt="Facebook Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
