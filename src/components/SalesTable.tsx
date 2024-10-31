import React from 'react';
import { SalesData } from '../types';

interface SalesTableProps {
  salesData: SalesData[];
  totalUnits: number;
  averagePrice: number;
  totalRevenue: number;
}

export function SalesTable({ salesData, totalUnits, averagePrice, totalRevenue }: SalesTableProps) {
  return (
    <div className="mt-8 bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units
                </th>
                <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {item.units}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    ${item.total}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  {totalUnits}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  ${averagePrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  ${totalRevenue}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}