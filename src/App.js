import React, { useState } from "react";

function Checklist() {
  const [checkedItems, setCheckedItems] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={checkedItems.includes(option)}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        </div>
      ))}
      <p>Selected options: {checkedItems.join(", ")}</p>
    </div>
  );
}

export default Checklist;
