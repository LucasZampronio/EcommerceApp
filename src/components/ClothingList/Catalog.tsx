import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRight from '../../Images/Icons/RightSign.svg'
import ArrowLeft from '../../Images/Icons/LeftSign.svg'

interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: string;
  imageUrl: string;
  ownerId?: string;
}

interface CatalogProps {
  products: Product[];
  searchResult: string | null;
}

const ITEMS_PER_PAGE = 9;

const Catalog: React.FC<CatalogProps> = ({ products, searchResult }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // CALCULO PAGINA
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (products.length === 0) {
    return (
      <div className="flex-grow p-6 text-center">
        <p>Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="p-4 font-[Inter]">
      {searchResult && (
        <h2 className="text-[16px] font-medium mb-4">
          Results for: <span className="font-bold">{searchResult}</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-6">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="h-100 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="bg-neutral-100 p-10 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-[Inter] text-[18px] font-medium mt-5">{product.name}</h3>
              <div className="mt-2 flex gap-8 items-center mb-4">
                <div>
                  <p className="text-sm text-neutral-900 border-2 p-1 pl-5 rounded-3xl border-neutral-200 pr-5">IN STOCK</p>
                </div>
                <p className="font-[Inter] text-[18px] font-normal text-neutral-600">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO PAGINA */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
          >
          <img src={ArrowLeft} alt="" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
          >
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;