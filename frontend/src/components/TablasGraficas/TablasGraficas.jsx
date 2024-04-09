import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './TablasGraficas.css';

const PolarAreaChart = () => {
  // Definir el objeto chartStyle con las propiedades de estilo

  useEffect(() => {
    const options = {
      series: [90, 100, 69, 56, 86, 73, 80,],
      labels: ['Nómina', 'Personales', 'BT', 'TDC ', 'GA NTB', 'GA ETB', 'Seguros'], // Nombres personalizados para las serie
      chart: {
        type: 'polarArea',
        width: 630, 
        height: 400,


      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();

    return () => {
      chart.destroy(); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="chart-container3">
      {/* Aplica el estilo al div que contiene la gráfica */}
      <div id="chart3"></div> 
    </div>
  );
};

export default PolarAreaChart;
