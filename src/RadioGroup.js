import { useState } from "react";
import Radio from "./Radio";

export default function RadioGroup(props) {
  const {
    values = ["Ketchup", "Mustard"],
    groupName = "group",
    defaultCheckedIndex = 0,
    onChangeSelected
  } = props;

  return (
    <div>
      {values.map((value, i) => (
        <Radio
          key={i}
          onChangeSelected={() => {
            onChangeSelected(value);
          }}
          value={value}
          groupName={groupName}
          defaultChecked={defaultCheckedIndex === i}
        />
      ))}
    </div>
  );
}
