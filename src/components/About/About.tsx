import React, { useState, useEffect } from "react";
import "./About.css";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";
import { Container, Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import SkillType from "../../data/enums/SkillType";
import EntryType from "../../data/enums/EntryType";
import Relevance from "../../data/enums/Relevance";
import ShowCaseType from "../../data/enums/ShowCaseType";
import SocialType from "../../data/enums/SocialType";
import LanguageLevel from "../../data/enums/LanguageLevel";

import { STYLES } from "../../data/Styles";
type AboutProps = {
  resume: any;
};

export const About = ({ resume }: AboutProps) => {
  const [templateState, setTemplateState] = useState({ template: null });
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/template.json")
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

  const techs = [
    {
      name: "React",
      url: "https://plone.org/events/sprints/plone-react-sprint-bonn-2018/@@download/image/1200px-React-icon.svg.png",
    },
    {
      name: "React-Pdf",
      url: "https://react-pdf.org/images/logo.png",
    },
    {
      name: "React-Bootstrap",
      url: "https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800",
    },
    {
      name: "Bootstrap",
      url: "https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png",
    },
    {
      name: "Font Awesome",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO17GkRov_uk0Y6ePJ1mOEI1Qqt6eZr2wUWXdO8QoPrpiM6f5DpOFh9pcGQw8k2AohjU&usqp=CAU",
    },
  ];

  const enums = [
    { name: "Skill", value: Object.values(SkillType).join(", ") },
    { name: "Entry", value: Object.values(EntryType).join(", ") },
    { name: "Relevance", value: Object.values(Relevance).join(", ") },
    { name: "Showcase", value: Object.values(ShowCaseType).join(", ") },
    { name: "Social", value: Object.values(SocialType).join(", ") },
    { name: "Language", value: Object.values(LanguageLevel).join(", ") },
  ];

  return (
    <Container fluid>
      <br />
      <Tabs defaultActiveKey="info" className="mb-3">
        <Tab eventKey="info" tabClassName="text-dark" title="Info">
          <Row>
            <Col xs={12} lg={7} xl={8}>
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
                <a href="https://jorgeamadosoria.info/portfolio/">
                  portfolio website
                </a>
                &nbsp; is also included.
              </p>
            </Col>
            <Col xs={12} lg={5} xl={4}>
              <h5>Technologies</h5>
              <div className="d-flex flex-wrap">
                {techs.map((tech, index) => (
                  <>
                    <img
                      className="about-logo-tech"
                      alt={tech.name}
                      src={tech.url}
                    />
                    &nbsp;&nbsp;
                  </>
                ))}
              </div>
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
            {STYLES.map((style) => (
              <Col sm={12} md={6} lg={4} xl={3} className="p-1 border-0 flex-1">
                <Card className="mx-auto h-100">
                  <Card.Body className="p-0">
                    <Card.Header>{style.name}</Card.Header>
                    <Card.Text className="p-3">{style.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-right">
                    <Link className="text-dark" to={style.htmlUrl}>
                      HTML
                    </Link>
                    &nbsp;&nbsp;
                    <Link className="text-dark" to={style.pdfUrl}>
                      PDF
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
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
                  {enums.map((e) => (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.value}</td>
                    </tr>
                  ))}
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
