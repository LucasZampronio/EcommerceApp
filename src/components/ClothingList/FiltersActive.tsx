import React from "react";
import Close from "../../Images/Close.svg"

interface FiltroSelecionadoProps {
  selectedCategories: string[];
  localPriceRange: number;
  removeFilter: (type: string, value: string) => void;
  resetPrice: () => void;
  searchQuery: string | null;
  removeSearchFilter: () => void;
}

const FiltroSelecionado: React.FC<FiltroSelecionadoProps> = ({
  selectedCategories,
  localPriceRange,
  removeFilter,
  resetPrice,
  searchQuery,
  removeSearchFilter,}) => {



  return (
    <div className="w-full font-[Inter] p-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium">Applied Filters:</h1>
        
        <div className="flex  flex-wrap gap-2">
          {/* MOSTRAR APENAS O QUE SELECIONOU */}
          {selectedCategories.map((category) => (
            <div key={category} className="flex border-2 border-neutral-200  items-center gap-2   pr-3 pl-3 pt-2  pb-2 rounded-full text-sm">
              <span>{category}</span>
              <button onClick={() => removeFilter("category", category)}className="text-neutral-500 hover:text-neutral-700">
                <img src={Close} alt="" />
              </button>
            </div>
          ))}

          {/* SÓ MOSTRAR O PREÇO SE TIVER ATIVO*/}
          {localPriceRange > 0 && (
            <div className="flex items-center gap-1 border-2 border-neutral-200 px-3 py-1 rounded-full text-sm">
              <span className="">$ {localPriceRange}</span>
              <button onClick={resetPrice} className="text-neutral-500 hover:text-neutral-700">
                <img src={Close} alt="" />
              </button>
            </div>
          )}

          {/* SÓ MOSTRAR A BUSCA SE TIVER ALGUMA BUSCA*/}
          {searchQuery && (
            <div className="flex items-center gap-1 border-2 border-neutral-200 px-3 py-1 rounded-full  text-sm">
              <span>Search: {searchQuery}</span>
              <button onClick={removeSearchFilter} className="text-neutral-500 hover:text-neutral-700">
                <img src={Close} alt="" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltroSelecionado;