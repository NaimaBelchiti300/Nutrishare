import { useState } from "react";
import logo from "../images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll'; 

export default function Footer() {
  const [email, setEmail] = useState('');
  const handlclikc=()=>{
setEmail('')
  }
  return (
    <div className="w-full h-auto bg-graylight">
      <div className="grid md:grid-cols-3 gap-0 md:px-10 px-5 md:py-10 py-5 md:space-y-0  space-y-4">
        {/* Section 1 : Logo & À propos */}
        <div className="w-full">
          <div>
            <img src={logo} alt="NutriShare Logo"   />
          </div>
          <div className="mt-5 text-gray text-lg font-serif">
            <p className="  w-12/12 text-md md:pl-2 font-serif font-bold">
              NutriShare vous aide à adopter une alimentation équilibrée grâce à des recettes 
              saines, des conseils nutritionnels et un suivi personnalisé.
            </p>
          </div>
        </div>

        {/* Section 2 : Navigation rapide */}
        <div className="flex flex-col justify-start items-center  font-serif font-bold text-lg text-gray md:pr-0 pr-44">
          <div className="text-start flex flex-col space-y-4 pt-3">
           <Link to="home" smooth={true} duration={500} className='cursor-pointer'>Accueil</Link>
                      <Link to="features" smooth={true} duration={500} className='cursor-pointer'>Fonctionnalités</Link>
                      <Link to="how-it-works" smooth={true} duration={500} className='cursor-pointer'>Comment ça fonctionne</Link>
                      <Link to="recipes" smooth={true} duration={500} className='cursor-pointer'>Recettes</Link>
                      <Link to="reviews" smooth={true} duration={500} className='cursor-pointer'>Avis</Link>
          </div>
        </div>

        {/* Section 3 : Newsletter */}
        <div className="space-y-3 md:pt-0 pt-5">
          <h1 className="font-bold font-serif md:text-3xl text-lg text-gray">
            Abonnez-vous à notre Newsletter
          </h1>
          <p className="w-12/12 text-md md:pl-2 font-serif text-gray md:font-semibold">
            Recevez des astuces nutritionnelles, des recettes saines et des conseils personnalisés 
            directement dans votre boîte mail. Inscrivez-vous maintenant pour rester en forme et bien nourri !
          </p>
          <div className="flex space-x-1">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="bg-white py-3 rounded-md w-full focus:bg-white px-3 text-start"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <button className="font-serif w-48 rounded-md py-3 text-graylight bg-verte px-0 text-sm" onClick={handlclikc}>
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Section 4 : Mentions légales et réseaux sociaux */}
      <div className="w-full px-10 ">
        <span className="h-[0.1px] block bg-gray"></span>
      </div>
   
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between items-center md:px-28 px-10 pb-5 pt-10">
      <p className="text-gray text-sm font-serif font-semibold">
          © 2025 NutriShare. Tous droits réservés.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray text-xl"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}
