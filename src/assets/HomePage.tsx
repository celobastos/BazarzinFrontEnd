// HomePage.tsx

import React, { useState } from 'react';
import Product from './products.tsx';
import Pagination from './pages.tsx';
import allProducts from '../data.ts';
import { Link } from 'react-router-dom'; // Import Link from React Router

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;




  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  
  const productsList:number[] = []
  const addToCart = (id: number) => {
    productsList.push(id);
  }
  

  return (
    <div>
      <Link onClick={()=>localStorage.setItem('productsList',productsList.toString())} to="/cart">Go to Cart</Link> 
      {/* Render the current page's products */}
      {currentProducts.map((product, index) => (
        <Product addToCart= {addToCart}key={index} {...product} />
      ))}
      {/* Render the Pagination component */}
      <Pagination
        totalPages={Math.ceil(allProducts.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={(pages) => setCurrentPage(pages)}
      />
    </div>
  );
}

export default HomePage;
