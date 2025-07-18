'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/hooks/use-theme';
import { LoginForm } from '@/components/auth/login-form';
import { ThemeSelector } from '@/components/ui/theme-selector';
import { ChevronRight, Menu } from 'lucide-react';

export default function LoginPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Mock login - in real app, validate credentials
    if (credentials.email && credentials.password) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Header */}
      <header 
        className="md:hidden p-4 flex items-center justify-between"
        style={{ background: theme.colors.primary }}
      >
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">FleetCard</span>
          <ChevronRight className="w-5 h-5 ml-1 text-white" />
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Background Image (hidden on mobile) */}
        <div 
          className="hidden md:flex md:w-2/3 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 35%, #f59e0b 100%)`,
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-orange-400"></div>
            <div 
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
              }}
            />
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome to</h1>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-white">FleetCard</span>
                <ChevronRight className="w-8 h-8 ml-2 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div 
          className="w-full md:w-1/3 flex items-center justify-center p-8"
          style={{ 
            background: theme.colors.background,
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23f3f4f6" stroke-width="0.5" opacity="0.3"/></svg>')`,
          }}
        >
          <div className="w-full max-w-md relative">
            {/* Theme Selector at top */}
            <div className="mb-6 flex justify-center">
              <ThemeSelector />
            </div>
            <LoginForm onLogin={handleLogin} />
            {/* Footer with white background, border, and rounded top corners */}
            <div 
              className="mt-8 p-4 text-center shadow-lg"
              style={{
                background: 'white',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
              }}
            >
              <div className="flex justify-center items-center space-x-2 text-sm">
                <a 
                  href="#" 
                  className="hover:underline text-gray-600"
                >
                  Contact Us
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="#" 
                  className="hover:underline text-gray-600"
                >
                  Terms and Conditions
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="#" 
                  className="hover:underline text-gray-600"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content Background */}
      <div 
        className="md:hidden absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.3)',
        }}
      />
    </div>
  );
}