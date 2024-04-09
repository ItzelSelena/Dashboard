import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './DynamicChart.css';

const DynamicUpdatingLineChart = () => {
  useEffect(() => {
    var lastDate = 0;
    var data1 = [];
    var data2 = [];
    var TICKINTERVAL = 86400000;
    let XAXISRANGE = 777600000;
  
    function getDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
        data1.push({
          x, y
        });
        lastDate = baseval;
        baseval += TICKINTERVAL;
        i++;
      }
    }

    function getDayWiseTimeSeries2(baseval, count, yrange) {
      var i = 0;
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
        data2.push({
          x, y
        });
        lastDate = baseval;
        baseval += TICKINTERVAL;
        i++;
      }
    }
    
    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90
    });

    getDayWiseTimeSeries2(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90
    });
    
    function getNewSeries(baseval, yrange) {
      var newDate = baseval + TICKINTERVAL;
      lastDate = newDate;
    
      for(var i = 0; i< data1.length - 10; i++) {
        data1[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        data1[i].y = 0;
      }
    
      data1.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      });

      for(var i = 0; i< data2.length - 10; i++) {
        data2[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        data2[i].y = 0;
      }
    
      data2.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      });
    }
    
    function resetData(){
      data1 = data1.slice(data1.length - 10, data1.length);
      data2 = data2.slice(data2.length - 10, data2.length);
    }
    
    const options = {
      series: [
        {
          name: 'Series 1',
          color: '#61bfd1',
          data: data1.slice()
        },
        {
          name: 'Series 2',
          color: '#d6ecf1',
          data: data2.slice()
        }
      ],
      chart: {
        id: 'realtime',
        height: 400,
        width: 600, // Ajusta el ancho de la gráfica
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#61bfd1', '#d6ecf1'] // Degradado de verde a azul a morado
      },
      title: {
        text: 'Objetivo VS Alcance',
        align: 'center',
        style: {
          color: '#ffffff',
          fontFamily: 'Arial'
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: true
      },
    };
  
    const chart = new ApexCharts(document.querySelector("#chartline"), options);
    chart.render();
  
    const interval = window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      });
    
      chart.updateSeries([
        {
          name: 'Series 1',
          data: data1
        },
        {
          name: 'Series 2',
          data: data2
        }
      ]);
    }, 1000);
  
    return () => {
      clearInterval(interval);
      chart.destroy(); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures useEffect runs only once
  
  return (
    <div className="chart-container"> {/* Aquí se envuelve la gráfica en un contenedor */}
      <div id="chartline"></div>
    </div>
  );
};

export default DynamicUpdatingLineChart;