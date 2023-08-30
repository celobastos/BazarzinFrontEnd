import React from 'react';
import allProducts from '../data.ts';
import {useEffect,useState} from 'react'
import './Cart.css'; 



const Cart: React.FC = () => {
  const [cartFinal, setCartFinal] = useState<any[]>([]);
  const [products, setProducts] = useState<string[]>(localStorage.getItem('productsList')?.split(',') || []);


  const compareProducts = () => {
    //console.log("cheguei");
    const newCart: any[] = []; 

    if (products) {
      products.forEach((product) => {
        allProducts.forEach((productInfo) => {
          if (productInfo.id === parseInt(product)) {
            newCart.push(productInfo);
            //console.log("cheguei");
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

  const terminarCompra = () => {
    alert("Compra Feita!");
  }
  const removerItem = (id: number) => {
    const updatedProducts = products.filter(product => parseInt(product) !== id);
    setProducts(updatedProducts);
    localStorage.setItem('productsList', updatedProducts.toString());
    compareProducts();  
  };
  
  useEffect(() => {
    compareProducts();
  }, [products]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartFinal.map((item, index) => (
        <div className="cart-item-container" key={index}>
          <div className="cart-item-header">
          <h2 className="cart-item-title">{item.title}</h2>
          <button className="remove-button" onClick={() => removerItem(item.id)}>x</button>
          </div>
          <img className="cart-item-image" src={item.imgPath} alt={item.title} />
          <p>Price: {item.price}</p>
          <p>Size: {item.tam}</p>
        </div>
      ))}
      <div className="total-price-button">
        <button onClick={() => alert(`Preço Total: ${calculateTotalPrice()}`)}>
          Preço Total: {calculateTotalPrice()}
        </button>
      </div>
      <div className="purchase-button-container">
        <button className="purchase-button" onClick={terminarCompra}>Completar a Compra</button>
      </div>
    </div>
  );

  
};

export default Cart;
