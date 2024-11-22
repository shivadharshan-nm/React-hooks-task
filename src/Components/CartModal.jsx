import React from 'react';

const CartModal = ({ cart, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-4"
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1 ml-4">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
