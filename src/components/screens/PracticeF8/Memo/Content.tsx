import { memo } from "react";

interface IPropsContent {
  onIncrease: Function;
}
function Content(props: IPropsContent) {
  console.log("hello");
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => props.onIncrease}>start</button>
    </>
  );
}
export default memo(Content);
