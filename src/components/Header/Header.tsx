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
import { STYLES } from "../../data/Styles";

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
            {STYLES.map((style) => (
              <NavDropdown.Item href={style.name.toLowerCase()}>
                <Link
                  className="text-decoration-none text-dark"
                  to={style.htmlUrl}
                >
                  {style.name}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          {format && (
            <Nav.Item className="mt-2 text-secondary">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;&nbsp;
              <Link
                target="_blank"
                className="text-decoration-none text-dark"
                to={format}
              >
                PDF
              </Link>
            </Nav.Item>
          )}
          <Nav.Link
            target="_blank"
            href="https://github.com/jorgeamadosoria/jorgeamadosoria.github.io"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;Repo
          </Nav.Link>
          <Nav.Link
            target="_blank"
            href="https://jorgeamadosoria.info/portfolio/"
          >
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
