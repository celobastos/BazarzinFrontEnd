import React from 'react';
import allProducts from '../data.ts';
import {useEffect,useState} from 'react'



const Cart: React.FC = () => {
  const [cartFinal, setCartFinal] = useState<any[]>([]);
  const products = localStorage.getItem('productsList')?.split(',');

  const compareProducts = () => {
    console.log("chuguei");
    const newCart: any[] = []; 

    if (products) {
      products.forEach((product) => {
        allProducts.forEach((productInfo) => {
          if (productInfo.id === parseInt(product)) {
            newCart.push(productInfo);
            console.log(productInfo.id);
          }
        });
      });
    }

    setCartFinal(newCart);
  };
  const calculateTotalPrice = () => {
    let total = 0;
    cartFinal.forEach(item => {
      total += item.price;
    });
    return total;
  }

  const handleCompletePurchase = () => {
    alert("Purchase complete!");
    console.log("Completing the purchase.");
  }
  
  useEffect(() => {
    compareProducts();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartFinal.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Descricao: {item.descricao}</p>
          <p>Tamanho: {item.tam}</p>
          <img src={item.imgPath} alt={item.title} />
        </div>
      ))}
      <h2>Total Price: {calculateTotalPrice()}</h2>
      <button onClick={handleCompletePurchase}>Completar a Compra</button>
    </div>
  );
};

export default Cart;
