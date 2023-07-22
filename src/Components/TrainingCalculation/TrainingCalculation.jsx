import React, { useState } from "react";
import "./TrainingCalculation.css";
const TrainingCalculation = ({ addJustTraining }) => {
  const [breakTime, setBreakTime] = useState(0);
  let totalTime = 0;
  for (const singleItem of addJustTraining) {
    totalTime = totalTime + singleItem.time;
  }
  const handelBreakTimeBtn = (e) => {
    const value = e.target.innerText;
    setBreakTime(value);
  };
  return (
    <div className="p-4">
      <h3>Add Break Time</h3>
      <div className=" d-flex justify-content-around align-items-center">
        <span
          onClick={handelBreakTimeBtn}
          className=" bg-light p-2 rounded fw-bold"
        >
          10
        </span>
        <span
          onClick={handelBreakTimeBtn}
          className=" bg-light p-2 rounded fw-bold"
        >
          20
        </span>
        <span
          onClick={handelBreakTimeBtn}
          className=" bg-light p-2 rounded fw-bold"
        >
          30
        </span>
        <span
          onClick={handelBreakTimeBtn}
          className=" bg-light p-2 rounded fw-bold"
        >
          40
        </span>
        <span
          onClick={handelBreakTimeBtn}
          className=" bg-light p-2 rounded fw-bold"
        >
          50
        </span>
      </div>
      <h2>Exercise Details</h2>
      <h5>Exercise Time:{totalTime}s</h5>
      <h5>Break Time:{breakTime}s</h5>
    </div>
  );
};

export default TrainingCalculation;
