import imagebanner from '../images/Beige_Black_Simple_Modern_Healthy_Food_Introduction_Instagram_Story-removebg-preview.png'

export default function Herosection() {
  return (
    <div className="flex justify-center items-center font-lora space-x-5 pt-0">
      <div className="w-1/2 space-y-7 pt-5">
        <h1 className='text-4xl font-extrabold text-gray  font-serif'>NutriShare – Partagez vos recettes et suivez votre nutrition</h1>
        <p className='w-13/12  font-medium text-lg'>
  NutriShare est une plateforme dédiée à la gestion de l'alimentation et du bien-être, permettant aux utilisateurs de partager des recettes, de suivre leur consommation de calories et de macronutriments, et d'atteindre leurs objectifs nutritionnels. Vous pouvez créer, sauvegarder et filtrer des recettes en fonction de vos besoins spécifiques  et suivre votre apport calorique quotidien pour optimiser votre santé. NutriShare offre également un calculateur de calories intégré pour chaque recette.
</p>
        <div className='flex flex-row space-x-5'>
          <button className='w-auto px-7 py-3 bg-gray rounded-sm text-white'>Commencez maintenant</button>
          <button className='w-auto px-7 py-3 bg-gray rounded-sm text-white'>Inscrivez-vous</button>
        </div>
      </div>
      <div className="">
      <img src={imagebanner} className='pl-10 w-[100%] '/>
      
      </div>
    </div>
  );
}
