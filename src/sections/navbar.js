import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center w-full font-serif  pt-5">
        <div className="pr-10 ">
          <img src={logo} className="w-50" />
        </div>
        <div className=" flex space-x-8 text-md">
         <div className="space-x-5 pt-0.5 font-bold">
         <a>Accueil</a>
          <a>Fonctionnalités</a>
          <a> Comment ça fonctionne</a>
          <a>Recettes</a>
          <a>Avis </a>
         </div>
        <div className="space-x-2 ">
        <button className="w-auto px-5 py-0.5 bg-gray rounded-md text-white">
            <a> Se connecter</a>
          </button>
          <button className="w-auto px-5 py-0.5 bg-gray rounded-md text-white">
            <a>S'inscrire</a>
          </button>{" "}
        </div>
        </div>
      </div>

      <div className="w-full px-10 pt-1">
        <span className="bg-graylight block  h-0.5"></span>
      </div>
    </>
  );
}
