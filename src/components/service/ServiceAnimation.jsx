import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);  
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="service_list">
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/1.svg" alt="" />
            <div className="service_title">
              <h3> Mode </h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/1.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>La mode est devenu aujourd'hui, l'objet le plus interessant dans le mode vestimentaire </h3>
                      <p>
                      Ce n'est pas parce que nous ne pouvons pas nous déplacer comme nous le ferions normalement que nous devons prendre des photos. Il y a encore beaucoup à faire, à condition d'être prêt à faire preuve d'imagination. Voici quelques idées pour continuer à filmer jusqu'à ce que la vie normale reprenne.

La plupart des photographes aiment photographier l'inhabituel, et vous n'obtenez pas beaucoup plus inhabituel que Ces temps sans précédent. En ce moment, tout compte comme hors de l'ordinaire. Il y a un certain nombre de choses remarquables à propos de ces jours de confinement qui valent la peine d'être photographiées maintenant que nous pouvons nous en souvenir quand tout sera terminé.

Qu'est-ce que l'image de marque ?
Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria.

Le courrier électronique est un canal crucial dans tout marketing.

Curieux de savoir quoi dire? Comment le dire?

Que vous lanciez une nouvelle campagne.

Habitasse per feugiat aliquam luctus accumsan curae

Les rues vides qui sont généralement animées sont remarquables et peuvent évoquer le sens des images historiques d'avant l'invention de l'automobile. D'autres choses qui sont différentes pour le moment seront les files d'attente pour entrer dans les magasins et les lignes tracées au sol pour montrer à quelle distance nous devrions être.
                      </p>
                  
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="img/svg/2.svg" alt="" />
            <div className="service_title">
              <h3> Style Design</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/2.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                    <h3>La mode est devenu aujourd'hui, l'objet le plus interessant dans le mode vestimentaire </h3>
                      <p>
                      Ce n'est pas parce que nous ne pouvons pas nous déplacer comme nous le ferions normalement que nous devons prendre des photos. Il y a encore beaucoup à faire, à condition d'être prêt à faire preuve d'imagination. Voici quelques idées pour continuer à filmer jusqu'à ce que la vie normale reprenne.

La plupart des photographes aiment photographier l'inhabituel, et vous n'obtenez pas beaucoup plus inhabituel que Ces temps sans précédent. En ce moment, tout compte comme hors de l'ordinaire. Il y a un certain nombre de choses remarquables à propos de ces jours de confinement qui valent la peine d'être photographiées maintenant que nous pouvons nous en souvenir quand tout sera terminé.

Qu'est-ce que l'image de marque ?
Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria.

Le courrier électronique est un canal crucial dans tout marketing.

Curieux de savoir quoi dire? Comment le dire?

Que vous lanciez une nouvelle campagne.

Habitasse per feugiat aliquam luctus accumsan curae

Les rues vides qui sont généralement animées sont remarquables et peuvent évoquer le sens des images historiques d'avant l'invention de l'automobile. D'autres choses qui sont différentes pour le moment seront les files d'attente pour entrer dans les magasins et les lignes tracées au sol pour montrer à quelle distance nous devrions être.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="img/svg/3.svg" alt="" />
            <div className="service_title">
              <h3>Marketing</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/3.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                    <h3>La mode est devenu aujourd'hui, l'objet le plus interessant dans le mode vestimentaire </h3>
                      <p>
                      Ce n'est pas parce que nous ne pouvons pas nous déplacer comme nous le ferions normalement que nous devons prendre des photos. Il y a encore beaucoup à faire, à condition d'être prêt à faire preuve d'imagination. Voici quelques idées pour continuer à filmer jusqu'à ce que la vie normale reprenne.

La plupart des photographes aiment photographier l'inhabituel, et vous n'obtenez pas beaucoup plus inhabituel que Ces temps sans précédent. En ce moment, tout compte comme hors de l'ordinaire. Il y a un certain nombre de choses remarquables à propos de ces jours de confinement qui valent la peine d'être photographiées maintenant que nous pouvons nous en souvenir quand tout sera terminé.

Qu'est-ce que l'image de marque ?
Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria.

Le courrier électronique est un canal crucial dans tout marketing.

Curieux de savoir quoi dire? Comment le dire?

Que vous lanciez une nouvelle campagne.

Habitasse per feugiat aliquam luctus accumsan curae

Les rues vides qui sont généralement animées sont remarquables et peuvent évoquer le sens des images historiques d'avant l'invention de l'automobile. D'autres choses qui sont différentes pour le moment seront les files d'attente pour entrer dans les magasins et les lignes tracées au sol pour montrer à quelle distance nous devrions être.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="img/svg/4.svg" alt="" />
            <div className="service_title">
              <h3>Community</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                    <h3>La mode est devenu aujourd'hui, l'objet le plus interessant dans le mode vestimentaire </h3>
                      <p>
                      Ce n'est pas parce que nous ne pouvons pas nous déplacer comme nous le ferions normalement que nous devons prendre des photos. Il y a encore beaucoup à faire, à condition d'être prêt à faire preuve d'imagination. Voici quelques idées pour continuer à filmer jusqu'à ce que la vie normale reprenne.

La plupart des photographes aiment photographier l'inhabituel, et vous n'obtenez pas beaucoup plus inhabituel que Ces temps sans précédent. En ce moment, tout compte comme hors de l'ordinaire. Il y a un certain nombre de choses remarquables à propos de ces jours de confinement qui valent la peine d'être photographiées maintenant que nous pouvons nous en souvenir quand tout sera terminé.

Qu'est-ce que l'image de marque ?
Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria.

Le courrier électronique est un canal crucial dans tout marketing.

Curieux de savoir quoi dire? Comment le dire?

Que vous lanciez une nouvelle campagne.

Habitasse per feugiat aliquam luctus accumsan curae

Les rues vides qui sont généralement animées sont remarquables et peuvent évoquer le sens des images historiques d'avant l'invention de l'automobile. D'autres choses qui sont différentes pour le moment seront les files d'attente pour entrer dans les magasins et les lignes tracées au sol pour montrer à quelle distance nous devrions être.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div>
  );
};

export default ServiceAnimation;
