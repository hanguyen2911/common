import { useState, useEffect, useLayoutEffect } from "react";

//----useEffect
// cập nhật state
// cập nhật Dom(mutated)
//render UI
//cleanup nếu deps thay đổi
//gọi useEffect callback

//-----useLayoutEffect:
//cập nhật state
//cập nhật DOM(mutated)
//cleanup nếu deps thay đổi(sync)
//useLayoutEffect callback(sync)
//render UI

function UseLayoutEffect() {
  const [count, setCount] = useState<number>(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleChangeCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleChangeCount}>Increase</button>
    </div>
  );
}

export default UseLayoutEffect;
