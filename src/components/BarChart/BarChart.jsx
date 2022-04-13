import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Arsenal',
    },
    legend: {
      display: false,
    }
  },
};

const labels = ['Planning', 'Execution', 'PR', 'Patience'];

export const data = {
  labels,
  datasets: [
    {
      data: [90, 76, 48, 82],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
      ],
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
}

export default BarChart;
