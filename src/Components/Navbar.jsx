import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 bg-purple-600 text-white flex justify-between items-center px-4 py-3 shadow-md z-50">
      <h1 className="text-lg font-bold">Multi Store</h1>
      <button
        onClick={onCartClick}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
