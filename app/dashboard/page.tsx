'use client';

import { Header } from '@/components/layout/header';
import { CardTable } from '@/components/dashboard/card-table';
import { useTheme } from '@/hooks/use-theme';

export default function DashboardPage() {
  const { theme } = useTheme();

  const user = {
    name: 'Mary Smith',
  };

  return (
    <div 
      className="min-h-screen"
      style={{ background: theme.colors.background }}
    >
      <Header user={user} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CardTable />
      </main>
    </div>
  );
}