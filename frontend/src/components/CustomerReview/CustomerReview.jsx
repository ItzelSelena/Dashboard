import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import BgColorExample from '../CardAll/CardAll';

const CircleCustomAngle = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [76, 67, 61, 90],
      chart: {
        height: 320,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 8,
            fontSize: '16px',
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
          },
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Juan', 'Marco', 'Luis', ' '],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    };

    if (!chartRef.current) {
      const chart = new ApexCharts(document.querySelector("#chartcircle"), options);
      chart.render();
      chartRef.current = chart;
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); 

  return (
    <div style={{ flexDirection: 'column', height: '100%' }}>
  <div style={{ borderRadius: '10px', overflow: 'hidden', border: '2px solid #3b3737', height: '100%', marginBottom: '10px' }}>
    <div id="chartcircle" style={{ backgroundColor: '#3b3737', flex: '1' }}></div>
  </div>
  <BgColorExample/>
</div>


  );
};

export default CircleCustomAngle;
