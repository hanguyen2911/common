import { useState, useEffect, useRef } from "react";

//lưu các giá trị qua một tham chiếu bên ngoài function component

function UseRef() {
  const [count, setCount] = useState<number>(60);
  let countId = useRef<any>();
  const prevId = useRef<any>();
  
  useEffect(() => {
    prevId.current = count;
  }, [count]);

  const handleStart = () => {
    countId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countId.current);
  };
  console.log("count", count, prevId.current);

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
