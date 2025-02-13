import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from "../images/recette1.png";
import r2 from "../images/recette2.PNG";
import r3 from "../images/recette3.PNG";
import r4 from "../images/recette4.PNG";
import r5 from "../images/recette5.PNG";

const Populairerecepe = () => {
  const cards = [
    { image: r1, title: "Carte 1", description: "Description de la carte 1" },
    { image: r4, title: "Carte 2", description: "Description de la carte 2" },
    { image: r5, title: "Carte 3", description: "Description de la carte 3" },
    { image: r3, title: "Carte 4", description: "Description de la carte 4" },
    { image: r2, title: "Carte 5", description: "Description de la carte 5" },
  ];

  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true, // Le carrousel se répète
    speed: 500,
    slidesToShow: 3, // Afficher 3 cartes à la fois
    slidesToScroll: 3, // Passer 3 cartes en même temps
    responsive: [
      {
        breakpoint: 1024, // Ajuster pour les écrans plus petits
        settings: {
          slidesToShow: 2, // Afficher 2 cartes pour les écrans plus petits
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Ajuster pour les mobiles
        settings: {
          slidesToShow: 1, // Afficher 1 carte pour les petits écrans
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  px-10 w-full h-screen pt-10 ">
      <h1 className="text-center font-serif text-4xl font-semibold text-verte">
        {" "}
        les recette les plus popolaires
      </h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-20 pt-16"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-96">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Populairerecepe;
