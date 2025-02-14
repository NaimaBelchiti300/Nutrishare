import logo from "../images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-graylight">
      <div className="grid grid-cols-3 gap-0 px-10 py-10">
        {/* Section 1 : Logo & À propos */}
        <div className="w-full">
          <div>
            <img src={logo} alt="NutriShare Logo"  />
          </div>
          <div className="mt-5 text-gray text-sm font-serif">
            <p className="w-12/12 text-lg font-serif">
              NutriShare vous aide à adopter une alimentation équilibrée grâce à des recettes 
              saines, des conseils nutritionnels et un suivi personnalisé.
            </p>
          </div>
        </div>

        {/* Section 2 : Navigation rapide */}
        <div className="flex flex-col justify-start items-center space-y-5 font-serif font-bold text-lg text-gray">
          <div className="text-start flex flex-col">
          <a href="#" className="underline">Accueil</a>
          <a href="#">Fonctionnalités</a>
          <a href="#">Comment ça marche</a>
          <a href="#">Recettes</a>
          <a href="#">Avis</a>
          <a href="#">Se connecter</a>
          <a href="#">S'inscrire</a>
          </div>
        </div>

        {/* Section 3 : Newsletter */}
        <div className="space-y-3">
          <h1 className="font-extrabold font-serif text-3xl text-gray">
            Abonnez-vous à notre Newsletter
          </h1>
          <p className="w-10/12 text-sm pl-2 font-serif">
            Recevez des astuces nutritionnelles, des recettes saines et des conseils personnalisés 
            directement dans votre boîte mail. Inscrivez-vous maintenant pour rester en forme et bien nourri !
          </p>
          <div className="flex space-x-1">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="bg-white py-3 rounded-md w-full focus:bg-white px-5 text-start"
            />
            <button className="font-serif w-60 rounded-md py-3 text-graylight bg-verte px-0 text-sm">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Section 4 : Mentions légales et réseaux sociaux */}
      <div className="border-t border-gray w-full px-36 mt-5 py-5 ">
        
      </div>
      <div className="flex justify-between items-center px-16 pb-5">
      <p className="text-gray text-sm font-serif">
          © 2025 NutriShare. Tous droits réservés.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray text-lg"><FaFacebookF /></a>
          <a href="#" className="text-gray text-lg"><FaInstagram /></a>
          <a href="#" className="text-gray text-lg"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}
