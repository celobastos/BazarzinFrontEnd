import React from 'react';
import './pages.css'; 

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  PagMudanca: (page: number) => void;
}

const Pages: React.FC<PaginationProps> = ({ totalPages, currentPage, PagMudanca }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="paginacao">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => PagMudanca(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pages;
