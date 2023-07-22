import "./Training.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleTraining from "../SingleTraining/SingleTraining";
import { Row } from "react-bootstrap";
import TrainingCalculation from "../TrainingCalculation/TrainingCalculation";
import Header from "../Header/Header";

const Training = () => {
  const [trainings, setTrainings] = useState([]);
  const [addJustTraining, setAddJustTraining] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTrainings(data));
  }, []);

  const handelAddToList = (training) => {
    const newAddJustTraining = [...addJustTraining, training];
    setAddJustTraining(newAddJustTraining);
  };
  return (
    <>
      <div className="trainings-container position-relative">
        <div className="training-content-container">
          <Header/>
          <Row xs={1} md={3}>
            {trainings.map((training) => (
              <SingleTraining
                key={training.id}
                training={training}
                handelAddToList={handelAddToList}
              />
            ))}
          </Row>
        </div>
        <div className="training-calculation-container position-sticky top-0">
          <TrainingCalculation addJustTraining={addJustTraining} />
        </div>
      </div>
    </>
  );
};

export default Training;
