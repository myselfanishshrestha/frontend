import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Logo } from "../../../components/logo.component";

const NotFound = () => {
  return (
    <>

      <Container className="my-5 bg-light py-5">
        <Row>
          <Col>
            <p className="text-danger text-center">
              Oops!!! The resource you are looking for does not exists!!!
            </p>
            <p className=" text-center ">
              <a className="btn btn-link" href="/">
                Go to Home page
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      
    </>
  );
};

export default NotFound;
