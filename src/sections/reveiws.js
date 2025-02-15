import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
      name: "Alice Dupont",
      text: "NutriShare m'a permis de mieux comprendre mes besoins nutritionnels et d'adopter une alimentation plus équilibrée. J'adore les recettes proposées, elles sont saines et délicieuses !",
      rating: 5,
    },
    {
      name: "Marc Lefevre",
      text: "Une application très intuitive et complète ! Elle m'aide à suivre mes repas au quotidien et à mieux gérer mes apports caloriques. Je la recommande à tous ceux qui veulent adopter une alimentation plus saine.",
      rating: 4,
    },
    {
      name: "Sophie Martin",
      text: "NutriShare est un outil indispensable pour suivre mon alimentation de manière simple et efficace. Grâce aux recommandations personnalisées, j’ai pu atteindre mes objectifs de bien-être !",
      rating: 5,
    },
    {
      name: "David Morel",
      text: "Cette application est géniale ! J’ai découvert de nouvelles recettes saines et équilibrées qui me permettent de mieux manger tout en me faisant plaisir. Très bon concept !",
      rating: 5,
    },
    {
      name: "Élodie Bernard",
      text: "Enfin une application qui m'aide vraiment à comprendre l'impact de mon alimentation sur ma santé. L'interface est fluide et agréable, et le suivi des repas est super facile.",
      rating: 4,
    }
  ];
  
export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-20 pt-16 w-full h-auto space-y-16" id="reviews">
       <div className="flex flex-col justify-center items-center space-y-2">
       <h1 className="text-gray text-4xl text-center font-serif font-bold">Découvrez ce que pensent nos utilisateurs</h1>
       <span className="font-semibold text-2xl font-serif text-verte text-center">Les avis de notre communauté</span>
       </div>
        <div className="w-full max-w-6xl mx-auto p-12 bg-gradient-to-r from-green-950 to-verte rounded-3xl  shadow-2xl text-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-16 rounded-3xl shadow-lg"
        >
          <p className="text-4xl font-extrabold font-serif text-gray">{reviews[index].name}</p>
          <p className="text-gray-600 italic mt-4 text-xl">"{reviews[index].text}"</p>
        
        </motion.div>
      </AnimatePresence>
      
      <button onClick={prevReview} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-md hover:bg-gray-200 transition">
        <ChevronLeft size={40} className="text-gray" />
      </button>
      <button onClick={nextReview} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-md hover:bg-gray-200 transition">
        <ChevronRight size={40} className="text-gray" />
      </button>
    </div>
    </div>
  );
}
