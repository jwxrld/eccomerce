import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FavoriteButton } from '../components/FavoriteButton.tsx';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);


export const Home: React.FC = () => {
  const navigate = useNavigate();
  const addToCart = useStore((state) => state.addToCart);

  const handleBuyNow = (product: any) => {
    addToCart(product, 'M', 'Default'); // Add default size and color
    navigate('/checkout');
  };



  return (
    <div className="min-h-screen bg-white">
  {/* Hero Section */}
  <div id="hero" className="w-full max-w-7xl px-6 pt-16"></div>
  <div className="max-w-7xl mx-auto px-6 pt-16">
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="max-w-9xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold font-custom leading-tight">
          Faith Driven Apparel<br />
          <span className="bg-gradient-to-r from-[#ff79d0] to-[#1e56ff] bg-clip-text text-transparent">
            made for the Bold Believers.
          </span><br />
          Welcome 👋🏽 
        </h1>
        <img src="./src/IMG/arrow.png" alt="Arrow" className="inline-block ml-2 w-12 h-25" />
          <button 
            onClick={() => gsap.to(window, { scrollTo: "#contact", duration: 1 })}
            className="bg-gradient-to-r from-[#fffdf7] to-[#00000018] text-black px-9 py-1 rounded-full text-sm -mt-3 font-ppmori">
            Contact Us
          </button>
      </div>
 
          <div className="flex items-center gap-3  mt-6 md:mt-0">
            <div className="flex -space-x-2">
              <img src="./src/IMG/mar.png" alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="./src/IMG/repent.jpeg" alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="./src/IMG/mar2.png" alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
            </div>
            <span className="text-sm font-medium font-ppmori">+ Join The Community</span>

          </div>
        </div>

{/* Featured Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  {[
    {
      id: 'featured-1',
      name: 'BBE Spring T-Shirt',
      description: 'Get up to 50% off discounts',
      price: 24.99,
      image: 'potrait.png',
      sizes: ['S', 'M', 'L'],
      colors: ['#ebebeb', '#000000', '#0066ff']
    },
    {
      id: 'featured-2',
      name: 'Woman in hat',
      description: 'Superior look with unmatched comfort',
      price: 19.99,
      image: 'img-2.png',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Default']
    },
    {
      id: 'featured-3',
      name: 'Socks',
      description: 'Warm socks great deals',
      price: 19.99,
      image: 'img-1.png',
      sizes: ['S', 'M', 'L'],
      colors: ['Default']
    }
  ].map((product, index) => (
    <div key={index} className="relative rounded-3xl overflow-hidden bg-blue-50 group">
      <FavoriteButton product={product} size={''} color={''} />
      <img src={`./src/IMG/${product.image}`} alt={product.name} className="w-full h-64 md:h-80 object-cover" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-sm font-medium mb-3 font-ppmori">{product.description}</p>
        <button 
          onClick={() => handleBuyNow(product)}
          className="bg-gradient-to-r from-[#84ff41] to-[#e3eaff] text-black px-6 py-3 rounded-full text-sm font-medium"
        >
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>




      </div>

      {/* Shop Section */}
      <div id="shop" className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-lg md:text-1xl font-bold font-custom leading-tight">MORE MERCH <br /> IS ON THE WAY.</h2>
          <div className="flex items-center gap-4 md:gap-8 mt-6 md:mt-0">
            <button className="text-gray-900 font-medium">Shop Now</button>
            <div className="flex gap-3">
              <button className="p-3 rounded-full border hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full border hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-15">
          <div className="group">
            <div className="rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src="./src/IMG/soon.png" alt="Spring" className="w-full h-full object-cover" />
            </div>
            <p className="font-medium mb-1">Spring</p>
            <p className="text-sm text-gray-500">$0</p>
          </div>
          <div className="group">
            <div className="rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src="./src/IMG/soon.png" alt="Summer" className="w-full h-full object-cover" />
            </div>
            <p className="font-medium mb-1">Summer </p>
            <p className="text-sm text-gray-500">$0</p>
          </div>
          <div className="group">
            <div className="rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src="./src/IMG/soon.png" alt="Fall" className="w-full h-full object-cover" />
            </div>
            <p className="font-medium mb-1">Fall</p>
            <p className="text-sm text-gray-500">$0</p>
          </div>
          <div className="group">
            <div className="rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src="./src/IMG/soon.png" alt="Winter" className="w-full h-full object-cover" />
            </div>
            <p className="font-medium mb-1">Winter</p>
            <p className="text-sm text-gray-500">$0</p>
          </div>
        </div>

      {/* About Section */}

  
      <div id="about" className="max-w-7xl mx-auto px-4 py-24"></div>
      <h3 className="font-custom text-5xl md:text-7xl font-bold mb-4 md:mb-7 text-#000000">
          ABOUT<br />
          
        </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img src="./src/IMG/img-0.png" alt="Model" className="w-full h-[818px] object-cover" />
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12">
              
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-3xl font-custom font-bold mb-6">BURNING BUSH ENCOUNTER.</h3>
              <div className="space-y-4">
                <div className="border rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Clothing & Impact</span>
                    <button className="text-2xl">+</button>
                  </div>
                </div>
                <div className="border rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Community </span>
                    <button className="text-2xl">+</button>
                  </div>
                </div>
                <div className="border rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Good News & Excellence</span>
                    <button className="text-2xl">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-custom font-bold mb-2">Safe Payments</h3>
                <p className="text-gray-600 text-sm">We use trusted payment methods only.</p>
              </div>
              <img src="./src/IMG/stripe.png" alt="Payment" className="w-24 h-24 rounded-xl object-cover" />
            </div>
            <div className="bg-gradient-to-r from-[#ff79d0a8] to-[#1e56ff] rounded-3xl p-8 relative overflow-hidden">

              <div className="relative z-10">
                <h3 className="text-2xl font-custom font-bold text-white mb-4">Music<br />Player</h3>
                <p className="text-white/80 mb-6">Coming Soon</p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium">Shop Now</button>
              </div>
              <img src="./src/IMG/knob.png" alt="" className="absolute right-0 bottom-0 w-40 h40 object-cover" />
            </div>
          </div>
        </div>
      </div>

  
 {/* Contact Section */}
<div id="contact" className="max-w-7xl mx-auto px-4 py-24  text-#000000">

<div className="text-center mb-12">
  <h2 className="text-7xl font-custom font-bold mb-4">Get in Touch</h2>
  <p className="text-#8024ff-400">We'd love to hear from you. Our team is always here to help.</p>
</div>

<div className="max-w-2xl mx-auto">
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-#a2a2a2">Name</label>
      <input type="text" id="name" className="mt-1 block w-full rounded-md border border-#b7b7b7-600 text-#000000 shadow-sm focus:border-lime-400 focus:ring-lime-400" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-#c1c1c1">Email</label>
      <input type="email" id="email" className="mt-1 block w-full rounded-md border border-#b8b8b8-600 text-#181818 shadow-sm focus:border-lime-400 focus:ring-lime-400" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-#c9c9c9">Message</label>
      <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border border-#b2b2b2-600 text-#0c0c0c shadow-sm focus:border-lime-400 focus:ring-lime-400"></textarea>
    </div>
    <button type="submit" className="w-full bg-gradient-to-r from-[#dcff9c] to-[#a3ff33] text-black px-6 py-3 rounded-full font-medium hover:from-[#b8ff7e] hover:to-[#94ff42]">
      Send Message
    </button>
  </form>
</div>

</div>


      

 {/* Footer */}
 <footer className="bg-gradient-to-r from-[#25292a] via-[#20143f] to-[#23121e] text-white py-10 mt-16">

  <div className="max-w-5xl mx-auto px-6 text-center">
    <h3 className="text-5xl font-custom font-bold">BBE</h3>
    <p className="text-#ffffff-400 mt-4 max-w-md font-custom text-2xl mx-auto">
      Thank you for stopping by & supporting us. More designs coming soon. ✌🏽  
    </p>

    {/* Navigation Links */}
    <div className="font-ppmori flex justify-center space-x-6 mt-6 text-gray-400 text-sm">
      <a href="#" className="hover:text-white">FAQ</a>
      <a href="#" className="hover:text-white">Shipping</a>
      <a href="#" className="hover:text-white">Returns</a>
      <a href="#" className="hover:text-white">Contact</a>
    </div>

    {/* Social Links */}
    <div className="font-ppmori flex justify-center space-x-6 mt-6 text-gray-400">
      <a href="#" className="hover:text-white">Instagram</a>
      <a href="#" className="hover:text-white">Facebook</a>
    </div>

    <p className="text-xs text-gray-500 mt-6">© 2024 BBE. All Rights Reserved.</p>
       {/* Credit */}
       <p className="text-xs text-gray-500 mt-2">
      Site made by 
      <a href="https://frameyourwork.life" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white ml-1">
        Jordan@FrameYourWork.Life
      </a>
    </p>
 
  </div>
</footer>

    </div>
  );
};