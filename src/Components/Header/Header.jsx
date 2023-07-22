import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width={250}
              height={80}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
