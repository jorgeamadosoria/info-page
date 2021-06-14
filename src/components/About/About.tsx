import React, { useState, useEffect } from "react";
import "./About.css";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";
import { Container, Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";
import SkillType from "../../data/enums/SkillType";
import EntryType from "../../data/enums/EntryType";
import Relevance from "../../data/enums/Relevance";
import ShowCaseType from "../../data/enums/ShowCaseType";
import SocialType from "../../data/enums/SocialType";
import LanguageLevel from "../../data/enums/LanguageLevel";

type AboutProps = {
  resume: any;
};

export const About = ({ resume }: AboutProps) => {
  const [templateState, setTemplateState] = useState({ template: null });
  useEffect(() => {
    fetch("/template.json")
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((json) => {
        setTemplateState({
          template: json,
        });
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
  }, []);

  return (
    <Container fluid>
      <br />
      <Tabs defaultActiveKey="info" className="mb-3">
        <Tab eventKey="info" tabClassName="text-dark" title="Info">
          <Row>
            <Col xs={12}>
              <p>
                A small React app to showcase my CV. It allows the selection of
                different visual styles for HTML and PDF (detailed below). The
                technology used is very simple, just React and Bootstrap for the
                UI, and a json file to provide data, nothing else. The
                application was intended as a POC to learn React, and as a live
                CV generator for when one is needed. There is nothing
                particularly challenging or special about the technology used,
                it's just an useful website to have as a professional online
                identity. A link to my{" "}
                <a href="https://portfolio-jasr.herokuapp.com/">
                  portfolio website
                </a>
                &nbsp; is also included.
              </p>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <h5>Technologies</h5>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={6} className="d-flex">
              <img
                className="mx-auto about-logo-tech"
                alt="React"
                src="https://plone.org/events/sprints/plone-react-sprint-bonn-2018/@@download/image/1200px-React-icon.svg.png"
              />
              &nbsp;&nbsp;
              <img
                className="mx-auto about-logo-tech"
                alt="React-Pdf"
                src="https://react-pdf.org/images/logo.png"
              />
              &nbsp;&nbsp;
              <img
                className="mx-auto about-logo-tech"
                alt="React-Bootstrap"
                src="https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800"
              />
              &nbsp;&nbsp;
              <img
                className="mx-auto about-logo-tech"
                alt="Bootstrap"
                src="https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png"
              />
              &nbsp;&nbsp;
              <img
                className="mx-auto about-logo-tech"
                alt="Font Awesome"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO17GkRov_uk0Y6ePJ1mOEI1Qqt6eZr2wUWXdO8QoPrpiM6f5DpOFh9pcGQw8k2AohjU&usqp=CAU"
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="Styles" tabClassName="text-dark" title="Styles">
          <Row>
            <Col>
              The styles control the UI rendering for the Resumé data, both in
              HTML and PDF views. This can be extended in the future. While all
              styles are valid, not all of them present the same information (it
              depends on the data relevance for each style) and not all of them
              have the same intent. Read carefully and take a look at them
              before choosing the one that suits you the most
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3} className="p-1 border-0 flex-1">
              <Card className="mx-auto h-100">
                <Card.Body className="p-0">
                  <Card.Header>Flat</Card.Header>
                  <Card.Text className="p-3">
                    Standard black and white CV with full information. Your
                    standard go to CV to show to prospective employers.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                  <a target="blank" className="text-dark" href="flat">
                    HTML
                  </a>
                  &nbsp;&nbsp;
                  <a target="blank" className="text-dark" href="flat-pdf">
                    PDF
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3} className="p-1 border-0 flex-1">
              <Card className="mx-auto h-100">
                <Card.Body className="p-0">
                  <Card.Header>Colorful</Card.Header>
                  <Card.Text className="p-3">
                    A flight of fancy, this format is a copy of the Flat format
                    but with added colors and some other decorations. It's there
                    to give a different view on how a CV can look like, but I
                    wouldn't recommend it for serious use.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                  <a target="blank" className="text-dark" href="colorful">
                    HTML
                  </a>
                  &nbsp;&nbsp;
                  <a target="blank" className="text-dark" href="colorful-pdf">
                    PDF
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3} className="p-1 border-0 flex-1">
              <Card className="mx-auto h-100">
                <Card.Body className="p-0">
                  <Card.Header>Left Rail</Card.Header>
                  <Card.Text className="p-2">
                    Left rail, shades of grey. A more elegant presentation with
                    relevant information, but not all of it. A good choice to
                    show your work.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                  <a target="blank" className="text-dark" href="leftrail">
                    HTML
                  </a>
                  &nbsp;&nbsp;
                  <a target="blank" className="text-dark" href="leftrail-pdf">
                    PDF
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3} className="p-1 border-0 flex-1">
              <Card className="mx-auto h-100">
                <Card.Body className="p-0">
                  <Card.Header>Compact</Card.Header>
                  <Card.Text className="p-2">
                    The most succinct of the formats, this is a way to show just
                    the most essential information in the smallest space
                    possible. For the people that likes one page summaries and
                    elevator pitches.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                  <a target="blank" className="text-dark" href="compact">
                    HTML
                  </a>
                  &nbsp;&nbsp;
                  <a target="blank" className="text-dark" href="compact-pdf">
                    PDF
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="contact" tabClassName="text-dark" title="Enums">
          <Row>
            <Col xs={12}>
              <h5>Enumerations</h5>
              <p>
                Valid enumeration values for the corresponding JSON properties
                on the resume.
              </p>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Enum</th>
                    <th>Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Skill</td>
                    <td>{Object.values(SkillType).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Entry</td>
                    <td>{Object.values(EntryType).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Relevance</td>
                    <td>{Object.values(Relevance).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Showcase</td>
                    <td>{Object.values(ShowCaseType).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Social</td>
                    <td>{Object.values(SocialType).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{Object.values(LanguageLevel).join(", ")}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="template" tabClassName="text-dark" title="Template">
          <Row>
            <Col xs={12}>
              <p>
                JSON resumé template, with comments on each value. The relevance
                attribute applies to all attributes in the "datum", the object
                in which it exists. It can be consumed raw&nbsp;
                <a href="template.json">here</a>.
              </p>
              <JSONPretty data={templateState.template}></JSONPretty>;
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="resume" tabClassName="text-dark" title="Resumé">
          <Row>
            <Col xs={12}>
              <p>
                Current JSON resumé, the basis for all the styles and PDFs
                generated by this site. It can be consumed raw&nbsp;
                <a href="data.json">here</a>.
              </p>
              <JSONPretty data={resume}></JSONPretty>;
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};
