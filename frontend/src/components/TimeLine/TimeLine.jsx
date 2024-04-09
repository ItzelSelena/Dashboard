// En Timeline.jsx
import React, { useState } from "react";
import "./TimeLine.css";
import { Timeline } from "react-beautiful-horizontal-timeline";

function TimeLine() {
  const myList = [
    {
      date: "Enero 2024",
      s: " ",
      name: " ",
      t: " "
    },
    {
      date: "Febrero 2024",
      name: " ",
      s: " ",
      t: " "
    },
    {
      date: "Marzo 2024",
      name: " ",
      s: " ",
      t: " "
    },
    {
      name: "Abril 2024",
      date: " ",
      s: " ",
      t: " "
    },
    {
      date: "Mayo 2024",
      name: " ",
      s: " ",
      t: " "
    },
    {
      date: "Junio 2024",
      name: " ",
      s: " ",
      t: " "
    },
    {
      date: "Julio 2024",
      name: " ",
      s: " ",
      t: " "
    },
    {
        date: "Agosto 2024",
        name: " ",
        s: " ",
        t: " "
      },
    {
        date: "Septiembre 2024",
        name: " ",
        s: " ",
        t: " "
    },
    {
        date: "Octubre 2024",
        name: ".",
        s: " ",
        t: "."
    }, 
    {
        date: "Noviembre 2024",
        name: " ",
        s: " ",
        t: " "
    },
    {
        date: "Diciembre 2024",
        name: " ",
        s: " ",
        t: " "
      }
  ];

  const [labelWidth, setlabelWidth] = useState(140);
  const [amountMove, setamountMove] = useState(350);
  const [lineColor, setlineColor] = useState("#E8131C");
  const [darkMode, setdarkMode] = useState(false);
  const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
  const [showSlider, setshowSlider] = useState(true);
  const [arrowsSize, setarrowsSize] = useState(false);

  return (
    <div>
      <Timeline
        myList={myList}
        labelWidth={labelWidth}
        amountMove={amountMove}
        onClick={() => console.log("click")}
        lineColor={lineColor}
        darkMode={darkMode}
        eventTextAlignCenter={eventTextAlignCenter}
        // showSlider={showSlider}
        arrowsSize={arrowsSize}
      />
    </div>
  );
}

export default TimeLine;
