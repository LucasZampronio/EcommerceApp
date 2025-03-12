import React, { useState, useEffect } from "react";

interface SidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string, isChecked: boolean) => void;
  selectedColors?: string[];
  onColorChange?: (color: string, isChecked: boolean) => void;
  selectedSizes?: string[];
  onSizeChange?: (size: string, isChecked: boolean) => void;
  priceRange?: number;
  onPriceChange?: (price: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  onCategoryChange,
  priceRange = 1000,
  onPriceChange = () => {},
}) => {
    {/*CATEGORIAS DB JSON*/}
  const categories = ["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"];

  const [localPriceRange, setLocalPriceRange] = useState<number>(priceRange);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  
      {/*LOCAL DO PREÇO*/}
  useEffect(() => {
    setLocalPriceRange(priceRange);
    setMaxPrice(priceRange);
  }, [priceRange]);
  
     {/*MUDAR O PREÇO*/}
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalPriceRange(value);
    if (onPriceChange) {
      onPriceChange(value);
    }
  };
  
  const removeFilter = (type: string, value: string) => {
    if (type === "category") {
      onCategoryChange(value, false);
    }
  };
  
      {/*TEXTO PARA PESQUISAR*/}
  const resetPrice = () => {
    setLocalPriceRange(maxPrice);
    if (onPriceChange) {
      onPriceChange(maxPrice);
    }
  };

  return (
    <div className="w-full md:w-64 p-4 bg-neutral-50 md:min-h-screen">
      {/* BALOES DOS FILTROS */}
      {(selectedCategories.length > 0 || localPriceRange < maxPrice) && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(category => (
              <div 
                key={`filter-cat-${category}`} 
                className="bg-blue-100 text-neutral-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                <span>{category}</span>
                <button 
                  onClick={() => removeFilter("category", category)}
                  className="ml-2 text-neutral-800 hover:text-neutral-600 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
            
            {localPriceRange < maxPrice && (
              <div 
                className="bg-green-100 text-neutral-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                <span>${localPriceRange}</span>
                <button 
                  onClick={resetPrice}
                  className="ml-2 text-neutral-800 hover:text-neutral-600 font-bold"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* FILTRO DAS CATEGORIAS*/}
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
      
      {/* PREÇO*/}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex flex-col">
          <input type="range" min="0" max={maxPrice} step="5" value={localPriceRange} onChange={handlePriceChange}className="w-full "/>
          <div className="flex justify-between mt-2 ">
            <span>R$0</span>
            <span>${localPriceRange}</span>
            <span>R${maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;