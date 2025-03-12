import React from "react";
import background from "../../images/Design sans titre (7).png";
import { FcGoogle } from "react-icons/fc"; // Icône Google de React Icons
import { FaFacebookF } from "react-icons/fa";

export default function CreateAccount() {
  return (
    <div className="w-full h-screen  relative">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="w-full h-full object-cover absolute inset-0"
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center pb-2 pt-6">
          <h1 className="text-orange font-extrabold font-serif text-3xl">
          Inscrivez-vous gratuitement
          </h1>
          <h1 className="font-lora text-xl">
            Rejoignez notre communauté et explorez plus de {''}
            <span className="text-orange">10.0000 recettes</span> du monde
            entier !
          </h1>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md  shadow-shadow w-full max-w-xl pt-5">
          <form className="font-lora">
            {/* Champ Nom */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icône Utilisateur SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre Nom complet"
                  className="block w-full pl-10 pr-3 py-2 border border-graylight rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-yellow-600 focus:border-yellow-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom d'utilisateur
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icône Utilisateur SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre Nom d'utilisateur"
                  className="block w-full pl-10 pr-3 py-2 border border-graylight rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-yellow-600 focus:border-yellow-600"
                />
              </div>
            </div>

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

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmer mot de passe{" "}
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

            {/* Bouton Soumettre */}
            <button
              type="submit"
              className="w-full bg-orange text-white py-2 rounded-md hover:bg-yellow-600 duration-300 focus:outline-none focus:ring-2 focus:bg-yellow-600 focus:ring-offset-2"
            >
Créer un compte            </button>
<div className="mt-3 text-center">
              <h3>
              Vous avez déjà un compte ? {' '}
                      <a href="/login">
                  {" "}
                  <span className="text-orange underline">Se connecter      </span>
                </a>{" "}
              </h3>
            </div>          </form>
        </div>
      </div>
    </div>
  );
}
