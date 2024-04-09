import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import ReactDOM from 'react-dom';


const GroupedStackedBar = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000]
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000]
        },
        {
          name: 'Q2 Budget',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000]
        },
        {
          name: 'Q2 Actual',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000]
        }
      ],
      chart: {
        type: 'bar',
         // Fondo blanco
        height: 405,
        width: 1400,
        borderRadius: 10, // Bordes redondeados
        stacked: true,
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      dataLabels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        categories: [
          'Online advertising',
          'Sales Training',
          'Print advertising',
          'Catalogs',
          'Meetings'
        ],
        labels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          }
        }
      },
      fill: {
        opacity: 1,
      },
      colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#chartStacked"), options);
    chart.render();

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {      
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ borderRadius: '10px', background: '#3b3737'}}>
  <div id="chartStacked"></div>
  </div>
  );
};

export default GroupedStackedBar;
