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

  const [localPriceRange, setLocalPriceRange] = useState<number>(priceRange);
  const [localMaxPrice, setLocalMaxPrice] = useState<number>(maxPrice);
  
 //PREÇO
  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);
  
  useEffect(() => {
    setLocalMaxPrice(maxPrice);
  }, [maxPrice]);
  
  // MUDAR O PREÇO
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalPriceRange(value);
    if (onPriceChange) {
      onPriceChange(value);
    }
  };

  return (
    <div className="w-full md:w-64 p-4 bg-neutral-50 md:min-h-screen">
      {/* FILTRO DAS CATEGORIAS */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
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
      <div className="mb-6">
        <h3 className="font-[Inter] mb-2">Price</h3>
        <div className="flex flex-col">
          <input 
            type="range" 
            min="0" 
            max={localMaxPrice} 
            step="5" 
            value={localPriceRange} 
            onChange={handlePriceChange}
            className="w-full bg-neutral-900"
          />
          <div className="flex justify-between mt-2">
            <span>R$0</span>
            <span> R${localPriceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;