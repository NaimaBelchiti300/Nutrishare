import recep1 from '../images/heroimage.png'
export default function Recipes(){
    return(
        <div className='flex justify-center items-center font-serif px-20 space-x-10 pt-10'>
            <div className='space-y-10 w-1/2'>
                <h1 className='font-serif font-bold text-gray text-4xl'>Explorez les meilleures recettes adaptées à vos objectifs</h1>
                <p className='w-12/12 font-lora font-medium text-xl text-gray'>Découvrez une sélection de recettes soigneusement élaborées par les meilleurs chefs, adaptées à vos objectifs de santé et de bien-être. Que vous suiviez un régime faible en calories ou que vous cherchiez des recettes simples à réaliser, notre collection vous permet de filtrer par niveau de difficulté, calories et type de plat. Trouvez des recettes qui correspondent à vos préférences et suivez un plan nutritionnel équilibré, tout en vous régalant.</p>
                <div className="flex flex-row space-x-6">
            <button className="text-lg px-9 py-3 bg-verte rounded-lg text-white hover:bg-gray-900 transition duration-300">
              Comencer a Explorer
            </button>
            <button className="text-lg px-9 py-3 bg-verte rounded-lg text-white hover:bg-gray-700 transition duration-300">
                ajouter un recette
            </button>
          </div>
            </div>

           
                
                <div className='grid grid-cols-1 gap-0 w-1/2'>
                <img src={recep1} className=' rounded-full '/>
                </div>
               
           
          
        </div>
    )
}