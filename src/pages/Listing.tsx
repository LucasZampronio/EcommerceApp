import React, { useState, useEffect } from "react";
import SearchBar from "../components/ClothingList/SearchBar";
import Catalog from "../components/ClothingList/Catalog";
import Sidebar from "../components/ClothingList/SideBar";
import FiltroSelecionado from "../components/ClothingList/FiltersActive";
import RightArrow from '../Images/Chevron Right.svg'
import Header from "../components/Header";

export interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: string;
  imageUrl: string;
  ownerId?: string;
  category?: string;
}

const ClothingListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(0); //COMEÇA ZERO
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data: Product[] = await response.json();
        
        // PEGAR O MAIOR PREÇO PARA DEFINIR NO FILTRO
        if (data && data.length > 0) {
          const highestPrice = Math.max(...data.map(p => parseFloat(p.price || "0")));
          const roundedMax = Math.ceil(highestPrice / 100) * 100; // POSSO TIRAR ISSO FUTURAMENTE
          setMaxPrice(roundedMax);
        }
        
        setProducts(data);
      } catch (error) {
        console.error("Error searching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const handlePriceChange = (price: number) => {
    setPriceRange(price);
  };

  const filteredProducts = products.filter((product) => {
    // PARA BUSCAR NOME
    const matchesSearch =
      !searchResult ||
      product.name.toLowerCase().includes(searchResult.toLowerCase());
    
    // PARA BUSCAR CATEGORIA
    const matchesCategory =
      selectedCategories.length === 0 ||
      (product.category && selectedCategories.includes(product.category));
    
    // PARA BUSCAR PREÇO E COMEÇAR NO 0
    const productPrice = parseFloat(product.price || "0");
    const matchesPrice = priceRange === 0 || (!isNaN(productPrice) && productPrice >= priceRange);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleSearch = (query: string): boolean => {
    const found = products.some((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(found ? query : null);
    return found;
  };

  // REMOVER FILTROS
  const removeSearchFilter = () => {
    setSearchResult(null);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <section className='bg-neutral-100 h-15 items-center flex font-[Inter] '>
        <div className='items-center ml-34'>
          <div className='flex'>
            <p className='text-neutral-500  font-medium'>Ecommerce</p>
            <img className="ml-1 mr-1" src={RightArrow} alt="" />
            <p className='text-neutral-900 font-medium'>Search</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row py-8">
        <Sidebar selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange}priceRange={priceRange} maxPrice={maxPrice} onPriceChange={handlePriceChange}/>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row">
            <FiltroSelecionado selectedCategories={selectedCategories} localPriceRange={priceRange} 
              removeFilter={(type, value) => {
                if (type === "category") {
                  handleCategoryChange(value, false);
                }
              }}resetPrice={() => setPriceRange(0)} searchQuery={searchResult}removeSearchFilter={removeSearchFilter}
            />
            <SearchBar onSearch={handleSearch} OnSearchFilterChange={removeSearchFilter}
            />
          </div>
          <Catalog products={filteredProducts} searchResult={searchResult} 
          />
        </div>
      </div>
    </div>
  );
};

export default ClothingListPage;