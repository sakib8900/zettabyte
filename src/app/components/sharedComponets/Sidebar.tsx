'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function SidebarTop() {
  const pathname = usePathname();
  const menuItems = [
    { name: "Dashboard", href: "/" },
    { name: "Posts", href: "/posts" },
    { name: "Users", href: "/users" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-gray-900/95 shadow-lg' : 'bg-gray-900 shadow-md'
    }`}>
      <div className="flex justify-between items-center py-3 px-4 md:px-6 lg:px-10">
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-white">ZettaDashboard</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-green-500 bg-gray-800"
                  : "text-white hover:text-green-500 hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Mobile/Medium */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white rounded hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Medium Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-2' : 'max-h-0'
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block px-4 py-2 text-sm font-medium rounded transition-colors ${
              isActive(item.href)
                ? "text-green-500 bg-gray-800"
                : "text-white hover:text-green-500 hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
