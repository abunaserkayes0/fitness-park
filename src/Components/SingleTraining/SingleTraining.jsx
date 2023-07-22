import { Button, Card, Col } from "react-bootstrap";
import "./SingleTraining.css";
const SingleTraining = ({ training, handelAddToList }) => {
  const { id, name, image, description, age, time } = training;
  return (
    <div className="my-3">
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Title>For Age:{age}</Card.Title>
            <Card.Title>Time Required:{time}s</Card.Title>
          </Card.Body>
          <Button
            onClick={()=>handelAddToList(training)}
            className="text-white fw-bold"
            variant="info"
          >
            Add To List
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default SingleTraining;
