// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Riivo</h1>
        </div>
        <nav className="hidden sm:flex space-x-4">
          <nav className="hidden sm:flex space-x-4">
            <h1 className="text-2xl font-bold hover:text-gray-300">
              Birthday Manager
            </h1>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
