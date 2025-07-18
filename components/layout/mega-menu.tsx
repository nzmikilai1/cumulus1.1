'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { 
  CreditCard, 
  Edit, 
  Building, 
  Receipt, 
  Eye, 
  DollarSign, 
  MapPin, 
  Users, 
  Settings, 
  User 
} from 'lucide-react';

interface MegaMenuProps {
  isMobile?: boolean;
}

export function MegaMenu({ isMobile = false }: MegaMenuProps) {
  const { theme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuSections = [
    {
      title: 'Cards',
      items: [
        {
          id: 'order-cards',
          icon: CreditCard,
          title: 'Order Cards',
          description: 'Select the card type that suits your needs.',
          details: 'Choose a Vehicle Card to keep it with the vehicle, or select a Personal Card that stays with you—and can optionally be linked to a vehicle.',
        },
        {
          id: 'edit-cards',
          icon: Edit,
          title: 'Edit Cards',
          description: 'Manage what each card can purchase, how much it can spend, and how it\'s grouped.',
        },
        {
          id: 'manage-cost-centres',
          icon: Building,
          title: 'Manage Cost Centres',
          description: 'Use Cost Centre groups to organise cards in a way that suits your business, with control over spending, budgets, and reporting.',
        },
      ],
    },
    {
      title: 'Billing',
      items: [
        {
          id: 'view-invoices',
          icon: Receipt,
          title: 'View Invoices',
          description: 'Access monthly invoices with charge breakdowns, filters for easy sorting, and PDF downloads.',
        },
        {
          id: 'view-transactions',
          icon: Eye,
          title: 'View Transactions',
          description: 'Search, filter, and export transactions to track spending and monitor fuel usage.',
        },
        {
          id: 'manage-payments',
          icon: DollarSign,
          title: 'Manage payments',
          description: 'Pay invoices securely with one-off or automatic card payments, and view your full payment history.',
        },
        {
          id: 'update-billing',
          icon: MapPin,
          title: 'Update Billing Address',
          description: 'Keep your billing information up to date.',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          id: 'fleetcard-connect',
          icon: Users,
          title: 'Fleetcard Connect Users',
          description: 'Manage user access, contact details, and your own profile settings.',
        },
        {
          id: 'account-contacts',
          icon: Settings,
          title: 'Account Contacts',
          description: 'Add or edit account contacts and keep your organisation\'s details current.',
        },
        {
          id: 'personal-profile',
          icon: User,
          title: 'Your Personal Profile',
          description: 'Manage your profile, update contact details, and reset your password.',
        },
      ],
    },
  ];

  const containerStyle = isMobile 
    ? {
        background: theme.colors.surface,
        color: theme.colors.text,
      }
    : {
        position: 'absolute' as const,
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1200px',
        maxWidth: '90vw',
        background: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        overflow: 'hidden',
      };

  return (
    <div style={containerStyle}>
      <div className={`${isMobile ? 'p-0' : 'p-0'} grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} ${isMobile ? 'gap-0' : 'gap-0'}`}>
        {menuSections.map((section) => (
          <div 
            key={section.title}
            className={`${isMobile ? '' : 'border-r border-dotted border-gray-300 last:border-r-0'}`}
          >
            <h3 
              className={`text-lg font-bold mb-0 ${isMobile ? 'text-base' : ''} p-4`}
              style={{ 
                background: '#fd620c',
                color: 'white'
              }}
            >
              {section.title}
            </h3>
            {/* Gap between header and menu items with #bf3c2a background */}
            {!isMobile && (
              <div style={{ background: '#bf3c2a', height: '8px' }} />
            )}
            <div 
              className="space-y-0 p-4"
              style={{ background: '#f8f8f8' }}
            >
              {section.items.map((item) => {
                const Icon = item.icon;
                const isHovered = hoveredItem === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`p-4 cursor-pointer transition-all duration-200 border-b border-dotted border-gray-300 last:border-b-0 ${
                      isHovered ? 'bg-white text-gray-900' : ''
                    }`}
                    style={{
                      backgroundColor: isHovered ? 'white' : 'transparent',
                      color: '#333333',
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-start space-x-3">
                      <Icon 
                        className="w-5 h-5 mt-0.5 flex-shrink-0" 
                        style={{ 
                          color: '#fd620c'
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs opacity-90 leading-relaxed">
                          {item.description}
                        </p>
                        {item.details && (
                          <p className="text-xs opacity-75 mt-2 leading-relaxed">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}