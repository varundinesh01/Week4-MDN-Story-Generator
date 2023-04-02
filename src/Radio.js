import "./styles.css";
import { useState } from "react";
import { color, motion } from "framer-motion";

export default function Radio(props) {
  const {
    groupName = "group",
    value = "Value",
    labelPosition = "right",
    labelPadding = "20px 40px 0px 40px",
    onChangeSelected
  } = props;
  const labelStyle = {
    fontSize: "24px",
    padding: labelPadding
  };
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      {labelPosition === "left" && <label style={labelStyle}>{value}</label>}
      <input
        type={"radio"}
        name={groupName}
        value={value}
        onChange={() => {
          onChangeSelected(value);
        }}
        style={{
          cursor: "pointer",
          width: "20px",
          height: "20px",
          display: "inline-flex",
          alignItems: "center",
          accentColor: "#CE00AC"
        }}
      />
      {labelPosition === "right" && <label style={labelStyle}>{value}</label>}
    </div>
  );
}
