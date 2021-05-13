import React from "react";
//checkbox 的模组的设计
const Checkbox = ({ checked, onClick}) => (
  <input 
    type="checkbox"  
    onClick={onClick} 
    defaultChecked={checked} />
);

export default Checkbox;