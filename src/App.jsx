import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CartModal from './Components/CartModal';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList products={products} onAddToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
