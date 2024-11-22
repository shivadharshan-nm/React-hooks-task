import React from 'react';

const ProductCard = ({ product, cartItem, onAddToCart, onDecrementFromCart }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain mb-3"
      />
      <h3 className="text-sm font-semibold text-center mb-2">{product.title}</h3>
      <p className="text-lg font-bold text-gray-700 mb-3">${product.price.toFixed(2)}</p>
      {cartItem ? (
        <div className="flex items-center">
          <button
            onClick={onDecrementFromCart}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
          >
            −
          </button>
          <span className="mx-3 text-lg">{cartItem.quantity}</span>
          <button
            onClick={onAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={onAddToCart}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
