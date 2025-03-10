import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Google from '../Images/Google.svg'

export default function Login() {
  return (
    <main>
        <Header />
        <section className='w-full h-180 flex justify-center items-center font-[Inter]'>
            <div className='w-full max-w-sm'>
                <div className='text-center'>
                    <a className='flex' href="">
                        <img src={Google} alt="Logogoogle" className="m-0" />
                        <p>Continue with Google</p>
                    </a>
                    <p>OR</p>
                </div>
                <form className='flex flex-col space-y-4'>
                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input type="text" id="email" className="w-full px-4  py-2  border-2 border-neutral-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-900" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block ">Password</label>
                        <input type="password" id="password" className="w-full px-4  py-2  border-2 border-neutral-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-900" />
                    </div>
                    <p className="text-right text-sm"><a href="">Forgot Password?</a></p>
                    <button type="submit" className="  p-3 bg-neutral-900 text-neutral-100 text-[14px]   rounded-[6px] hover:bg-neutral-600 font-medium ">Login</button>
                    <p className="text-center text-sm">Don't have an account? <a href="" className="text-blue-500">Sign up</a></p>
                </form>
            </div>
        </section>
        <Footer />
    </main>
  )
}
