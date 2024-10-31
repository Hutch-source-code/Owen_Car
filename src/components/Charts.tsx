import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { SalesData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartsProps {
  salesData: SalesData[];
}

export function Charts({ salesData }: ChartsProps) {
  const barChartData = {
    labels: salesData.map(item => item.category),
    datasets: [
      {
        label: 'Revenue',
        data: salesData.map(item => item.total),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(231, 233, 237, 0.6)',
          'rgba(96, 125, 139, 0.6)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(255, 99, 132)',
          'rgb(255, 206, 86)',
          'rgb(231, 233, 237)',
          'rgb(96, 125, 139)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [6500, 5900, 8000, 8100, 9600, 7000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Category</h2>
        <div className="h-64">
          <Bar data={barChartData} options={options} />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h2>
        <div className="h-64">
          <Line data={lineChartData} options={options} />
        </div>
      </div>
    </div>
  );
}