import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Google from '../Images/Google.svg'
import RightArrow from '../Images/Chevron Right.svg'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main>
        <Header />
        <section className='bg-neutral-100 h-35 items-center flex font-[Inter]'>
            <div className='items-center ml-52'>
                <h1 className='mb-2 text-neutral-900 text-[24px] font-bold'>Login</h1>
                <div className='flex'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>Login</p>
                </div>
            </div>
        </section>
        
        <section className='w-full h-180 flex justify-center items-center font-[Inter]'>
            <div className='w-full max-w-sm'>
                <div className='text-center'>
                    <a className='flex mb-10 border-2 rounded-[6px] border-neutral-200 justify-center p-2'>
                        <img src={Google} alt="Logogoogle" className="m-0" />
                        <p className='ml-2 text-neutral-500 font-medium'>Continue with Google</p>
                    </a>
                </div>
                <div className='mb-10 flex justify-center gap-6'>
                    <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
                    <p className='font-medium text-neutral-500'>OR</p>
                    <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
                </div>
                
                <form className='flex flex-col space-y-4'>
                    <div>
                        <label htmlFor="email" className="block font-medium text-neutral-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-neutral-600 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
                            placeholder="Password"
                        />
                    </div>
                    <p className="text-right text-sm">
                        <a href="/forgot-password" className="text-neutral-500 hover:text-neutral-900">Forgot Password?</a>
                    </p>
                    <button type="submit" className="p-3 bg-neutral-900 text-neutral-100 text-[14px] rounded-[6px] hover:bg-neutral-600 font-medium">
                        Login
                    </button>
                    <p className="text-center text-sm text-neutral-500">
                        Don't have an account? <a href="/register" className="text-neutral-500 hover:text-neutral-900">Sign up</a>
                    </p>
                </form>
            </div>
        </section>
        <Footer />
    </main>
  )
}
