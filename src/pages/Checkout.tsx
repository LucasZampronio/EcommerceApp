import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RightArrow from '../Images/Chevron Right.svg';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import { useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fetchAddressFromCep = async (cep: string) => {
    try {
      const cleanCep = cep.replace(/\D/g, '');
      
      if (cleanCep.length !== 8) {
        return;
      }

      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data: ViaCepResponse = await response.json();

      if (data.erro) {
        console.error('CEP não encontrado');
        return;
      }

      setFormData(prev => ({
        ...prev,
        address: data.logradouro,
        city: data.localidade,
        state: data.uf,
        zipCode: data.cep
      }));
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      zipCode: value
    }));
    
    // Clear error when user starts typing
    if (errors.zipCode) {
      setErrors(prev => ({ ...prev, zipCode: undefined }));
    }
    
    if (value.length === 8) {
      fetchAddressFromCep(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    navigate('/afterpayment');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white ">
      <section className='bg-neutral-100 h-35 items-center flex font-[Inter]'>
            <div className='items-center ml-35'>
                <h1 className='mb-2 text-neutral-900 text-[24px] font-bold'>Checkout</h1>
                <div className='flex'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>Checkout</p>
                </div>
            </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 mb-6">Shipping Adress</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleZipCodeChange}
                        maxLength={8}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.zipCode ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.zipCode && <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>}
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.country ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.city ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.state ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                     Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                        errors.address ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                          errors.firstName ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                </div>
              </form>
            </div>

            <div className="lg:sticky lg:top-8">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;