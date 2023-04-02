//import "./styles.css";
import { useState } from "react";
import { color, motion } from "framer-motion";

export default function Input(props) {
  const {
    type = "text",
    label = "Label",
    disabled = false,
    onChangeInput
  } = props;
  const [focused, setFocused] = useState(false);
  const [filledIn, setFilledIn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const checkFocusAndFill = focused || filledIn;
  return (
    <div>
      <motion.label
        style={lableStyle}
        initial={{ y: 22 }}
        animate={{
          y: checkFocusAndFill ? 8 : 22,
          scale: checkFocusAndFill ? 0.75 : 1,
          color: focused ? "#CE00AC" : "black"
        }}
      >
        {label}
      </motion.label>
      <input
        type={type}
        style={{
          ...inputStyle,
          ...(disabled && inputStyle[":disabled"]),
          ...(focused
            ? {
                boxShadow: "inset 0 -4px 0 #CE00AC",
                outline: "none"
              }
            : {}),
          ...(hovered
            ? {
                backgroundColor: "#E5E4E2"
              }
            : {})
        }}
        onChange={(e) => {
          onChangeInput && onChangeInput(e.target.value);
          e.target.value !== "" ? setFilledIn(true) : setFilledIn(false);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={disabled}
      />
    </div>
  );
}

const lableStyle = {
  position: "absolute",
  left: 30,
  margin: "11px 0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: "400",
  fontSize: "14px",
  color: "#dd"
};

const inputStyle = {
  width: "100%",
  padding: "22px 20px",
  margin: "18px 0",
  display: "inline-block",
  border: "0px solid #ccc",
  borderRadius: "5px 5px 0px 0px",
  boxSizing: "border-box",
  backgroundColor: "#e9ecef",
  fontFamily: "Roboto, sans-serif",
  fontWeight: "400",
  fontSize: "20px",
  boxShadow: "inset 0 -4px 0 #000",
  color: "#000",
  opacity: 1,
  cursor: "text",
  ":hover": {
    borderColor: "#E5E4E2"
    //boxShadow: "0 2px 0 #aaa"
  },
  ":disabled": {
    backgroundColor: "#f7f7f7",
    borderColor: "#ddd",
    color: "#bbb",
    opacity: 0.6,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  ":focus": {
    boxShadow: "inset 0 -4px 0 #000",
    outline: "none"
  }
};
