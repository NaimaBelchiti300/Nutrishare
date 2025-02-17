import { Link } from "react-router-dom";
import step1 from "../images/step1.jpg";
import step2 from "../images/step22.png";
import step3 from "../images/step3.PNG";

export default function HowItWorks() {
  return (
    <div className="px-5 md:px-20 py-16 bg-gray-50" id="how-it-works">
      {/* Titre principal */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray font-serif mb-16">
        Comment ça marche ?
      </h1>

      {/* Étape 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-14 space-y-10 md:space-y-0">
        <img 
          src={step1} 
          className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" 
          alt="Créer un compte" 
        />
        <div className="md:w-1/2 text-center md:text-left font-lora">
        <h2 className="text-3xl font-bold text-black font-serif mb-6">
        1. Connectez-vous à votre compte
          </h2>
          <p className="text-xl text-gray leading-relaxed mb-6">
            Accédez à votre espace personnel en vous connectant avec vos identifiants.  
            Si vous êtes nouveau, créez un compte en quelques clics !
          </p>
          <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-3">
            <Link to="/under">
            <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-900 transition duration-300">
              Commencez maintenant
            </button>
            </Link>
            <Link to="/under">
            <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-700 transition duration-300">
              Inscrivez-vous
            </button>
            </Link>
           
          </div>
        </div>
      </div>

      {/* Étape 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-14 space-y-10 md:space-y-0 mt-20">
        <img 
          src={step2} 
          className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" 
          alt="Explorer les recettes" 
        />
        <div className="md:w-1/2 text-center md:text-left font-lora">
        <h2 className="text-3xl font-bold text-black font-serif mb-6">
        2. Explorez les recettes
          </h2>
          <p className="text-xl text-gray leading-relaxed mb-6">
            Découvrez des centaines de recettes adaptées à vos besoins. Vous pouvez également ajouter vos propres recettes et les partager avec d'autres utilisateurs.
          </p>
          <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-3">
            <Link to='/under'>
            <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-900 transition duration-300">
              Explorez les recettes
            </button>
            </Link>
          <Link to='/under'>
          <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-700 transition duration-300">
              Ajoutez une recette
            </button>
          </Link>
           
          </div>
        </div>
      </div>

      {/* Étape 3 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-14 space-y-10 md:space-y-0 mt-20">
        
        <img 
          src={step3} 
          className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" 
          alt="Suivre ses repas" 
        />
        
        <div className="md:w-1/2 text-center md:text-left font-lora">
          <h2 className="text-3xl font-bold text-black font-serif mb-6">
            3. Suivez vos repas
          </h2>
          <p className="text-xl text-gray leading-relaxed mb-6">
            Ajoutez vos repas au journal alimentaire et suivez votre apport calorique et nutritionnel en un coup d'œil.
          </p>
          <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-3">
            <Link to='/under'>
            <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-900 transition duration-300">
              Démarrer le suivi
            </button>
            </Link>
           <Link to='/under'>
           <button className="text-lg px-9 py-3 bg-gray rounded-lg text-white hover:bg-gray-700 transition duration-300">
              Consulter mon journal
            </button>
           </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
