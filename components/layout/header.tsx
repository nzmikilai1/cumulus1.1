'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MegaMenu } from './mega-menu';

interface HeaderProps {
  user?: {
    name: string;
  };
}

export function Header({ user }: HeaderProps) {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setShowMegaMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className="relative z-50"
      style={{ 
        background: theme.colors.surface,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span 
                className="text-xl font-bold"
                style={{ color: theme.colors.text }}
              >
                FleetCard
              </span>
              <ChevronRight 
                className="w-5 h-5 ml-1"
                style={{ color: theme.colors.primary }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div 
                className="relative"
                ref={megaMenuRef}
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  style={{ 
                    color: theme.colors.text,
                  }}
                >
                  Manage your People, Cards & Transactions
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                {showMegaMenu && <MegaMenu />}
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                style={{ color: theme.colors.textSecondary }}
              />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64"
              />
            </div>
            {user && (
              <span 
                className="text-sm font-medium"
                style={{ color: theme.colors.text }}
              >
                {user.name}
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute w-full top-16 left-0 z-40"
          style={{ 
            background: theme.colors.surface,
            borderBottom: `1px solid ${theme.colors.border}`,
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="p-4">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full"
              />
            </div>
            <MegaMenu isMobile />
          </div>
        </div>
      )}
    </header>
  );
}