import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./action";
import { initState, reducer } from "./reducer";
function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef<any>();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        ref={inputRef}
        className="border-2"
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      ></input>

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item: any, index: number) => (
          <li key={index}>
            {item}
            <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
