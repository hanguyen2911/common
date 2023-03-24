import React, { useState, useEffect } from "react";

// useEffect(()=>{callback}) callBack đc gọi mỗi khi component re-render
// useEffect(()=>{callBack},[]) callback đc gọi mỗi khi mount
// useEffect (()=>{callBack},[deps]) callback đc gọi mỗi khi deps thay đổi 

const Practice = () => {
  const [countDown, setCountDown] = useState(10);
  useEffect(() => {
    const interVal = setInterval(() => {
      setCountDown((prev) => prev - 1);
      console.log("countDown");
    }, 1000);
    //cleanup function : luôn được gọi trước khi component unmounted
    //cleanup function: luôn đc gọi trước khi callback đc gọi
    return () => clearInterval(interVal);
  }, []);

  return <>{countDown}</>;
};
export default Practice;

// useEffect(() => {
//     setTimeout(() => {
//       setCountDown(countDown - 1);
//       console.log("countDown");
//     }, 1000);
//     //cleanup function
//   }, [countDown]);
