import React from "react";

export const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#DB2777"/>
          <path d="M2 17L12 22L22 17" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-xl font-bold text-gray-800">Habitat</span>
      </div>
      <nav className="space-x-4">
        <button className="text-gray-700 hover:text-primary">Devenir hôte</button>
        <button className="text-gray-700 hover:text-primary">Aide</button>
        <button className="text-primary border border-primary px-4 py-1 rounded-full hover:bg-red-50">
          Connexion
        </button>
      </nav>
    </div>
  </header>
);