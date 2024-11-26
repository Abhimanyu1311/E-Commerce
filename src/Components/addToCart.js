const addToCart = (id, image, name, price) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItem = cart.find(item => item.id === id);

  if (cartItem) {
      cartItem.quantity += 1;
  } else {
      cart.push({ id, name, image, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated')); 
};

export default addToCart;
