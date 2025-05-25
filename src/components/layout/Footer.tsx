import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold">
                Native<span className="text-primary-500">Web</span>
              </span>
            </Link>
            <p className="text-secondary-200 mb-4">
              Crafting beautiful, purpose-driven websites for businesses that want to make an impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-200 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-200 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-200 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-200 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-200 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-200 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-200 hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-200 hover:text-primary-500 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-200 hover:text-primary-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-200 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-start space-x-3 text-secondary-200 mb-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>hello@nativeweb.design</span>
              </p>
              <p className="text-secondary-200 mb-3">
                123 Design Street<br />
                Creative District<br />
                San Francisco, CA 94103
              </p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-secondary-200 mb-4">
              Get the latest trends and insights in web design delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary-900 border-secondary-800 text-white placeholder:text-secondary-400"
              />
              <Button size="icon" aria-label="Subscribe">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-secondary-800 text-center text-secondary-400 text-sm">
          <p>© {currentYear} Native Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;