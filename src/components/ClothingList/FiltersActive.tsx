import React from "react";

interface FiltroSelecionadoProps {
  selectedCategories: string[];
  localPriceRange: number;
  maxPrice: number;
  removeFilter: (type: string, value: string) => void;
  resetPrice: () => void;
  searchQuery: string | null;
  removeSearchFilter: () => void;
}

const FiltroSelecionado: React.FC<FiltroSelecionadoProps> = ({
  selectedCategories,
  localPriceRange,
  maxPrice,
  removeFilter,
  resetPrice,
  searchQuery,
  removeSearchFilter,
}) => {
  // MOSTRAR SEM CATEGORIAS E NO PREÇO 0
  const hasActiveFilters = 
    selectedCategories.length > 0 || 
    localPriceRange > 0 || // MAIOR QUE ZERO MOSTRAR
    searchQuery;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="mb-2 font-semibold">Filtros ativos:</div>
      <div className="flex flex-wrap gap-2">
        {/* FILTRO CATEGORIAS*/}
        {selectedCategories.map((category) => (
          <div
            key={category}
            className="px-3 py-1 bg-gray-200 rounded-full flex items-center"
          >
            <span className="mr-2">{category}</span>
            <button
              onClick={() => removeFilter("category", category)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        ))}

        {/* FILTRO PREÇOS */}
        {localPriceRange > 0 && (
          <div className="px-3 py-1 bg-gray-200 rounded-full flex items-center">
            <span className="mr-2">
              {localPriceRange === maxPrice 
                ? `$${localPriceRange}` 
                : `$${localPriceRange}`}
            </span>
            <button
              onClick={resetPrice}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        )}

        {/* FILTRO SERACH*/}
        {searchQuery && (
          <div className="px-3 py-1 bg-gray-200 rounded-full flex items-center">
            <span className="mr-2">Busca: {searchQuery}</span>
            <button
              onClick={removeSearchFilter}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltroSelecionado;