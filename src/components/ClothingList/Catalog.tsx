import React from "react";

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

const Catalog: React.FC<CatalogProps> = ({ products, searchResult }) => {
  if (products.length === 0) {
    return (
      <div className="flex-grow p-6 text-center">
        <p>Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {searchResult && (
        <h2 className="text-xl mb-4">
          Resultados para: <span className="font-bold">{searchResult}</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-6">
        {products.map((product) => (
          <div key={product.id} className="  ">
            <div className="h-100  overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="bg-neutral-100  p-10 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="mt-2 flex justify-between items-center">
                <div>
                  <p className="text-sm text-neutral-600">IN STOCK</p>
                </div>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;