import React from "react";
import { Nav } from "react-bootstrap";

function Component_4_Nav() {
  return (
    <>
      <section>
        <h2 className="text-center">Folders Content</h2>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
            </ul>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </section>
      {/* <hr /> */}
    </>
  );
}

export default Component_4_Nav;
