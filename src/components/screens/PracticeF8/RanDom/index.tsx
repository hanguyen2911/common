import React, { useState } from "react";

const name = ["Hà", "Diễm"];
const RanDom = () => {
  const [random, setRandom] = useState<string>();
  const handleRanDom = () => {
    const index = Math.floor(Math.random() * name.length);
    setRandom(name[index]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>{random || "Lets click on Random button"}</div>
      <button onClick={handleRanDom}>Ran Dom</button>
    </div>
  );
};
export default RanDom;
