import React from "react";
import DynamicUpdatingLineChart from '../DynamicChart/DynamicChart';
import CircleCustomAngle from '../CustomerReview/CustomerReview';
import PolarAreaChart from '../TablasGraficas/TablasGraficas';
import GroupedStackedBar from '../GroupedStackedBar/GroupedStackedBar';
import "./Charts.css";

const Charts = () => {
  return (
    <div className="ChartsDash">      
      <PolarAreaChart/>
      <DynamicUpdatingLineChart/>
      <CircleCustomAngle/>
      <GroupedStackedBar/>
    </div>
  );
};

export default Charts;
