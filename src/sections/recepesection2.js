import React from 'react';
import recepe2 from '../images/recep2.png'
const RecipeSection = () => {
  return (
    <div className="flex justify-center items-center px-20 space-x-5 w-full">
      {/* Image Section */}
      <div className="w-1/2">
        <img src={recepe2} className="w-[100%] rounded-e-full" />
       
      </div>
      
      {/* Text Content */}
      <div className="w-1/2 space-y-5 mt-9">
        <h2 className="text-gray text-4xl text-start font-serif font-bold">Inspirez-vous des recettes de la communauté</h2>
        <span className="text-2xl font-medium text-start font-lora text-gray ">Recette de Toast Avocat & Œuf : Le Mélange Parfait pour Votre Santé !</span>
        <p className="text-gray font-medium font-lora w-12/12 text-start">Cette recette de toast avocat & œuf est une véritable bombe nutritionnelle, parfaite pour commencer votre journée ou comme encas sain. L'avocat est une source exceptionnelle de graisses saines, tandis que l'œuf apporte des protéines de haute qualité pour soutenir vos muscles. Ensemble, ces ingrédients vous offrent un mélange équilibré pour nourrir votre corps et booster votre énergie .</p>
        
        {/* Valeurs Nutritionnelles */}
        <h3 className='font-semibold font-lora text-gray'> Valeurs Nutritionnelles :</h3>
       <div className='flex flex-col justify-start items-center space-y-3'>
       <div className='flex justify-start items-center space-x-1'>
          <span className="bg-verte border-2 border-solid text-white px-5 py-2 rounded-md whitespace-nowrap">Calories : 350 kcal</span>
          <span className="border-2 border-solid border-verte px-5 py-2 rounded-md whitespace-nowrap">Protéines : 15g</span>
          <span className="border-2 border-solid border-verte px-5 py-2 rounded-md whitespace-nowrap">Glucides : 30g</span>
          <span className="border-2 border-solid border-verte px-5 py-2 rounded-md whitespace-nowrap">Lipides : 20g</span>
        </div>

        {/* Tags */}
        <div className='flex justify-start items-center space-x-1 pl-[69px]'>
  <div className='border-solid border-2 border-verte px-5 py-2 text-gray rounded-md whitespace-nowrap'>Faible en glucides</div>
  <div className='border-solid border-2 border-verte bg-verte  text-graylight px-5 py-2 rounded-md whitespace-nowrap'>Riche en protéines</div>
  <div className='border-solid border-2 border-verte  px-5 py-2 text-gray rounded-md whitespace-nowrap'>Facile à préparer</div>
  <div className='border-solid border-2 border-verte bg-verte  text-graylight px-5 py-2 rounded-md text-sm whitespace-nowrap'>Difficile à préparer</div>
</div>

       </div>

        {/* Buttons */}
        <div className="flex justify-start items-center space-x-10">
          <button className="border-2 border-gray text-gray px-5 py-2 rounded-md">Partager cette recette</button>
          <button className="bg-gray border-2 text-graylight px-5 py-2 rounded-md">Voir plus de recettes</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
