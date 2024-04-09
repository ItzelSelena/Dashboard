import React from "react";
//import CustomerReview from "../CustomerReview/CustomerReview";
import Tag from "../Tag/Tag";
//import Updates from "../Updates/Updates";
import MaxMenu from "../MaxMenu/MaxMenu";
import SelectFromFilter from "../SelectFromFilter/SelectFromFilter";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="Container">
      
      <SelectFromFilter/> 
      <Tag/>
      <MaxMenu/>
      
    </div>
  );
}

export default RightSide;

