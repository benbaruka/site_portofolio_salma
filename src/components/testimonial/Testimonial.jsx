import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "1",
      desc: `Salut, je suis Ben Ickah et je suis designer et développeur  voir influenceur qui rêve de rendre le monde meilleur grâce aux produits. Je suis également très actif pour les clients internationaux et Grace à salma mes produits sont visibles.`,
      name: "Ben Ickah",
      designation: "Influenceur en Goma",
    },
    {
      img: "2",
      desc: `Salut, je suis Melia B et je suis designer et développeur  voir influenceur qui rêve de rendre le monde meilleur grâce aux produits. Je suis également très actif pour les clients internationaux et Grace à salma mes produits sont visibles.`,
      name: "Melia B",
      designation: "Influenceur",
    },
    {
      img: "3",
      desc: `Ces gens savent vraiment ce qu'ils font ! Grande disponibilité du support client et gentillesse supperb. Je suis très heureux d'avoir acheté cette licence !!!`,
      name: "Navid Scav",
      designation: "App Developer",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `img/testimonials/${val.img}.jpg`
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val.desc}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val.name}</span>
                </h3>
                <span className="job">{val.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
