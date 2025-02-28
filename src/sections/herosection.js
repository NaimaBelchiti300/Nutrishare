import { Link } from "react-router-dom";
import imagebanner from "../images/Beige_Black_Simple_Modern_Healthy_Food_Introduction_Instagram_Story-removebg-preview.png";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import des styles d'AOS
export default function Herosection() {
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });

 
   })
  
  return (
    <div className="flex md:flex-row flex-col justify-center items-center font-lora md:space-x-5 pt-0" id="home" data-aos="fade-up">
      <div className="md:w-1/2 w-full space-y-7 md:pt-5 pt-36">
        <h1 className="md:text-4xl text-lg font-extrabold text-gray md:text-start text-center font-serif">
          NutriShare – Partagez vos recettes et suivez votre nutrition
        </h1>
        <p className="md:w-13/12 w-full md:px-0 px-5 font-medium md:text-lg text-md md:text-start text-center">
          NutriShare est une plateforme dédiée à la gestion de l'alimentation et
          du bien-être, permettant aux utilisateurs de partager des recettes, de
          suivre leur consommation de calories et de macronutriments, et
          d'atteindre leurs objectifs nutritionnels. Vous pouvez créer,
          sauvegarder et filtrer des recettes en fonction de vos besoins
          spécifiques et suivre votre apport calorique quotidien pour optimiser
          votre santé. NutriShare offre également un calculateur de calories
          intégré pour chaque recette.
        </p>
        <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-3 md:justify-start justify-center items-center">
          <Link to="/under">
            {" "}
            <button className="w-auto px-7 py-3 bg-gray rounded-md text-white">
                        Commencez maintenant
              
            </button>
          </Link>
          <Link to='/under'>
          <button className="w-auto px-7 py-3 bg-gray rounded-md text-white">
            Inscrivez-vous
          </button>
          </Link>
          
        </div>
      </div>
      <div className="">
        <img src={imagebanner} className="md:pl-10  w-[100%] " />
      </div>
    </div>
  );
}
