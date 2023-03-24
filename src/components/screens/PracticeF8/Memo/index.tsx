import { useCallback, useState } from "react";
import Content from "./Content";

//Memo : Higher Order Component (HOC)
// tránh bị render k cần thiết

function Memo() {
  const [count, setCount] = useState<number>(0);
  //callback giúp tránh tạo ra những hàm mới k cần thiết
  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, []);
  console.log("count");
  return (
    <div style={{ padding: 20 }}>
      <Content onIncrease={handleIncrease} />
      <div>{count}</div>
    </div>
  );
}

export default Memo;
