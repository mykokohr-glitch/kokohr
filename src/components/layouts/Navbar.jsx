import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const menu = [
    "Home",
    "Features",
    "Solutions",
    "Pricing",
    "About",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">

          <div className="flex h-20 items-center justify-between px-8">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 text-xl font-black text-white shadow-lg">
                K
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  KokoHR
                </h1>

                <p className="text-xs tracking-widest text-cyan-300">
                  HUMAN RESOURCE PLATFORM
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-10">

              {menu.map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="relative text-gray-200 transition duration-300 hover:text-cyan-400 group"
                >
                  {item}

                  <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

                </Link>
              ))}

            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md transition hover:scale-105"
              >
                {darkMode ? (
                  <Sun className="text-yellow-300" size={20} />
                ) : (
                  <Moon className="text-white" size={20} />
                )}
              </button>

              <button className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:border-cyan-400 hover:text-cyan-400">
                Login
              </button>

              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                Get Started
              </button>

            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-6 mt-3 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col p-6 gap-6">

            {menu.map((item) => (
              <Link
                key={item}
                to="/"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-white hover:text-cyan-400"
              >
                {item}
              </Link>
            ))}

            <button className="rounded-xl border border-white/20 py-3 text-white">
              Login
            </button>

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 py-3 font-semibold text-white">
              Get Started
            </button>

          </div>
        </motion.div>

      )}
    </motion.header>
  );
}