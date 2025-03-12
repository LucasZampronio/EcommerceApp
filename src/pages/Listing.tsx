import React, { useState, useEffect } from "react";
import SearchBar from "../components/ClothingList/SearchBar";
import Catalog from "../components/ClothingList/Catalog";
import Sidebar from "../components/ClothingList/SideBar";

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
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data: Product[] = await response.json();
        
        // Encontrar o maior preço para definir o range
        if (data && data.length > 0) {
          const highestPrice = Math.max(...data.map(p => parseFloat(p.price || "0")));
          const roundedMax = Math.ceil(highestPrice / 100) * 100; // Arredonda para a centena superior
          setMaxPrice(roundedMax);
          setPriceRange(roundedMax);
        }
        
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
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
    
    // PARA BUSCAR PREÇO
    const productPrice = parseFloat(product.price || "0");
    const matchesPrice = !isNaN(productPrice) && productPrice >= priceRange;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleSearch = (query: string): boolean => {
    const found = products.some((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(found ? query : null);
    return found;
  };

        {/*JUNTANDO TODOS OS COMPONENTES  */}

  return (
    <div className="flex flex-col md:flex-row py-8">
      <title>Catálogo de Roupas</title>
      
      <Sidebar 
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        priceRange={maxPrice}
        onPriceChange={handlePriceChange}
      />
      
      <div className="flex-1 flex flex-col">
        <SearchBar onSearch={handleSearch} />
        <Catalog 
          products={filteredProducts} 
          searchResult={searchResult} 
        />
      </div>
    </div>
  );
};

export default ClothingListPage;