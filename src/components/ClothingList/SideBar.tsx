import React, { useState, useEffect } from "react";

interface SidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string, isChecked: boolean) => void;
  priceRange?: number;
  maxPrice?: number;
  onPriceChange?: (price: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  onCategoryChange,
  priceRange = 0,
  maxPrice = 1000,
  onPriceChange = () => {},
}) => {
  // CATEGORIAS DB JSON
  const categories = ["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"];

  const [PriceRange, setPriceRange] = useState<number>(priceRange);
  const [MaxPrice, setMaxPrice] = useState<number>(maxPrice);
  
  useEffect(() => {
    setPriceRange(priceRange);
  }, [priceRange]);
  
  useEffect(() => {
    setMaxPrice(maxPrice);
  }, [maxPrice]);
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
    if (onPriceChange) {
      onPriceChange(value);
    }
  };

  return (
    <div className="w-full md:w-64 h-115 mr-4 p-4 font-[Inter] border-2 rounded-lg border-neutral-200 ml-30">
      {/* FILTRO DAS CATEGORIAS */}
      <div className="mb-4">
        <h3 className="font-semibold mb-5 mt-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center py-2  border-b-2   border-neutral-200">
            <input
              type="checkbox"
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={(e) => onCategoryChange(category, e.target.checked)}
              className="mr-2"
            />
            <label htmlFor={`category-${category}`}>{category}</label>
          </div>
        ))}
      </div>
      
      {/* PREÇO */}
      <div>
        <h3 className="font-[Inter] mb-2">Price</h3>
        <div className="flex flex-col">
          <input 
            type="range" 
            min="0" 
            max={MaxPrice} 
            step="1" 
            value={PriceRange} 
            onChange={handlePriceChange}
            className="w-full bg-neutral-900"
          />
          <div className="flex justify-between mt-2">
            <span>R$0</span>
            <span>R${PriceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;