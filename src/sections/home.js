import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import des styles AOS

import Navbar from "./navbar";
import Herosection from "./herosection";
import Fonctionalite from "./fonctionalite";
import BannerImage from "./bannerimage";
import HowItWorks from "./howitworks";
import Recipes from "./recipes";
import RecipeSection from "./recepesection2";
import VidioImage from "./vidiobanner";
import Populairerecepe from "./populairerecep";
import ReviewsCarousel from "./reveiws";
import FormReviews from "./formreviews";
import Footer from "./footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      offset: 200, // Déclenche l'animation lorsqu'il est à 200px de la fenêtre
      easing: "ease-in-out", // Type d'animation
      once: false, // Animation se répète chaque fois que l'élément entre dans la vue
    });

    // Re-réfresh les animations après chaque scroll
    window.addEventListener("scroll", () => AOS.refresh());

    // Nettoyer l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", () => AOS.refresh());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Herosection />
      <Fonctionalite />
      <BannerImage />
      <HowItWorks />
      <Recipes />
      <RecipeSection />
      <VidioImage />
      <Populairerecepe />
      <ReviewsCarousel />
      <FormReviews />
      <Footer />
    </div>
  );
}
