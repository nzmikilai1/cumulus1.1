'use client';

import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Edit
} from 'lucide-react';

interface CardData {
  id: string;
  status: 'active' | 'inactive' | 'pending';
  cardType: string;
  cardholder: string;
  rego: string;
  product: string;
  purchaseCategory: string;
  costCentre: string;
  expiry: string;
  expiryDate: string;
}

const mockData: CardData[] = [
  {
    id: '1',
    status: 'active',
    cardType: 'Personal',
    cardholder: 'Bob Robbins',
    rego: '',
    product: 'Fleetcard Classic',
    purchaseCategory: 'All Fuels & Oil',
    costCentre: 'Region 1',
    expiry: '05.09.28',
    expiryDate: '05.09.28',
  },
  {
    id: '2',
    status: 'active',
    cardType: 'Vehicle',
    cardholder: 'Aroha Ngatai',
    rego: 'D4R6TY',
    product: 'Fleetcard Classic',
    purchaseCategory: 'EV, Car Wash, Shop Items',
    costCentre: 'Region 1',
    expiry: '05.09.28',
    expiryDate: '05.09.28',
  },
  {
    id: '3',
    status: 'active',
    cardType: 'Personal',
    cardholder: 'Liam O\'Connor',
    rego: '',
    product: 'Fleetcard Classic',
    purchaseCategory: 'Petrol, Maintenance',
    costCentre: 'Region 1',
    expiry: '05.09.28',
    expiryDate: '05.09.28',
  },
  {
    id: '4',
    status: 'pending',
    cardType: 'Personal',
    cardholder: 'Mei Zhang',
    rego: '',
    product: 'Fleetcard Classic',
    purchaseCategory: 'Petrol, Car Wash, Maintenance, Shop Items',
    costCentre: 'Region 1',
    expiry: '05.09.28',
    expiryDate: '05.09.28',
  },
  {
    id: '5',
    status: 'inactive',
    cardType: 'Vehicle',
    cardholder: 'Santiago Rivera',
    rego: 'L3BNKW',
    product: 'Fleetcard Classic',
    purchaseCategory: 'LPG',
    costCentre: 'Region 2',
    expiry: '05.09.28',
    expiryDate: '05.09.28',
  },
];

export function CardTable() {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'inactive':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const handleSelectCard = (cardId: string) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const handleSelectAll = () => {
    setSelectedCards(prev => 
      prev.length === mockData.length ? [] : mockData.map(card => card.id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-2xl font-bold"
            style={{ color: theme.colors.primary }}
          >
            Manage Cards
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search Cards"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedCards.length === mockData.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Card Type</TableHead>
              <TableHead>Cardholder</TableHead>
              <TableHead>Rego</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Purchase Category</TableHead>
              <TableHead>Cost Centre</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((card) => (
              <TableRow key={card.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox
                    checked={selectedCards.includes(card.id)}
                    onCheckedChange={() => handleSelectCard(card.id)}
                  />
                </TableCell>
                <TableCell>
                  {getStatusIcon(card.status)}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{card.cardType}</Badge>
                </TableCell>
                <TableCell className="font-medium">{card.cardholder}</TableCell>
                <TableCell>{card.rego}</TableCell>
                <TableCell>{card.product}</TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate" title={card.purchaseCategory}>
                    {card.purchaseCategory}
                  </div>
                </TableCell>
                <TableCell>{card.costCentre}</TableCell>
                <TableCell>{card.expiry}</TableCell>
                <TableCell>{card.expiryDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}