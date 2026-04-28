import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import {
  Menu,
  X,
  Smartphone,
  Tablet,
  Monitor,
  Home,
  Puzzle,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/ios', label: 'iOS', icon: Smartphone },
    { path: '/android', label: 'Android', icon: Tablet },
    { path: '/pc', label: 'PC', icon: Monitor },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl neu-button-primary flex items-center justify-center">
              <Puzzle className="w-5 h-5 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-gray-800 tracking-tight">
              Vortix<span className="text-gradient">World</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                    ${isActive(link.path)
                      ? 'neu-pressed text-blue-600'
                      : 'neu-button text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden neu-button w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mobile-menu-glass border-t border-white/50 animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                    ${isActive(link.path)
                      ? 'neu-pressed text-blue-600'
                      : 'neu-raised text-gray-600'
                    }
                  `}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive(link.path) ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
