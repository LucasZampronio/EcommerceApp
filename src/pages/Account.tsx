import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RightArrow from '../Images/Chevron Right.svg';

const Account: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <section className='bg-neutral-100 h-15 items-center flex font-[Inter]'>
        <div className='items-center ml-36'>
          <div className='flex'>
            <p className='text-neutral-500 font-medium'>Ecommerce</p>
            <img className="ml-1 mr-1" src={RightArrow} alt="" />
            <p className='text-neutral-900 font-medium'>My Account</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              <a href="#profile" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100 rounded-lg">Profile</a>
              <a href="#orders" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100 rounded-lg">Orders</a>
              <a href="#addresses" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100 rounded-lg">Addresses</a>
              <a href="#payment" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100 rounded-lg">Payment Methods</a>
              <a href="#settings" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100 rounded-lg">Settings</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Phone</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" />
                </div>
                <button className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account; 