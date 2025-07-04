// pages/checkout.jsx
'use client';
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocalShipping,
  CreditCard,
  Payment,
  Home,
  Apartment,
  LocationCity,
  Public,
  Person,
  Email,
  Phone,
  CalendarToday,
  Lock,
  ArrowBack,
  CheckCircle
} from "@mui/icons-material";
import { productDetailImages } from '@/utils/ImagesData';
import { LocalAtm } from '@mui/icons-material';
export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [formData, setFormData] = useState({
    contact: { name: '', email: '', phone: '' },
    shipping: { street: '', apartment: '', city: '', state: '', postalCode: '', country: '' },
    payment: { method: 'card', cardName: '', cardNumber: '', expiry: '', cvv: '', saveCard: false },
    delivery: { method: 'standard' }
  });

  const steps = ['Contact', 'Shipping', 'Payment', 'Review'];

  const handleNext = () => {
    
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const products = [
    {
      name: "Comfortly Plus 5‑seater Sofa",
      details: "Brown • Fabric",
      price: 1899.00,
      image: productDetailImages.firstImage
    },
    {
      name: "Harmony Coffee Table",
      details: "Walnut • 120 × 40 cm",
      price: 269.99,
      image: productDetailImages.secondImage
    }
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const shippingCost = formData.delivery.method === 'express' ? 40 : 0;
  const total = subtotal + shippingCost;

  return (
    <>
      <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">

        <title>Checkout</title>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-10">
              <div className="w-full max-w-3xl">
                <div className="flex items-center justify-between relative">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= index ? 'bg-[#B2A191] text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
                        {completed[index] ? (
                          <CheckCircle className="text-black" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span className={`text-sm mt-2 ${activeStep >= index ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                  <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-1">
                    <motion.div
                      className="h-full bg-gray-900"
                      initial={{ width: '0%' }}
                      animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.section
                    key="contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Person className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Person className="text-gray-400" />
                          </div>
                          <input
                            id="name"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.contact.name}
                            onChange={(e) => handleChange('contact', 'name', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Email className="text-gray-400" />
                          </div>
                          <input
                            id="email"
                            type="email"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.contact.email}
                            onChange={(e) => handleChange('contact', 'email', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="text-gray-400" />
                          </div>
                          <input
                            id="phone"
                            type="tel"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.contact.phone}
                            onChange={(e) => handleChange('contact', 'phone', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {activeStep === 1 && (
                  <motion.section
                    key="shipping"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Home className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Home className="text-gray-400" />
                          </div>
                          <input
                            id="street"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.shipping.street}
                            onChange={(e) => handleChange('shipping', 'street', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Apartment className="text-gray-400" />
                          </div>
                          <input
                            id="apartment"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.shipping.apartment}
                            onChange={(e) => handleChange('shipping', 'apartment', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LocationCity className="text-gray-400" />
                          </div>
                          <input
                            id="city"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            value={formData.shipping.city}
                            onChange={(e) => handleChange('shipping', 'city', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Province</label>
                        <input
                          id="state"
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                          value={formData.shipping.state}
                          onChange={(e) => handleChange('shipping', 'state', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal code</label>
                        <input
                          id="postalCode"
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                          value={formData.shipping.postalCode}
                          onChange={(e) => handleChange('shipping', 'postalCode', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Public className="text-gray-400" />
                          </div>
                          <select
                            id="country"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none bg-white"
                            value={formData.shipping.country}
                            onChange={(e) => handleChange('shipping', 'country', e.target.value)}
                          >
                            <option value="">Select a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {activeStep === 2 && (
                  <motion.section
                    key="payment"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Payment className="text-gray-500" />
                      <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          value="card"
                          checked={formData.payment.method === 'card'}
                          onChange={(e) => handleChange('payment', 'method', e.target.value)}
                          className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300"
                        />
                        <div className="flex items-center gap-2">
                          <CreditCard className="text-gray-500" />
                          <label htmlFor="card" className="block text-sm font-medium text-gray-700">Credit / Debit card</label>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="cod"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.payment.method === 'cod'}
                          onChange={(e) => handleChange('payment', 'method', e.target.value)}
                          className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300"
                        />
                        <div className="flex items-center gap-2">
                          <LocalAtm className="text-gray-500" />
                          <label htmlFor="cod" className="block text-sm font-medium text-gray-700">Cash on Delivery</label>
                        </div>
                      </div>
                    </div>

                    {formData.payment.method === 'card' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on card</label>
                            <input
                              id="cardName"
                              type="text"
                              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                              value={formData.payment.cardName}
                              onChange={(e) => handleChange('payment', 'cardName', e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
                            <input
                              id="cardNumber"
                              type="text"
                              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                              value={formData.payment.cardNumber}
                              onChange={(e) => handleChange('payment', 'cardNumber', e.target.value)}
                              placeholder="•••• •••• •••• ••••"
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry MM / YY</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CalendarToday className="text-gray-400" />
                              </div>
                              <input
                                id="expiry"
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                value={formData.payment.expiry}
                                onChange={(e) => handleChange('payment', 'expiry', e.target.value)}
                                placeholder="MM/YY"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="text-gray-400" />
                              </div>
                              <input
                                id="cvv"
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                value={formData.payment.cvv}
                                onChange={(e) => handleChange('payment', 'cvv', e.target.value)}
                                placeholder="•••"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center">
                          <input
                            id="saveCard"
                            type="checkbox"
                            className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded"
                            checked={formData.payment.saveCard}
                            onChange={(e) => handleChange('payment', 'saveCard', e.target.checked)}
                          />
                          <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">Save this card for next time</label>
                        </div>
                      </motion.div>
                    )}

                    {formData.payment.method === 'cod' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-50 p-4 rounded-lg"
                      >
                        <p className="text-sm text-gray-700">
                          You'll pay in cash when your order is delivered. Please have exact amount ready.
                        </p>
                      </motion.div>
                    )}
                  </motion.section>
                )}

                {activeStep === 3 && (
                  <motion.section
                    key="review"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle className="text-green-500" />
                      <h3 className="text-lg font-semibold text-gray-800">Review Your Order</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Contact Information</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-900">{formData.contact.name}</p>
                          <p className="text-gray-600">{formData.contact.email}</p>
                          <p className="text-gray-600">{formData.contact.phone}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Shipping Address</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-900">{formData.shipping.street}</p>
                          {formData.shipping.apartment && <p className="text-gray-900">{formData.shipping.apartment}</p>}
                          <p className="text-gray-600">{formData.shipping.city}, {formData.shipping.state} {formData.shipping.postalCode}</p>
                          <p className="text-gray-600">{formData.shipping.country}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Payment Method</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          {formData.payment.method === 'card' && (
                            <>
                              <p className="text-gray-900">Card ending in •••• {formData.payment.cardNumber.slice(-4)}</p>
                              <p className="text-gray-600">Expires {formData.payment.expiry}</p>
                            </>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Delivery Method</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-900">{formData.delivery.method === 'standard' ? 'Standard (3-5 days)' : 'Express (1-2 days)'}</p>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${activeStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <ArrowBack className="mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                  className={`inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${activeStep === steps.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  {activeStep === steps.length - 1 ? 'Place Order' : 'Continue'}
                </button>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 h-fit sticky top-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

              <div className="space-y-4">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.details}</p>
                    </div>
                    <p className="font-medium text-gray-900">${product.price.toFixed(2)}</p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">{shippingCost ? `$${shippingCost.toFixed(2)}` : 'Free'}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {activeStep === steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => alert('Order placed successfully!')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="mr-2" />
                    Confirm & Place Order
                  </button>
                </motion.div>
              )}

              <div className="flex justify-center gap-4 text-gray-400 mt-6">
                <motion.a whileHover={{ scale: 1.1, color: '#1877F2' }} href="#" className="hover:text-blue-600">
                  <Facebook fontSize="small" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, color: '#E1306C' }} href="#" className="hover:text-pink-600">
                  <Instagram fontSize="small" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, color: '#1DA1F2' }} href="#" className="hover:text-blue-400">
                  <Twitter fontSize="small" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, color: '#0077B5' }} href="#" className="hover:text-blue-700">
                  <LinkedIn fontSize="small" />
                </motion.a>
              </div>
            </motion.aside>

            
          </div>
        </div>
      </main>
    </>
  );
}