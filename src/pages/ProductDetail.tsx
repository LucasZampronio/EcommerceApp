import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import defaultImage from "../images/Hero Image.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Star from '../Images/Icons/Fullstar.svg'
import RightArrow from '../Images/Chevron Right.svg'
import share from '../Images/Icons/ThreePoints.svg'  
import Sleek from '../Images/Sleek.svg'
import Tess from '../Images/Sleek.svg'
import Mockup from '../Images/Mockup.svg'
import menus from '../Images/Icons/Menus.svg'
import mais from '../Images/Icons/Add.svg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          <div className="text-neutral-800 dark:text-neutral-200">Loading...</div>
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

  const handleAddToCart = () => {
    if (!product || !selectedColor || !selectedSize) {
      alert("Please select color and size");
      return;
    }

    const stockDetail = product.stockDetails.find(
      detail => detail.color === selectedColor && detail.size === selectedSize
    );

    if (!stockDetail || stockDetail.stock < quantity) {
      alert("Not enough stock available");
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity
    }));

    navigate('/cart');
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white  transition-colors duration-300">
      <section className=' h-10  items-center flex font-[Inter]'>
            <div className='items-center ml-52'>
                <div className='flex ml-[-70px]'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>{product.name}</p>
                </div>
            </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="aspect-square overflow-hidden rounded-lg bg-neutral-100 " >
              <img src={product.imageUrl || defaultImage}alt={product.name}className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col space-y-6 pl-20">
              <div>
                <h1 className="text-3xl  text-neutral-900 font-bold ">{product.name}</h1>
                <div className="mt-2 flex items-center space-x-4 ">
                  <div className="flex items-center  ">
                  </div>
                  <img src={Star}alt="" />
                  <h2 className="text-sm text-neutral-600 dark:text-neutral-400">{rating} </h2>
                  <h2 className={`px-3 ml-10 py-1 rounded-full text-sm ${
                  inStock 
                    ? "border-neutral-200  border-2 rounded-2xl text-neutral-800" 
                    : "bg-neutral-100 text-red-800"
                }`}>
                  {inStock ? "IN STOCK" : "OUT OF STOCK"}
                </h2>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-neutral-900 ">${product.price}</h1>
              </div>
          {/* CORES DISPONIVEIS  */}
              <div>
                <h3 className="text-sm font-medium text-neutral-500 mb-3">AVAILABLE COLORS</h3>
                <div className="flex space-x-2">
                  {Array.from(new Set(product.stockDetails.map(detail => detail.color))).map((color) => {
                    const hasStockForSelectedSize = selectedSize && product.stockDetails.some(
                      detail => detail.color === color && detail.size === selectedSize && detail.stock > 0
                    );
                    return (
                      <button key={color}onClick={() => hasStockForSelectedSize && setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-white border-1 ring-2 ring-black dark:border-neutral-100"
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
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-200 mb-3">SELECT SIZE</h3>
                <div className="flex space-x-2">
                  {Array.from(new Set(product.stockDetails.map(detail => detail.size))).map((size) => {
                    const hasStockForSelectedColor = selectedColor && product.stockDetails.some(
                      detail => detail.size === size && detail.color === selectedColor && detail.stock > 0
                    );
                    return (
                      <button key={size} onClick={() => hasStockForSelectedColor && setSelectedSize(size)} className={`px-4 py-2 text-sm rounded-md ${
                          selectedSize === size
                            ? " text-neutral-900 border-2 font-medium rounded-xl2 border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900"
                            : "text-neutral-500 border-2 font-medium rounded-xl2 border-neutral-200 dark:bg-neutral-100 dark:text-neutral-900"
                        } ${!hasStockForSelectedColor ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} disabled={!hasStockForSelectedColor}>
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            

              {/* QUANTIDADES */}
              <div>
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-200 mb-3"> QUANTITY</h3>
                <div className="flex items-center space-x-4 border-2 border-neutral-200 rounded-xs w-34 gap-3">
                  <button
                    onClick={() => handleQuantityChange(false)}className="w-8 h-8 rounded-full  dark:bg-neutral-800 flex items-center justify-center cursor-pointer">
                    <img src={menus} alt="" />
                  </button>
                  <p className="text-lg font-medium">{quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(true)}className="w-8 h-8 rounded-full  dark:bg-neutral-800 flex items-center justify-center cursor-pointer">
                    <img src={mais} alt="" />
                  </button>
                </div>
              </div>

              {/* BOTÃO CARRINHO */}
              <div className="flex space-x-4 pt-6">
                <button 
                  onClick={handleAddToCart}
                  className="w-70 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
              <div className="font-medium text-neutral-500 ">
                <p>— Free shipping on orders $100+</p>
              </div>

              {/* DESCRIÇÃO DO PRODUTO */}
            
            </div>
            <div className="flex items-center gap-4 pt-6 w-90 h-10 mt-20 pb-5 pl-9 rounded-xl bg-neutral-200 border-neutral-200 dark:border-neutral-700">
              <img src={share} alt="" />
              <p>
                Details
              </p>
            </div>
            {product.detail && (
                <div className="mt-8 pt-6   border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Detail
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              )}
          </div>
          
          <div className=' w-308 h-160 mb-20 font-[Inter]'>
            <div className=' items-center'>
              <h2 className='mb-2   mt-50  text-neutral-900 font-bold text-[24px]'> You might also like</h2>
              <h1 className='mb-20  font-medium text-[14px] text-neutral-400 '>SIMILAR PRODUCTS </h1>
  
            </div>
            <div className='grid grid-cols-4  gap-6 ml-10'>
              <div>
                <img className='bg-neutral-100 p-2' src={Sleek} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Elegant Ebony Sweatshirts</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$35.00</p>
                </div>
              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Sleek} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Sleek and Cozy Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$57.00</p>
                </div>

              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Tess} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Raw Black Tees</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$19.00</p>
                  
                </div>
              </div>
              <div>
                <img  className='bg-neutral-100 p-2 'src={Mockup} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>MOCKUP Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$30.00</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;