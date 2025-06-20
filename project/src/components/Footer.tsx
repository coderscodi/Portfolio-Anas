import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
              Anas Arshad
            </h3>
            <p className="text-gray-400">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center">
              © 2025 Anas Arshad – Full Stack Developer & UI/UX Designer. Made with{' '}
              <Heart size={16} className="mx-2 text-red-500 fill-current" />
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;