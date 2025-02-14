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
    { image: r1, title: "Vegan Super Bowl", description: "Un bol rempli de fraîcheur et de couleurs ! Ce plat vegan combine des légumes croquants, des herbes aromatiques et une touche de citron vert pour une explosion de saveurs saines et délicieuses",button1:'btn1',button2:'btn2' },
    { image: r4, title: "Crêpes Gourmandes à la Chandeleur", description: "Des crêpes moelleuses nappées de sirop et garnies de framboises juteuses. Parfaites pour un petit-déjeuner gourmand ou une pause sucrée réconfortante. ",  button1:'btn1',button2:'btn2' },
    { image: r5, title: "Poulet au Lait de Coco", description: " Découvrez cette recette exotique de poulet cuit dans une sauce onctueuse au lait de coco. Avec des champignons et des épices, ce plat est riche en saveurs et parfait pour un dîner réconfortant. ",  button1:'btn1',button2:'btn2' },
    { image: r3, title: "Crêpes en Folie pour la Chandeleur", description: "Profitez de la Chandeleur avec ces délicieuses crêpes sucrées au miel,  à la fois légères et moelleuses, sont parfaites pour un brunch gourmand ",  button1:'btn1',button2:'btn2' },
    { image: r2, title: " Tartiflette Fondante au Reblochon", description: "Un plat montagnard généreux et réconfortant, composé de pommes de terre fondantes, de lardons croustillants et d’un reblochon gratiné à la perfection." ,  button1:'btn1',button2:'btn2'},
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
    <div className="  px-14 w-full h-screen pt-16 ">
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
              <div className="p-4 font-serif font-bold">
                <h2 className="text-2xl font-bold text-gray">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-3">{card.description}</p>
                <div className="flex flex-row justify-start items-center space-x-3 mt-2">
                  <button className="border-solid border-2 border-verte bg-verte w-44 text-graylight px-5 py-2 rounded-md whitespace-nowrap" >{card.button1}</button>
                  <button className="border-solid border-2 border-verte px-5 py-2 w-44 text-gray rounded-md whitespace-nowrap">{card.button2}</button>
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
