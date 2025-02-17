import React from 'react';
import recepe2 from '../images/recep2.png'
import { Link } from 'react-router-dom';
const RecipeSection = () => {
  return (
< div className='pt-0' id='recipes' data-aos="fade-right" data-aos-once="false">
<div className="flex md:flex-row flex-col justify-center items-center md:px-20 px-10 md:space-x-5 w-full md:pt-0 pt-10 md:h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img src={recepe2} className="w-[100%] rounded-e-full" />
       
      </div>
      
      {/* Text Content */}
      <div className="md:w-1/2 w-full space-y-5 mt-5">
        <h2 className="text-gray md:text-4xl text-xl  md:text-start text-center font-serif font-bold">Inspirez-vous des recettes de la communauté</h2>
        <span className="md:text-2xl text-md md:text-start text-center font-medium  font-lora text-gray ">Recette de Toast Avocat & Œuf : Le Mélange Parfait pour Votre Santé !</span>
        <p className="text-gray font-medium font-lora w-12/12 md:text-start text-center ">Cette recette de toast avocat & œuf est une véritable bombe nutritionnelle, parfaite pour commencer votre journée ou comme encas sain. L'avocat est une source exceptionnelle de graisses saines, tandis que l'œuf apporte des protéines de haute qualité pour soutenir vos muscles. Ensemble, ces ingrédients vous offrent un mélange équilibré pour nourrir votre corps et booster votre énergie .</p>
        
        {/* Valeurs Nutritionnelles */}
        <h3 className='font-semibold font-lora text-gray md:text-start text-center'> Valeurs Nutritionnelles :</h3>
       <div className='flex flex-col justify-start items-center space-y-3 '>
       <div className='flex md:flex-row flex-col justify-start items-center md:space-x-1 md:space-y-0 space-y-3'>
          <span className="bg-verte border-2 border-solid text-white md:px-5 px-20 py-2 rounded-md whitespace-nowrap">Calories : 350 kcal</span>
          <span className="border-solid border-2 border-verte  md:px-5 px-[97px] py-2 text-gray rounded-md whitespace-nowrap">Protéines : 15g</span>
          <span className="border-solid border-2 border-verte  md:px-5 px-[97px] py-2 text-gray rounded-md whitespace-nowrap">Glucides : 30g</span>
          <span className="border-solid border-2 border-verte  md:px-5 px-[97px] py-2 text-gray rounded-md whitespace-nowrap">Lipides : 20g</span>
        </div>

        {/* Tags */}
        <div className='flex md:flex-row flex-col justify-start items-center md:space-x-1 md:pl-[69px] md:space-y-0 space-y-3'>
  <div className='border-solid border-2 border-verte  md:px-5 px-20 py-2 text-gray rounded-md whitespace-nowrap'>Faible en glucides</div>
  <div className='bg-verte border-2 border-solid text-white md:px-5 px-20 py-2 rounded-md whitespace-nowrap'>Riche en protéines</div>
  <div className='border-solid border-2 border-verte  md:px-5 px-20 py-2 text-gray rounded-md whitespace-nowrap'>Facile à préparer</div>
  <div className='border-solid border-2 border-verte bg-verte  text-white md:text-sm md:px-5 px-20 py-2 rounded-md  whitespace-nowrap'>Difficile à préparer</div>
</div>

       </div>

       
      </div>
              
    </div>
    {/* Buttons */}
    <div className="flex md:justify-start justify-center items-center md:space-x-10 w-full md:px-32  px-10 md:pt-10 pt-5">
      <Link to='/under' className='w-full'>
      <button className="text-lg px-9 py-2 bg-verte rounded-lg text-white hover:bg-gray-700 transition duration-300 font-serif w-full">Voir plus de recettes</button>

      </Link>
  </div>
</div>
  );
};

export default RecipeSection;
