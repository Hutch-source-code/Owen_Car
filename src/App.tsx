import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Package } from 'lucide-react';
import { StatsCard } from './components/StatsCard';
import { SalesTable } from './components/SalesTable';
import { Charts } from './components/Charts';
import { SalesData } from './types';

function App() {
  const [salesData, setSalesData] = useState<SalesData[]>([
    { category: 'Premium Vehicle Feature', units: 2, price: 450, total: 900 },
    { category: 'Standard Vehicle Feature', units: 4, price: 325, total: 1300 },
    { category: 'Basic Vehicle Feature', units: 8, price: 225, total: 1800 },
    { category: 'Event Feature 1', units: 1, price: 550, total: 550 },
    { category: 'Event Feature 2', units: 1, price: 400, total: 400 },
    { category: 'Event Feature 3', units: 1, price: 700, total: 700 },
    { category: 'How-To Feature', units: 1, price: 550, total: 550 },
    { category: 'Advertisement Slot', units: 2, price: 400, total: 800 }
  ]);

  const totalRevenue = salesData.reduce((acc, curr) => acc + curr.total, 0);
  const totalUnits = salesData.reduce((acc, curr) => acc + curr.units, 0);
  const averagePrice = totalRevenue / totalUnits;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sales & P&L Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            icon={<DollarSign className="h-6 w-6 text-green-600" />}
            trend="+12.5%"
          />
          <StatsCard
            title="Total Units"
            value={totalUnits.toString()}
            icon={<Package className="h-6 w-6 text-blue-600" />}
            trend="+4.3%"
          />
          <StatsCard
            title="Average Price"
            value={`$${averagePrice.toFixed(2)}`}
            icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
            trend="+2.7%"
          />
          <StatsCard
            title="Active Customers"
            value="143"
            icon={<Users className="h-6 w-6 text-indigo-600" />}
            trend="+8.1%"
          />
        </div>

        {/* Sales Table */}
        <SalesTable
          salesData={salesData}
          totalUnits={totalUnits}
          averagePrice={averagePrice}
          totalRevenue={totalRevenue}
        />

        {/* Charts */}
        <Charts salesData={salesData} />
      </main>
    </div>
  );
}

export default App;