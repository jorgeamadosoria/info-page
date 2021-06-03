import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstdraft, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export type HeaderProps = {
  format: string;
};

const Header = ({ format }: HeaderProps) => {
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
            <NavDropdown.Item href="#action3">
              <Link to="/flat">Flat</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              <Link to="/colorful">Colorful</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              <Link to="/leftrail">Left Rail</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              <Link to="/compact">Compact</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pdf">
            <div className="nav-item">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;&nbsp;<Link to={format}>Download</Link>
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
