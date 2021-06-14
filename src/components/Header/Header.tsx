import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstdraft, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faFilePdf,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
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
            <NavDropdown.Item href="flat">
              <Link className="text-decoration-none text-dark" to="/flat">
                Flat
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="colorful">
              <Link className="text-decoration-none text-dark" to="/colorful">
                Colorful
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="leftrail">
              <Link className="text-decoration-none text-dark" to="/leftrail">
                Left Rail
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="compact">
              <Link className="text-decoration-none text-dark" to="/compact">
                Compact
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link target="blank" href="#pdf">
            <div className="nav-item">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;&nbsp;
              <Link className="text-decoration-none text-dark" to={format}>
                PDF
              </Link>
            </div>
          </Nav.Link>
          <Nav.Link target="blank" href="#github">
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;Repo
          </Nav.Link>
          <Nav.Link target="blank" href="https://portfolio-jasr.herokuapp.com/">
            <FontAwesomeIcon icon={faBriefcase} />
            &nbsp;&nbsp;Portfolio
          </Nav.Link>

          <Nav.Link href="#about">
            <Link className="text-decoration-none text-dark" to="/about">
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp;&nbsp;About
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
