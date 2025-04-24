import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import RightArrow from '../Images/Chevron Right.svg'
import CartItems from '../components/Cart/CartItems'
import CartSummary from '../components/Cart/CartSummary'

const Cart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Header />
      <section className='bg-neutral-100 h-35 items-center flex font-[Inter]'>
            <div className='items-center ml-36'>
                <h1 className='mb-2 text-neutral-900 text-[24px] font-bold'>Cart</h1>
                <div className='flex'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>Cart</p>
                </div>
            </div>
        </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;