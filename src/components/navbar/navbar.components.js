import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { Link, Route, Switch } from "react-router-dom";

function AllNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            React Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/detail"
              style={{ textDecoration: "none", color: "black" }}
            >
              Detail
            </Nav.Link>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Nav.Link
                  as={Link}
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cart
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AllNavBar;
