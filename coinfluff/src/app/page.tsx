'use client'; // Marking as client component

import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './page.css'; // Importing the CSS

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Crypto {
  id: number;
  rank: number;
  name: string;
  price: number;
  marketCap: number;
  volume: number;
  change1h: number;
  change24h: number;
  change7d: number;
}

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

  useEffect(() => {
    // Simulating fetching random data
    const randomCryptoData: Crypto[] = [
      {
        id: 1,
        rank: 1,
        name: 'Bitcoin',
        price: 56000,
        marketCap: 1000000000,
        volume: 30000000,
        change1h: 0.5,
        change24h: 2.3,
        change7d: -1.4,
      },
      {
        id: 2,
        rank: 2,
        name: 'Ethereum',
        price: 4200,
        marketCap: 500000000,
        volume: 15000000,
        change1h: 0.7,
        change24h: 1.8,
        change7d: -0.5,
      },
      {
        id: 3,
        rank: 3,
        name: 'Binance Coin',
        price: 600,
        marketCap: 300000000,
        volume: 10000000,
        change1h: -0.2,
        change24h: 3.5,
        change7d: 5.2,
      },
      {
        id: 4,
        rank: 4,
        name: 'Cardano',
        price: 1.2,
        marketCap: 40000000,
        volume: 2000000,
        change1h: -0.1,
        change24h: 1.1,
        change7d: -3.2,
      },
      {
        id: 5,
        rank: 5,
        name: 'Solana',
        price: 150,
        marketCap: 70000000,
        volume: 5000000,
        change1h: 0.4,
        change24h: -1.2,
        change7d: 3.8,
      },
    ];
    setCryptoData(randomCryptoData);
  }, []);

  // Line chart data for price trends
  const lineChartData = {
    labels: cryptoData.map((crypto) => crypto.name),
    datasets: [
      {
        label: 'Price (USD)',
        data: cryptoData.map((crypto) => crypto.price),
        fill: false,
        borderColor: '#78B9BA',
        backgroundColor: '#78B9BA',
        tension: 0.1,
      },
    ],
  };

  // Bar chart data for market capitalization
  const barChartData = {
    labels: cryptoData.map((crypto) => crypto.name),
    datasets: [
      {
        label: 'Market Cap (USD)',
        data: cryptoData.map((crypto) => crypto.marketCap),
        backgroundColor: '#CE472F',
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Crypto Dashboard</h1>
      </header>

      <div className="charts">
        <div className="chart">
          <h2>Price Trends</h2>
          <Line data={lineChartData} />
        </div>
        <div className="chart">
          <h2>Market Capitalization</h2>
          <Bar data={barChartData} />
        </div>
      </div>

      <table className="crypto-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>Volume (USD)</th>
            <th>1h Change (%)</th>
            <th>24h Change (%)</th>
            <th>7d Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>${crypto.price.toLocaleString()}</td>
              <td>${crypto.marketCap.toLocaleString()}</td>
              <td>${crypto.volume.toLocaleString()}</td>
              <td>{crypto.change1h}%</td>
              <td>{crypto.change24h}%</td>
              <td>{crypto.change7d}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;