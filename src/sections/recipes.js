import { Link } from 'react-router-dom'
import recep1 from '../images/heroimage.png'
export default function Recipes(){
    return(
        <div className='md:1/2 w-full flex md:flex-row flex-col-reverse justify-center items-center font-serif  md:px-20  md:space-x-10 space-x-0 md:pt-0' data-aos="fade-up" data-aos-once="false">
            <div className='space-y-10 md:w-1/2 w-full' data-aos="fade-left" data-aos-once="false">
                <h1 className='font-serif font-bold text-gray md:text-4xl md:text-start text-center text-xl md:pt-0 pt-3'>Explorez les meilleures recettes adaptées à vos objectifs</h1>
                <p className='md:w-12/12  md:px-0 px-3 font-lora font-medium md:text-xl text-lg md:text-start text-center text-gray'>Découvrez une sélection de recettes soigneusement élaborées par les meilleurs chefs, adaptées à vos objectifs de santé et de bien-être. Que vous suiviez un régime faible en calories ou que vous cherchiez des recettes simples à réaliser, notre collection vous permet de filtrer par niveau de difficulté, calories et type de plat. Trouvez des recettes qui correspondent à vos préférences et suivez un plan nutritionnel équilibré, tout en vous régalant.</p>
                <div className="flex md:flex-row flex-col justify-center md:justify-start items-center md:space-x-6 md:space-y-0 space-y-3">
                    <Link to='/under'>
                    <button className=" text-lg md:px-9 px-20 py-2 bg-verte rounded-lg text-white hover:bg-gray-900 transition duration-300">
              Comencer a Explorer
            </button>
                    </Link>
            <Link to='/under'>
            <button className="text-lg md:px-9 py-2 px-20 bg-verte rounded-lg text-white hover:bg-gray-700 transition duration-300">
                ajouter un recette
            </button>
            </Link>



            
          </div>
            </div>

           
                
                <div className=' md:w-1/2 w-full md:px-0 px-5' data-aos="fade-right" data-aos-once="false">
                <img src={recep1} className=' rounded-full '/>
                </div>
               
           
          
        </div>
    )
}