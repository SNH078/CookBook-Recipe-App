import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 text-gray-800 shadow-md p-6 rounded-xl mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* App Info */}
        <div>
          <h3 className="text-2xl font-bold caveat">CookBook</h3>
          <p className="text-sm mt-1">Smart Search. Tasty Results.</p>
          <p className="text-xs mt-4 italic">Built with ❤️ using React</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/favorites" className="hover:underline">Favorites</Link></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl mb-2">
            <a
              href="https://www.youtube.com/@YourChannelName"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-yadav-sy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-xs">team@cookbook.com</p>
        </div>
      </div>

     {/* Footer Bottom */}
<hr className="my-4 border-gray-300" />
<div className="max-w-6xl mx-auto px-4 pb-3 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-2 text-center md:text-left">
  
  {/* Copyright */}
  <p>&copy; {year} CookBook. All rights reserved.</p>

  {/* Developer Info */}
  <p>
    Developed by <a href="https://github.com/SNH078" target="_blank" rel="noopener noreferrer" className="hover:underline">Sneha Y.</a>
  </p>

  {/* Back to Top */}
  <a href="#" className="text-xl hover:text-black">
    <FaArrowUp />
  </a>
</div>

    </footer>
  );
};

export default Footer;
