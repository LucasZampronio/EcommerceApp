import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RightArrow from '../Images/Chevron Right.svg';

const Wishlist: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <section className='bg-neutral-100 h-15 items-center flex font-[Inter]'>
        <div className='items-center ml-36'>
          <div className='flex'>
            <p className='text-neutral-500 font-medium'>Ecommerce</p>
            <img className="ml-1 mr-1" src={RightArrow} alt="" />
            <p className='text-neutral-900 font-medium'>Wishlist</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-6">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Wishlist items will be displayed here */}
          <div className="text-center text-neutral-500">
            Your wishlist is empty. Add some products to your wishlist and they will appear here.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist; 