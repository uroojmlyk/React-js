import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to My very new new  new React App! 🚀
          </h1>
          <p className="text-gray-600 text-lg">
            Tailwind + React = 🔥
          </p>
        </header>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-3xl">👩‍💻</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Frontend Developer</h2>
              <p className="text-gray-600 mt-2">React | Tailwind | JavaScript</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">UI Designer</h2>
              <p className="text-gray-600 mt-2">Figma | Adobe XD | Prototyping</p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Full Stack Dev</h2>
              <p className="text-gray-600 mt-2">MERN Stack | APIs | Databases</p>
              <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                View Profile
              </button>
            </div>
          </div>

        </div>

        {/* Counter Section */}
        <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Interactive Counter</h2>
          <div className="flex justify-center items-center space-x-6">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl">
              -
            </button>
            <span className="text-3xl font-bold">0</span>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl">
              +
            </button>
          </div>
          <p className="text-center text-gray-500 mt-4">Click buttons to change counter</p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500">
          <p>Made with ❤️ using React & Tailwind CSS</p>
          <p className="text-sm mt-2">Next step: Add JavaScript functionality!</p>
        </footer>

      </div>
    </div>
  );
}

export default App; 