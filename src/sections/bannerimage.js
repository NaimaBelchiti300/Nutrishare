import imgbanner from "../images/Bannerimage.png";

export default function BannerImage() {
  return (
    <div className="relative h-screen px-20 py-10 ">
      <img 
        src={imgbanner} 
        className="w-full object-cover h-full rounded-xl inset-0 filter brightness-75" 
      />
      

      <div className="absolute top-10 left-0 right-0 z-20 pt-36 flex flex-col justify-center items-center text-white text-xl p-4">
        <p className="font-serif font-bold text-5xl px-24 text-center text-white">
          Transformez votre quotidien avec NutriShare  l'application qui vous aide à manger équilibré, suivre vos calories et atteindre vos objectifs de santé en toute simplicité !
        </p>
        <div className="flex justify-center items-center space-x-10 pt-20">
          <button className="w-80 py-3 bg-white text-gray rounded-full">
            Commencer
          </button>
          <button className="w-80 py-3 border-2 bg-verte border-solid border-verte text-graylight rounded-full">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}
