import icon1 from "../images/icon1.png";
import icn2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
export default function Fonctionalite() {
  return (
    <div className="px-5 md:px-20 py-10" id="features">
      <h1 className="text-center font-serif font-bold text-gray text-3xl">
        Qu’est-ce que NutriShare peut faire pour vous ?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {/* Carte 1 */}
        <div className="border border-graylight p-5 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <img src={icon1} className="w-10" alt="Icon" />
            <h2 className="font-semibold text-xl font-lora">Partagez vos recettes avec la communauté</h2>
          </div>
          <p className="text-gray font-serif">
            Publiez vos recettes préférées et partagez-les avec la communauté NutriShare. Ajoutez les ingrédients, les étapes de préparation et les informations nutritionnelles.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="border border-graylight p-5 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <img src={icn2} className="w-10" alt="Icon" />
            <h2 className="font-semibold font-lora text-xl">Suivi des calories et macronutriments</h2>
          </div>
          <p className="text-gray font-serif">
            Suivez votre consommation de calories, protéines, glucides et graisses en temps réel pour atteindre vos objectifs nutritionnels avec des outils de suivi détaillés.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="border border-graylight p-5 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <img src={icon3} className="w-10" alt="Icon" />
            <h2 className="font-semibold text-xl font-lora">Filtrage des recettes par besoins nutritionnels</h2>
          </div>
          <p className="text-gray font-serif">
            Trouvez des recettes adaptées à vos besoins : faibles en glucides, riches en protéines, ou adaptées à un régime particulier grâce à notre système de filtres intelligents.
          </p>
        </div>

        {/* Carte 4 */}
        <div className="border border-graylight p-5 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-3">
            <img src={icon4} className="w-10" alt="Icon" />
            <h1 className="font-semibold text-[22px] font-lora">Suivi de vos repas quotidiens</h1>
          </div>
          <p className="text-gray font-serif">
            Enregistrez vos repas quotidiens et suivez votre apport calorique. NutriShare vous aide à ajuster votre alimentation pour rester sur la bonne voie.
          </p>
        </div>

        {/* Carte 5 */}
        <div className="border border-graylight p-5 rounded-xl shadow-md ">
          <div className="flex items-center space-x-3 mb-3">
            <img src={icon5} className="w-10" alt="Icon" />
            <h2 className="font-semibold text-xl font-lora">Créez votre profil et connectez-vous</h2>
          </div>
          <p className="text-gray font-serif">
            Personnalisez votre profil, suivez d'autres utilisateurs, échangez des conseils et sauvegardez vos recettes préférées dans une communauté active et bienveillante.
          </p>
        </div>
      </div>
    </div>
  );
}
