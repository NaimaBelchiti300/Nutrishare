import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

function Under() {
  return (
    <div className="">
        
      <div className="pl-10 pt-5">
      <button className="bg-graylight rounded-md w-auto h-auto px-5  py-2 flex justify-center items-center">
        <Link className="font-bold text-xl text-gray  font-serif flex items-center" to='/'>
          <FaArrowLeft className="mr-2" /> {/* Icône de retour */}
          Retour
        </Link>
      </button>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 pb-44">
        <div className="text-center p-6 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl text-red-500 font-bold">Page en construction</h1>
          <p className="mt-4 text-lg text-gray-600">Nous travaillons dur pour améliorer cette page. Revenez plus tard !</p>
        </div>
      </div>
    </div>
  );
}

export default Under;
