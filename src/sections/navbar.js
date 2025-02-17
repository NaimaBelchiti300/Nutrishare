import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import logo from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center  md:px-12 py-3 font-serif ">
        {/* Logo */}
        <div>
          <img src={logo} className="" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 text-lg font-bold">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">Accueil</Link>
          <Link to="features" smooth={true} duration={500} className="cursor-pointer">Fonctionnalités</Link>
          <Link to="how-it-works" smooth={true} duration={500} className="cursor-pointer">Comment ça fonctionne</Link>
          <Link to="recipes" smooth={true} duration={500} className="cursor-pointer">Recettes</Link>
          <Link to="reviews" smooth={true} duration={500} className="cursor-pointer">Avis</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="px-5 py-1 bg-gray rounded-md text-white">Se connecter</button>
          <button className="px-5 py-1 bg-gray rounded-md text-white">S'inscrire</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray pr-16 text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 pt-12 left-0 w-full font-serif bg-white shadow-lg flex flex-col items-center space-y-4 py-5 text-md font-bold">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="features" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Fonctionnalités</Link>
          <Link to="how-it-works" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Comment ça fonctionne</Link>
          <Link to="recipes" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Recettes</Link>
          <Link to="reviews" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Avis</Link>

          <div className="flex flex-col space-y-2 w-full items-center">
            <button className="px-5 py-1 bg-gray rounded-md text-white w-10/12">Se connecter</button>
            <button className="px-5 py-1 bg-gray rounded-md text-white w-10/12">S'inscrire</button>
          </div>
        </div>
      )}
    </>
  );
}
