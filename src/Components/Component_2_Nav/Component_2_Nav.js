import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Component_2_Nav() {
  return (
    <>
      <section>
        <h2 className="text-center">Top Navigation - Option 2</h2>
        <Navbar bg="primary" expand="lg">
          {/* <Container fluid> */}
          <Container>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="my-2 my-lg-0 d-flex"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="ms-2">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="ms-2">
                  Link1
                </Nav.Link>
                <NavDropdown
                  title="Action"
                  id="navbarScrollingDropdown"
                  className="ms-2"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" className="ms-2" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>{" "}
      </section>
      <hr />
    </>
  );
}

export default Component_2_Nav;
