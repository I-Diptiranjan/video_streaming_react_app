import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = ({ views = [] }) => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: views,
        borderColor: 'rgba(107,70,193,0.3)',
        backgroundColor: '#6b46c1',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export const DoughnutChart = ({ users = [] }) => {
  const data = {
    labels: ['Subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: users,
        borderColor: ['#6b46c1', 'red'],
        backgroundColor: ['#6b46c1', 'red'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentmonth = new Date().getMonth();
  const remain = 11 - currentmonth;
  for (let i = currentmonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i == 0) {
      break;
    }
  }
  for (let i = 11; i > remain; i--) {
    if (i == currentmonth) {
      break;
    }
    const ele = months[i];
    labels.unshift(ele);
  }

  return labels;
}
