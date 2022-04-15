import { UserTypeData } from '../../pages/Result/UserTypeData';
import React from 'react';
import styles from './BarChart.module.css'
import { useState, useEffect } from 'react'
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


const BarChart = ( { user, personality } ) => {
  const [userTypes, setUserTypes] = useState(UserTypeData)
  const [userTypeObj, setUserTypeObj] = useState(
    {} 
  )
  
  useEffect(() => {
    if (personality.name)
      {setUserTypeObj(userTypes.find(userTypeObj => userTypeObj.id === personality.name))}
    },[personality.name])


  const data =
  {
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
  }
  
  
  return (
    <div className={styles.container}>
      <Bar 
        options={options} 
        data=
          {data} 
      />
    </div>
  )
}

export default BarChart;
