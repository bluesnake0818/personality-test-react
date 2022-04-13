import React from 'react';
import styles from './BarChart.module.css'
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
    },

  },
};

const labels = ['Planning', 'Execution', 'PR', 'Patience'];

export const data = {
  labels,
  datasets: [
    {
      data: [90, 76, 48, 82],
      backgroundColor: [
        '#ADFF5B',
        '#63C7FF',
        '#FF702E',
        '#FFC83D',
      ],
    },
  ],
};

const BarChart = () => {
  return (
    <div className={styles.container}>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart;
