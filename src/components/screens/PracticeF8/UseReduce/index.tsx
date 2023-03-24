//cung cấp 1 sự lựa chọn để sử dụng state cho function
//tương tự state
//phù hợp hơn th state phức tạp vs: object có object con, nhiều state

//useState
//1. Init state
//2. Action: Up, Down

//useRducer
//1. Init state
//2. Action: Up, Down
//3. Reducer
//4. Dispatch
//5
import { useReducer } from "react";

//init
const initState = 0;
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer
const reducer = (state: any, action: any) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function UseReduce() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Down</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Up</button>
    </div>
  );
}

export default UseReduce;
