import React from "react";
import { useForm } from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import Google from '../../Images/Google.svg';
import RightArrow from '../../Images/Chevron Right.svg';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginProps {
  onSubmit?: (data: LoginFormData) => void;
  error?: string;
}

const LoginUser: React.FC<LoginProps> = ({ onSubmit = () => {}, error }) => {
  const { formData, errors, handleChange, handleSubmit } = useForm<LoginFormData>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validate: (data) => {
      const errors: Record<string, string> = {};

      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Invalid email";
      }

      if (!data.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
  });

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
            <a className='flex mb-10 border-2 rounded-[6px] border-neutral-200 justify-center p-2' href="">
              <img src={Google} alt="Logogoogle" className="m-0" />
              <p className='ml-2 text-neutral-500 font-medium'>Continue with Google</p>
            </a>
          </div>
          <div className='mb-10 flex justify-center gap-6'>
            <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
            <p className=''>OR</p>
            <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <div>
              <label htmlFor="email" className="block font-medium text-neutral-600 mb-1">Email</label>
              <input 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
                id="email" 
                name="email"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-900"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-neutral-600 mb-1">Password</label>
              <input 
                value={formData.password} 
                onChange={handleChange} 
                type="password" 
                id="password" 
                name="password"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-900"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <p className="text-right text-sm">
              <Link to="/forgot-password" className="text-neutral-500 hover:text-neutral-900">Forgot Password?</Link>
            </p>
            <button type="submit" className="p-3 bg-neutral-900 text-neutral-100 text-[14px] rounded-[6px] hover:bg-neutral-600 font-medium">
              Login
            </button>
            <p className="text-center text-sm text-neutral-500">
              Don't have an account? <Link to="/signup" className="text-neutral-500 hover:text-neutral-900">Sign up</Link>
            </p>
            {error && (
              <div className="mt-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{error}</span>
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LoginUser;