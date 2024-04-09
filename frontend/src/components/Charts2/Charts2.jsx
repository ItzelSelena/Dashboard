import React from "react";
import GroupedStackedBar from '../GroupedStackedBar/GroupedStackedBar';
import "./Charts2.css";

const Charts2 = () => {
  return (
    <div className="ChartsDash2">
      <div className="circle-custom-angle-container">
        <GroupedStackedBar/>
      </div>
    </div>
  );
};

export default Charts2;
