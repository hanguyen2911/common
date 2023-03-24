import React, { useState } from "react";

const name = [
  { id: 1, name: "Ha" },
  { id: 2, name: "Diem" },
];
const Radio = () => {
  const [checked, setChecked] = useState<number>();

  return (
    <div style={{ padding: "20px" }}>
      {name.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={checked === item.id}
            onChange={() => setChecked(item.id)}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default Radio;
