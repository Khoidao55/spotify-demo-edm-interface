import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, ...otherProps }) => (
  <a {...otherProps}>{children}</a>
);

export default CustomButton;
