'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const { theme } = useTheme();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-[20px] overflow-hidden">
      <CardHeader 
        className="text-left py-6 px-8"
        style={{ 
          background: theme.colors.primaryGradient,
          color: 'white',
        }}
      >
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
      </CardHeader>
      {/* Red gap between header and content */}
      <div style={{ background: '#bf3c2a', height: '8px' }} />
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="px-8 py-2 text-white font-medium"
              style={{ 
                background: theme.colors.secondary,
                borderColor: theme.colors.secondary,
              }}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="mt-6 text-right">
          <a 
            href="#" 
            className="text-sm hover:underline"
            style={{ color: theme.colors.secondary }}
          >
            Forgotten Password
          </a>
        </div>
      </CardContent>
    </Card>
  );
}