import React, { useState } from "react";
import Search from '../../Images/Icons/Search.svg'

interface SearchBarProps {
  onSearch: (query: string) => boolean;
  OnSearchFilterChange: (query: string | null) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);


    {/*BUSCAR ITEM PELO NOM E */}

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const found = onSearch(searchQuery);
      setNotFound(!found);
    }

  };
  {/*PRESSIONAR ENTER AO INVES DE BOTÃO */}
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      const found = onSearch(searchQuery);
      setNotFound(!found);
    }
  };

  return (
    <div className="w-120 font-[Inter] h-10 pb-1 pt-1 border-2 rounded-[9px] mr-4 items-center">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 items-center">
      {/*PESQUISAR COMO TIRAR A BORDA DO INPUT*/}
      <button type="submit" className="text-white p-2 m-0 rounded-md hover:bg-neutral-700 transition-colors">
        <img src={Search} className="" alt="Searchicon" />
      </button>
          <input className="flex-grow m-0 outline-none" type="text"placeholder="Search products" value={searchQuery} onKeyDown={handleKeyDown} onChange={(e) => {setSearchQuery(e.target.value);if (notFound) setNotFound(false);}}/>
      </form>
      {/* COLOCAR A MSG DE ERRO NO COMPONENTE DE FILTRO DEPOIS*/}
      {notFound && (
        <p className=" ml-20 text-red-600 flex mt-2">
          No product with this name.
        </p>
      )}
    </div>
  );
};

export default SearchBar;