import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container font-changa mx-auto flex justify-between items-center py-4 px-4 md:px-0 border-b border-gray-200 bg-white relative">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png" // Replace with the path to your logo
          alt="Logo"
          className="w-20 h-16 object-cover" // Larger logo size
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
        <NavLink
          to="/dashboard"
          className="hover:text-primary px-4 py-2" // Adjusted padding
          activeClassName="text-primary border-b-2 border-primary"
        >
          الرئيسية
        </NavLink>
        <span />
        <NavLink
          to="/plans"
          className="hover:text-primary px-4 py-2"
          activeClassName="text-primary border-b-2 border-primary"
        >
          خدمات الدكتور
        </NavLink>
        <NavLink
          to="/videos"
          className="hover:text-primary px-4 py-2"
          activeClassName="text-primary border-b-2 border-primary"
        >
          فيديوهات
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-primary px-4 py-2"
          activeClassName="text-primary border-b-2 border-primary"
        >
          معلومات طبية
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-primary px-4 py-2"
          activeClassName="text-primary border-b-2 border-primary"
        >
          تواصل معنا
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-800" />
          ) : (
            <FaBars className="text-2xl text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute z-50 top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden transition-all duration-300 ease-in-out">
          <NavLink
            to="/dashboard"
            className="hover:text-primary px-4 py-2"
            activeClassName="text-primary border-b-2 border-primary"
            onClick={toggleMenu}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/plans"
            className="hover:text-primary px-4 py-2"
            activeClassName="text-primary border-b-2 border-primary"
            onClick={toggleMenu}
          >
            خدمات الدكتور
          </NavLink>
          <NavLink
            to="/videos"
            className="hover:text-primary px-4 py-2"
            activeClassName="text-primary border-b-2 border-primary"
            onClick={toggleMenu}
          >
            فيديوهات
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-primary px-4 py-2"
            activeClassName="text-primary border-b-2 border-primary"
            onClick={toggleMenu}
          >
            معلومات طبية
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-primary px-4 py-2"
            activeClassName="text-primary border-b-2 border-primary"
            onClick={toggleMenu}
          >
            تواصل معنا
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
