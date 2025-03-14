import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import defaultImage from "../images/Hero Image.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Star from '../Images/Icons/Fullstar.svg'

interface ProductDetailProps {
  onEdit?: () => void;
}

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  category?: string;
  ownerId?: string;
  detail?: string;
  stockDetails: {
    color: string;
    size: string;
    stock: number;
  }[];
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  {/*const navigate = useNavigate(); // TTALVEZ USAR PARA VOLTAR AO CATÁLOGO*/}
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);

  const inStock = true;
  const rating = '4.2 — 54 Reviews';

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error("Produto não encontrado");
        }
        const data = await response.json(); 
        setProduct(data);
        const firstAvailableColor = data.stockDetails.find((detail: { stock: number; color: string }) => detail.stock > 0)?.color;
        if (firstAvailableColor) {
          setSelectedColor(firstAvailableColor);
        }
        const firstAvailableSize = data.stockDetails.find((detail: { stock: number; size: string }) => detail.stock > 0)?.size;
        if (firstAvailableSize) {
          setSelectedSize(firstAvailableSize);
        }
      } catch (error) {
        console.error("Deu erro", error);
        setError("Tentar dnv");
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  //CASO DE ERRO TELA

  if (error) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900">
          <div>{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900">
          <div className="text-neutral-800 dark:text-neutral-200">Carregando...</div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (increment: boolean) => {
    setQuantity(prev => {
      const newValue = increment ? prev + 1 : prev - 1;
      return Math.max(1, newValue); // MENOS QUE UM NÃO DA
    });
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white  transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="aspect-square overflow-hidden rounded-lg bg-neutral-100 " >
              <img src={product.imageUrl || defaultImage}alt={product.name}className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl  text-neutral-900 ">{product.name}</h1>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center">
                  </div>
                  <img src={Star}alt="" />
                  <h2 className="text-sm text-neutral-600 dark:text-neutral-400">{rating} </h2>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-neutral-900 ">${product.price}</h1>
                <h2 className={`px-3 py-1 rounded-full text-sm ${
                  inStock 
                    ? "bg-neutral-100 text-neutral-800" 
                    : "bg-neutral-100 text-red-800"
                }`}>
                  {inStock ? "In Stock" : "Out of Stock"}
                </h2>
              </div>
          {/* CORES DISPONIVEIS  */}
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Color</h3>
                <div className="flex space-x-2">
                  {Array.from(new Set(product.stockDetails.map(detail => detail.color))).map((color) => {
                    const hasStockForSelectedSize = selectedSize && product.stockDetails.some(
                      detail => detail.color === color && detail.size === selectedSize && detail.stock > 0
                    );
                    return (
                      <button key={color}onClick={() => hasStockForSelectedSize && setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-neutral-900 dark:border-neutral-100"
                            : "border-transparent"
                        } ${!hasStockForSelectedSize ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        style={{backgroundColor: color.toLowerCase(),}}disabled={!hasStockForSelectedSize}
                      />
                    );
                  })}
                </div>
              </div>

              {/* TAMANHOS DISPONIVEIS */}
              <div>
                <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-3">Size</h3>
                <div className="flex space-x-2">
                  {Array.from(new Set(product.stockDetails.map(detail => detail.size))).map((size) => {
                    const hasStockForSelectedColor = selectedColor && product.stockDetails.some(
                      detail => detail.size === size && detail.color === selectedColor && detail.stock > 0
                    );
                    return (
                      <button key={size} onClick={() => hasStockForSelectedColor && setSelectedSize(size)} className={`px-4 py-2 text-sm rounded-md ${
                          selectedSize === size
                            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                            : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                        } ${!hasStockForSelectedColor ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} disabled={!hasStockForSelectedColor}>
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            
              {selectedColor && selectedSize && (
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  <p>Available Stock: {product.stockDetails.find(
                    detail => detail.color === selectedColor && detail.size === selectedSize
                  )?.stock || 0} units</p>
                </div>
              )}

              {/* QUANTIDADES */}
              <div>
                <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-3"> Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(false)}className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    -
                  </button>
                  <p className="text-lg font-medium">{quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(true)}className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>

              {/* BOTÃO CARRINHO */}
              <div className="flex space-x-4 pt-6">
                <button className="flex-1 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>

              {/* DESCRIÇÃO DO PRODUTO */}
              {product.detail && (
                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Product Details
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;