import React from 'react';
import './products.css'; // Importing the styles

interface ProductProps {
  title: string;
  price: number;
  descricao: string;
  tam: string;
  imgPath: string;
  addToCart: (id:number)=>void;
  id:number;
}

const Product: React.FC<ProductProps> = ({ title, price, descricao, tam, imgPath, addToCart, id }) => {
  return (
    
    <div className="product-container"> {/* Adding the class */}
      <h2 className="product-title">{title}</h2>
      <img className="product-image" src={imgPath} alt={title} /> {/* Adding the class */}
      <p>Price: {price}</p>
      <p>Description: {descricao}</p>
      <p>Size: {tam}</p>
      <button onClick={() => {
        addToCart(id);
        console.log(`${title} added to cart`);
      }}>
        Add to Cart
      </button>
    </div>
    
  );
};

export default Product;
