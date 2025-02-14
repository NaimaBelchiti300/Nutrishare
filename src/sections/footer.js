import logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-graylight">
      <div className="grid grid-cols-3 gap-0 px-10 py-10">
        <div>
          <div>
            <img src={logo} />
          </div>
          <div>

          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 font-serif font-bold  text-lg  text-gray">
          <a>Home</a>
          <a>Features</a>
          <a> How It Works</a>
          <a> Recipes </a>
          <a>Reviews</a>
          <a>Sign In</a>
          <a>Sign Up</a>
        </div>
        <div className="space-y-3">
            <h1 className="font-extrabold   font-serif text-3xl text-gray ">Abonnez-vous à notre Newsletter</h1>
            <p className="w-10/12 text-sm pl-2 font-serif">Recevez des astuces nutritionnelles, des recettes saines et des conseils personnalisés directement dans votre boîte mail. Inscrivez-vous maintenant pour rester en forme et bien nourri !</p>
            <div className="flex space-x-1">
            <input type="email" placeholder="Entrez Email Adresse" className="bg-white  py-3 rounded-md w-full focus:bg-white px-5 text-start"/>
            <button className="font-serif w-60 rounded-md py-3 text-graylight bg-verte px-0  text-sm ">Envoyer mon avis</button>

            </div>
        </div>
      </div>
    </div>
  );
}
