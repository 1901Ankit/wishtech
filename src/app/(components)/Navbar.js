
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import wish from '../../../public/assets/image/wish.png';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = ({ activePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const serviceIndex = links.findIndex((link) => link.url === activePath);
    setActiveDropdown(serviceIndex);
  }, [activePath]);

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    {
      name: 'Service',
      url: '/service/seo-optimisation',
      icon: <FaChevronDown className="ml-1" />,
      subLinks: [
        { name: 'Seo Optimization', url: '/service/seo-optimisation' },
        { name: 'App Development', url: '/service/app-development' },
        { name: 'Software Development', url: '/service/software-development' },
        { name: 'Block Chain Development', url: '/service/block-chain-development', },
        { name: 'Data Analysis', url: '/service/data-analysis' },
        { name: 'Cyber Security', url: '/service/cyber-security' },
        { name: 'UI & UX Designing', url: '/service/ui-ux-design' },
      ],
    },
    { name: 'Website Calculator', url: '/Websitecalculator' },
    { name: 'Contact', url: '/contact' },
  ];

  const renderLinks = (isMobile = false) =>
    links.map((link, index) => (
      <li key={index} className="relative group py-3 list-none">
        {link.subLinks ? (
          <div ref={dropdownRef} className="relative">
            <div className="flex items-center justify-between px-3">
              <Link
                href={link.url}
                className="text-sm font-semibold text-gray-700 transition duration-300 hover:text-black"
              >
                {link.name}
              </Link>
              <FaChevronDown
                className="ml-2 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              />
            </div>
            {activeDropdown === index && (
              <ul
                className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg z-10 transition-all duration-300 ease-in-out"
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex} className="py-2 px-4 hover:bg-gray-200">
                    <Link href={subLink.url} className="text-sm text-gray-700">
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <Link
            href={link.url}
            className="flex items-center justify-between px-3 text-sm font-semibold text-gray-700 transition duration-300 hover:text-black"
          >
            {link.name}
            {link.icon && link.icon}
          </Link>
        )}
      </li>
    ));

  return (
    <nav className="bg-white shadow-lg sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center py-1">
          <div>
            <Link href="/" className="">
              <Image src={wish} alt="Description of image" className="w-48" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {renderLinks()}
            <Link
              href="/login"
              className="px-6 py-3 ml-6 rounded-lg text-sm font-semibold text-white"
              style={{
                backgroundColor: '#0079AD',
              }}
            >
              Sign up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {renderLinks(true)}
            <li className="py-2 list-none">
              <Link
                href="/contact"
                className="px-6 py-2 ml-6 rounded border-2 border-gray-600 text-sm font-semibold text-black transition duration-200 hover:text-white hover:bg-gradient-to-r from-purple-600 to-purple-800"
                style={{
                  backgroundColor: '#0079AD',
                }}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
