import { useState } from "react";
import logo from "./assets/cravingslogo.png";
import bgImage from "./assets/food.jpg";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-[#C4470A] text-white shadow-lg">
        <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo Home Button */}
          <a href="#" className="cursor-pointer">
            <img src={logo} alt="Cravings Logo" className="h-12 w-auto" />
          </a>

          {/* Right Side Buttons */}
          <div className="flex gap-8 text-xl">
            <button
              onClick={() => setShowLogin(true)}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Login
            </button>

            <button
              onClick={() => setShowRegister(true)}
              className="cursor-pointer hover:text-gray-200 transition"
            >
              Register
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p className="text-xl mb-6">
            Order from thousands of restaurants and get it delivered to your
            doorstep.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowRegister(true)}
              className="bg-[#C4470A] px-6 py-3 rounded-lg cursor-pointer hover:bg-orange-700 transition"
            >
              Sign Up
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
              Order Now
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-[600px] max-w-full p-4 rounded-lg text-black outline-none"
            />
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-5">Login</h2>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border p-3 mb-4 rounded"
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border p-3 mb-4 rounded"
            />

            <button className="w-full bg-cyan-500 text-white py-3 rounded cursor-pointer hover:bg-cyan-600 transition">
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full mt-3 bg-red-500 text-white py-3 rounded cursor-pointer hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-5">Register</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 mb-4 rounded"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border p-3 mb-4 rounded"
            />

            <input
              type="password"
              placeholder="Create Password"
              className="w-full border p-3 mb-4 rounded"
            />

            <button className="w-full bg-green-500 text-white py-3 rounded cursor-pointer hover:bg-green-600 transition">
              Register
            </button>

            <button
              onClick={() => setShowRegister(false)}
              className="w-full mt-3 bg-red-500 text-white py-3 rounded cursor-pointer hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
