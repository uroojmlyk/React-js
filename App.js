import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-xl shadow-lg"></div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent">
                DesignHub
              </span>
            </div>
            
            <div className="hidden lg:flex space-x-10">
              <a href="#" className="text-gray-800 hover:text-cyan-600 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-transparent hover:border-cyan-500 pb-1">Home</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-transparent hover:border-blue-500 pb-1">Templates</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-transparent hover:border-purple-500 pb-1">Components</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-pink-600 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-transparent hover:border-pink-500 pb-1">Showcase</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-green-600 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-transparent hover:border-green-500 pb-1">Resources</span>
              </a>
            </div>
            
            <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
              🎨 Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000')] opacity-20 bg-cover bg-center"></div>
        
        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Create <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">Stunning</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-red-300 to-orange-400 bg-clip-text text-transparent">Websites</span> Faster
            </h1>
            
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Professional React components & Tailwind templates. Build beautiful interfaces in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3">
                <span>🚀 Start Building Now</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
              <button className="px-10 py-5 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/30 hover:border-white/50 transition-all">
                📁 View All Templates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured</span> Templates
          </h2>
          <p className="text-gray-600 text-center text-xl mb-16 max-w-3xl mx-auto">
            Hand-crafted templates with beautiful color schemes and responsive layouts
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Template 1 - E-commerce */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"></div>
              <div className="relative p-10 bg-white/95 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">E-commerce Pro</h3>
                <p className="text-gray-600 mb-8">Complete online store with cart, checkout, and product pages.</p>
                <div className="flex space-x-4 mb-8">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 rounded-full text-sm font-bold">React</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-bold">Tailwind</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold">Redux</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-xl transition">
                  Preview Template
                </button>
              </div>
            </div>

            {/* Template 2 - Portfolio */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>
              <div className="relative p-10 bg-white/95 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Creative Portfolio</h3>
                <p className="text-gray-600 mb-8">Showcase your work with stunning galleries and smooth animations.</p>
                <div className="flex space-x-4 mb-8">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-bold">React</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-full text-sm font-bold">Framer</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-bold">GSAP</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl transition">
                  Preview Template
                </button>
              </div>
            </div>

            {/* Template 3 - Dashboard */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600"></div>
              <div className="relative p-10 bg-white/95 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-8">Advanced dashboard with charts, graphs, and data visualization.</p>
                <div className="flex space-x-4 mb-8">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-full text-sm font-bold">React</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-sm font-bold">Recharts</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm font-bold">Context</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl hover:shadow-xl transition">
                  Preview Template
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-4">
            Beautiful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Color Palettes</span>
          </h2>
          <p className="text-gray-400 text-center text-xl mb-16 max-w-3xl mx-auto">
            Curated color schemes that work perfectly together
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Palette 1 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
              <div className="h-48 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600"></div>
              <div className="h-12 bg-gradient-to-r from-rose-400 to-pink-400"></div>
              <div className="h-12 bg-gradient-to-r from-pink-400 to-purple-400"></div>
              <div className="h-12 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">Berry Bliss</h3>
                <p className="text-gray-400 text-sm">Perfect for fashion & beauty brands</p>
              </div>
            </div>

            {/* Palette 2 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
              <div className="h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>
              <div className="h-12 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
              <div className="h-12 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
              <div className="h-12 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">Ocean Breeze</h3>
                <p className="text-gray-400 text-sm">Great for tech & corporate sites</p>
              </div>
            </div>

            {/* Palette 3 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
              <div className="h-48 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600"></div>
              <div className="h-12 bg-gradient-to-r from-emerald-400 to-green-400"></div>
              <div className="h-12 bg-gradient-to-r from-green-400 to-teal-400"></div>
              <div className="h-12 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">Forest Mist</h3>
                <p className="text-gray-400 text-sm">Ideal for eco & health brands</p>
              </div>
            </div>

            {/* Palette 4 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
              <div className="h-48 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600"></div>
              <div className="h-12 bg-gradient-to-r from-amber-400 to-orange-400"></div>
              <div className="h-12 bg-gradient-to-r from-orange-400 to-red-400"></div>
              <div className="h-12 bg-gradient-to-r from-red-400 to-rose-400"></div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">Sunset Glow</h3>
                <p className="text-gray-400 text-sm">Bold and energetic designs</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=2000')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container relative mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-3xl p-16 text-center text-white shadow-2xl">
            <h2 className="text-5xl font-black mb-8">
              Ready to <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">Elevate</span> Your Designs?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 opacity-90">
              Join 50,000+ designers and developers creating amazing interfaces
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
              <input 
                type="email" 
                placeholder="✨ Enter your email address" 
                className="px-8 py-5 rounded-2xl text-gray-900 text-xl flex-grow w-full shadow-xl"
              />
              <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
                Get Free Access Today
              </button>
            </div>
            
            <p className="text-gray-300 mt-8 text-lg">
              No credit card required • 100+ free templates • Premium support
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl shadow-xl"></div>
                <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  DesignHub
                </span>
              </div>
              <p className="text-gray-400 text-lg max-w-md">
                Building the future of web design with beautiful React components and Tailwind CSS templates.
              </p>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl flex items-center justify-center hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-pink-900 to-rose-800 rounded-2xl flex items-center justify-center hover:from-pink-700 hover:to-rose-600 transition-all shadow-lg">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-br from-cyan-900 to-teal-800 rounded-2xl flex items-center justify-center hover:from-cyan-700 hover:to-teal-600 transition-all shadow-lg">
                  <span className="text-2xl">📚</span>
                </a>
              </div>
            </div>

            {['Products', 'Company', 'Resources', 'Legal'].map((title, idx) => (
              <div key={idx}>
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {['Templates', 'Components', 'UI Kits', 'Plugins', 'Tools'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:pl-2 block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
          
          <div className="border-t border-gray-800 mt-20 pt-12 text-center">
            <p className="text-gray-500 text-lg">
              © 2024 DesignHub. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              Background images from Unsplash • Icons from Twemoji
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}