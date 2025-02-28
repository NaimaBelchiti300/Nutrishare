import { Link } from "react-router-dom";
import imgbanner from "../images/Bannerimage.png";

export default function BannerImage() {
  return (
    <div className="relative h-screen md:px-20 px-3 md:py-10 py-5 " data-aos="zoom-in" data-aos-once="false">
      <img 
        src={imgbanner} 
        className="w-full object-cover h-full rounded-xl inset-0 filter brightness-75" 
      />
      <div className="absolute top-3 left-0 right-0 z-20 md:pt-36 pt-56 flex flex-col justify-center items-center text-white text-xl p-4">
      <p className="font-serif font-bold md:text-5xl text-lg md:px-24 px-4 text-center text-white">
          Transformez votre quotidien avec NutriShare  l'application qui vous aide à manger équilibré, suivre vos calories et atteindre vos objectifs de santé en toute simplicité !
        </p>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 justify-center items-center md:space-x-10 pt-10 text-lg">
          <Link to="/under">
          <button className="md:w-96 w-full md:px-0 px-3 py-2 md:py-3 bg-white font-serif text-gray rounded-full">
          Commencez à suivre votre alimentation
          </button>
          </Link>
          <Link to="/under">
          <button className="md:w-96 md:py-3 py-2 w-full  md:px-0 px-3 border-2 font-serif bg-verte border-solid border-verte text-graylight rounded-full">
          Rejoignez NutriShare
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}