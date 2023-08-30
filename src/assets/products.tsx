import './products.css'; 
import React from 'react';


interface ProductProps {
  title: string;
  price: number;
  tam: string;
  imgPath: string;
  addToCart: (id:number)=>void;
  id:number;
}

const Product: React.FC<ProductProps> = ({ title, price, tam, imgPath, addToCart, id }) => {

  const addAoCarrinho = () => {
    addToCart(id);
  };

  return (
    <div className="product-container">
      <h2 className="product-title">{title}</h2>
      <img className="product-image" src={imgPath} alt={title} />
      <p>Price: {price}</p>
      <p>Size: {tam}</p>
      <div className="button-container">
        <button className="add-to-cart-button" onClick={addAoCarrinho}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};


export default Product;
