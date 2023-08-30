import React, { useState } from 'react';
import Product from './products.tsx';
import Pagination from './pages.tsx';
import allProducts from '../data.ts';
import { Link } from 'react-router-dom'; 
import './HomePage.css';

const HomePage: React.FC = () => {
  const [currentPage, setPagAtual] = useState(1);
  const [message, setMessage] = useState("");
  const [productsList, setProductsList] = useState(new Set<number>());
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  
  const addToCart = (id: number) => {
    if (productsList.has(id)) {
      setMessage("Produto já no carrinho");
    } else {
      const newSet = new Set(productsList);
      newSet.add(id);
      setProductsList(newSet);
      setMessage("Adicionado ao carrinho");
    }

    setTimeout(() => {
      setMessage("");
    }, 1000);
  };

  return (
    <div>
      <div className="products-row">
        <div className="button-container">
          <Link className="go-to-cart-button" 
                onClick={()=>localStorage.setItem('productsList', Array.from(productsList).toString())} 
                to="/cart">
            Carrinho
          </Link>
        </div>
        {currentProducts.map((product, index) => (
          <Product addToCart={addToCart} key={index} {...product} />
        ))}
        <Pagination
          totalPages={Math.ceil(allProducts.length / itemsPerPage)}
          currentPage={currentPage}
          PagMudanca={(pages) => setPagAtual(pages)}
        />
      </div>
      {message && (
        <div className="notificacao">
          {message}
        </div>
      )}
    </div>
  );
}

export default HomePage;
