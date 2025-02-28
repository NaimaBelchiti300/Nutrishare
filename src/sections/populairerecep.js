import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from "../images/recette1.png";
import r2 from "../images/recette2.PNG";
import r3 from "../images/recette3.PNG";
import r4 from "../images/recette4.PNG";
import r5 from "../images/recette5.PNG";
import { Link } from "react-router-dom";

const Populairerecepe = () => {
  const cards = [
    { 
        image: r1, 
        title: "Vegan Super Bowl", 
        description: "Un bol rempli de fraîcheur et de couleurs ! Ce plat vegan combine des légumes croquants, des herbes aromatiques et une touche de citron vert pour une explosion de saveurs saines et délicieuses", 
        button1: 'Temps à préparer : 2h', 
        button2: 'Calories de la recette : 33kcal' 
    },
    { 
        image: r4, 
        title: "Crêpes Gourmandes à la Chandeleur", 
        description: "Des crêpes moelleuses nappées de sirop et garnies de framboises juteuses. Parfaites pour un petit-déjeuner gourmand ou une pause sucrée réconfortante.", 
        button1: 'Temps à préparer : 1h', 
        button2: 'Calories de la recette : 250kcal' 
    },
    { 
        image: r5, 
        title: "Poulet au Lait de Coco", 
        description: "Découvrez cette recette exotique de poulet cuit dans une sauce onctueuse au lait de coco. Avec des champignons et des épices, ce plat est riche en saveurs et parfait pour un dîner réconfortant.", 
        button1: 'Temps à préparer : 3h', 
        button2: 'Calories de la recette : 400kcal' 
    },
    { 
        image: r3, 
        title: "Crêpes en Folie pour la Chandeleur", 
        description: "Profitez de la Chandeleur avec ces délicieuses crêpes sucrées au miel, à la fois légères et moelleuses, parfaites pour un brunch gourmand.", 
        button1: 'Temps à préparer : 2h', 
        button2: 'Calories de la recette : 150kcal' 
    },
    { 
        image: r2, 
        title: "Tartiflette Fondante au Reblochon", 
        description: "Un plat montagnard généreux et réconfortant, composé de pommes de terre fondantes, de lardons croustillants et d’un reblochon gratiné à la perfection.", 
        button1: 'Temps à préparer : 1h30', 
        button2: 'Calories de la recette : 600kcal' 
    },
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:px-14 w-full h-full pt-16" data-aos="fade-in" data-aos-once="false">
      <h1 className="text-center font-serif md:text-4xl text-xl font-semibold text-verte">
        Les recettes les plus populaires
      </h1>
      <div className="flex justify-end items-end pt-20 md:pl-0 pr-5">
        <Link to='/under' className="underline font-serif font-bold text-sm text-gray-500">
          Voir toutes les recettes
        </Link>
      </div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-5 md:px-10 pt-3 w-full"
            data-aos="zoom-in" data-aos-once="false"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-80 md:w-96">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-4 font-serif font-bold">
                <h2 className="text-xl md:text-2xl font-bold text-gray">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-3">{card.description}</p>
                <div className="flex flex-col space-y-2 mt-3">
                  <button className="border-solid border-2 border-verte px-5 py-2 text-gray rounded-md">
                    {card.button2}
                  </button>
                  <button className="border-solid border-2 border-verte px-5 py-2 text-gray rounded-md">
                    {card.button1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Populairerecepe;
