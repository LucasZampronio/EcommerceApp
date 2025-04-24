import { SignUpButton } from "@clerk/clerk-react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Google from '../Images/Google.svg'
import RightArrow from '../Images/Chevron Right.svg'
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Rest of your registration logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main>
        <Header />
        <section className='bg-neutral-100 h-35 items-center flex font-[Inter]'>
            <div className='items-center ml-52'>
                <h1 className='mb-2 text-neutral-900 text-[24px] font-bold'>Sign up</h1>
                <div className='flex'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>Sign up</p>
                </div>
            </div>
        </section>
        
        <section className='w-full h-180 flex justify-center items-center font-[Inter]'>
            <div className='w-full max-w-sm'>
                <div className='text-center'>
                    <SignUpButton mode="modal">
                        <a className='flex mb-10 border-2 rounded-[6px] border-neutral-200 justify-center p-2'>
                            <img src={Google} alt="Logogoogle" className="m-0" />
                            <p className='ml-2 text-neutral-500 font-medium'>Continue with Google</p>
                        </a>
                    </SignUpButton>
                </div>
                <div className='mb-10 flex justify-center gap-6'>
                    <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
                    <p className='font-medium text-neutral-500'>OR</p>
                    <p className='border-b border-neutral-200 text-white'>oooooooooooooooo</p>
                </div>
                
                <form className='flex flex-col space-y-4'>
                    <div>
                        <label htmlFor="firstName" className="block font-medium text-neutral-600 mb-1">Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                                errors.firstName ? 'border-red-500' : 'border-neutral-200'
                            }`}
                            placeholder="First Name"
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block font-medium text-neutral-600 mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                                errors.lastName ? 'border-red-500' : 'border-neutral-200'
                            }`}
                            placeholder="Last Name"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-neutral-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                                errors.email ? 'border-red-500' : 'border-neutral-200'
                            }`}
                            placeholder="Email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-neutral-600 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                                errors.password ? 'border-red-500' : 'border-neutral-200'
                            }`}
                            placeholder="Password"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium text-neutral-600 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                                errors.confirmPassword ? 'border-red-500' : 'border-neutral-200'
                            }`}
                            placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>
                    <p className='text-neutral-500 text-[14px] mb-8'>By creating an account you agree with our Terms of Service, Privacy Policy,</p>
                    
                    <button type="submit" className="p-3 bg-neutral-900 text-neutral-100 text-[14px] rounded-[6px] hover:bg-neutral-600 font-medium">
                        Create account
                    </button>
                    <p className="text-center text-sm text-neutral-500">
                        Already have an account? <a href="/login" className="text-neutral-500 hover:text-neutral-900">Log in</a>
                    </p>
                </form>
            </div>
        </section>
        <Footer />
    </main>
  )
} 