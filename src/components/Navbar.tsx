import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const cart = useStore((state) => state.cart);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-gray-900">
          <img src="./src/IMG/B-logo.png" alt="logo" className="w-13 h-12 absolute left-0 sm:left-3 md:left-5 lg:left-6 xl:left-18 transition-all duration-300" />
          </button>

          <div className="flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-900 hover:text-gray-900 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('shop')} className="text-gray-500 hover:text-gray-900">
              Shop
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-500 hover:text-gray-900">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-500 hover:text-gray-900">
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <button onClick={() => navigate('/checkout')} className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};