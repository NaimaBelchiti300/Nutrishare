import React from "react";
import background from "../../images/Design sans titre (7).png";
import { FcGoogle } from "react-icons/fc"; // Icône Google de React Icons
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="w-full h-full object-cover absolute inset-0"
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center pt-3 pb-5">
          <h1 className="text-orange font-extrabold font-serif text-3xl">
            Se Connecter
          </h1>
          <h1 className="font-lora text-xl">
            {" "}
            Explorez plus de{" "}
            <span className="text-orange">10.0000 recettes</span> du monde
            entier !
          </h1>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md  shadow-shadow w-full max-w-lg ">
          <form className="font-lora">
            {/* Champ Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icône Email SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  className="block w-full pl-10 pr-3 py-2 border border-graylight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                />
              </div>
            </div>

            {/* Champ Mot de Passe */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de Passe
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icône Cadenas SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Votre mot de passe"
                  className="block w-full pl-10 pr-3 py-2 border border-graylight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                />
              </div>
            </div>
            <div className=" flex justify-end items-center">
              <span className="underline font-medium text-sm">
                <a>Mot de passe oublié</a>
              </span>
            </div>
            <div className="mb-2 mt-2 flex justify-center items-center space-x-2">
              <div className="flex-1 w-full">
                <span className=" block h-0.5 bg-gray "></span>
              </div>
              <div>
                <span>OR</span>
              </div>
              <div className="flex-1 w-full">
                <span className="block h-0.5 bg-gray"></span>
              </div>
            </div>
            <div className="mb-5 flex justify-center items-center space-x-2">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-graylight rounded-md py-3 px-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
                <FcGoogle className="h-5 w-5" /> {/* Icône Google */}
                <span>Login with Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-graylight rounded-md py-3 px-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
                <FaFacebookF className=" text-blue-600 h-5 w-5" />{" "}
                {/* Icône Google */}
                <span>Login with Facebook</span>
              </button>
            </div>

            {/* Bouton Soumettre */}
            <button
              type="submit"
              className="w-full bg-orange text-white py-2 rounded-md hover:bg-yellow-600 duration-300 focus:outline-none focus:ring-2 focus:bg-yellow-600 focus:ring-offset-2"
            >
              S'inscrire
            </button>
            <div className="mt-3 text-center">
              <h3>
                Vous n’avez pas encore de compte ?{" "}
                <a href="/CreetAccount">
                  {" "}
                  <span className="text-orange underline">Créer un compte</span>
                </a>{" "}
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
