import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Riivo</h1>
        <div>
          <h1 className="text-md font-bold hover:text-gray-300">MYB</h1>
          <nav className="hidden sm:flex space-x-4">
            <p className="text-[10px]">manage your birthday</p>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
