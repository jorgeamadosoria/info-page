import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstdraft, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faInfoCircle,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Résumé</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <NavDropdown
            title={
              <>
                <FontAwesomeIcon icon={faFirstdraft} />
                &nbsp;&nbsp;Styles
              </>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3" active>
              Flat
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">Colorful</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Left Rail</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Compact</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <>
                <FontAwesomeIcon icon={faSlidersH} />
                &nbsp;&nbsp;Detail
              </>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action-1" active>
              Full info
            </NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Standard</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Essentials</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pdf">
            <div className="nav-item">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;&nbsp;Download
            </div>
          </Nav.Link>
          <Nav.Link href="#github">
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;Repository
          </Nav.Link>
          <Nav.Link href="#about">
            <FontAwesomeIcon icon={faInfoCircle} />
            &nbsp;&nbsp;About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
