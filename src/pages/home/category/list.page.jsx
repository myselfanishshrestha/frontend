import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CategoryList = () => {
    return (<>
        <Container className="my-5">
            <Row className="bg-light p-3">
                <Col>
                    <h1>Category List</h1>
                </Col>
            </Row>

            <Row className="my-5">
                <Col sm={6} md={4} lg={3} xl={2}>
                    <Card>
                        <Card.Img variant="top" src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/15/Pictures/_71810e1c-0ee7-11eb-8f7e-1b294b66658a.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <NavLink to="/category/smart-phones">
                                    Smart Phones
                                </NavLink>
                            </Card.Title>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} xl={2}>
                    <Card>
                        <Card.Img variant="top" src="https://www.dqindia.com/wp-content/uploads/2016/10/electronics.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <NavLink to="/category/electronics">
                                    Electronics
                                </NavLink>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}

export default CategoryList;