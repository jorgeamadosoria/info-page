import React from "react";
import "./LeftRailResume.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import EntryType from "../../../data/enums/EntryType";
import { getIcon, ResumeProps } from "../ResumeUtils";
import Language from "../../../data/Language";
import IconColor from "../../../data/enums/IconColor";
const LeftRailResume = ({ resume, relevance }: ResumeProps) => {
  const {
    name,
    positions,
    summary,
    showcase,
    contacts,
    languages,
    skills,
    entries,
  } = resume.prepareResume(relevance);
  const joinedPositions = positions
    .map((position) => position.value)
    .join(", ");

  return (
    <Container
      fluid
      className="mt-4 leftrail-rounded bg-secondary border border-secondary"
    >
      <Row>
        <Col xs={4} className="p-0 text-light">
          <h2 className="ml-4 mt-2">{name.value}</h2>
          <Card.Subtitle className="ml-4 mb-2">
            <i>{joinedPositions}</i>
          </Card.Subtitle>
          <div className="h3 pl-4 bg-dark text-truncate ">Personal Info</div>
          <ListGroup variant="flush">
            {contacts.map((contact, index) => (
              <ListGroup.Item
                className="ml-2 bg-secondary text-light border-0"
                key={index}
              >
                <p className="m-0 text-truncate">
                  <a
                    title={contact.name}
                    className="text-light"
                    target="blank"
                    href={contact.url ? contact.url : "#"}
                  >
                    {getIcon(contact.type, IconColor.WHITE)} &nbsp;&nbsp;&nbsp;
                    <span className="text-break">{contact.name}</span>
                  </a>
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="h3 pl-4 bg-dark text-truncate ">Languages</div>
          <ListGroup variant="flush">
            {languages.map((language, index) => (
              <ListGroup.Item
                className="ml-2 bg-secondary text-truncate text-light border-0"
                key={index}
              >
                <b>{language.code}</b>&nbsp;&nbsp;
                <i>{language.level}</i>
                <ProgressBar
                  className="mt-1"
                  now={Language.levelNumber(language.level) * 20}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="h3 pl-4 bg-dark text-truncate ">Skills</div>
          <ListGroup variant="flush">
            {skills.map((skill, index) => (
              <ListGroup.Item
                className="ml-2 text-truncate bg-secondary text-light border-0 "
                key={index}
              >
                <b>{skill.name}</b>
                &nbsp;<i>({skill.level})</i>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="h3 pl-4 bg-dark text-truncate ">Portfolio</div>
          <ListGroup variant="flush">
            {showcase.map((show, index) => (
              <ListGroup.Item
                className="ml-2 bg-secondary text-light border-0"
                key={index}
              >
                <a className="text-light" target="blank" href={show.url}>
                  <span>{getIcon(show.type, IconColor.WHITE)}</span>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span className="text-break">{show.name}</span>
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={8} className="pt-2 leftrail-rounded-right bg-light">
          {summary.value}
          <hr />
          <div className="h3 text-truncate ">Professional Timeline</div>
          <hr />
          {entries.map((entry, index) => {
            const refText =
              entry.type !== EntryType.CERTIFICATION
                ? entry.reference.value
                : null;

            return (
              <Row key={index} className="ml-3">
                <Col
                  xs={12}
                  className="pb-0 border border-dark border-bottom-0 border-top-0 border-right-0"
                >
                  <div className="leftrail-timeline-icon border p-2 border-dark">
                    {getIcon(entry.type)}
                  </div>

                  <p className="mt-2">
                    {new Date(entry.fromDate).toLocaleDateString()}
                    {entry.toDate &&
                      " -> ".concat(
                        new Date(entry.toDate).toLocaleDateString()
                      )}
                  </p>
                  <p className="pl-5">
                    {entry.name}&nbsp;@&nbsp;
                    {refText && (
                      <a
                        className="text-dark"
                        target="blank"
                        href={entry.reference.value}
                      >
                        {entry.entity}
                      </a>
                    )}
                    {!refText && (
                      <>
                        {entry.entity}
                        &nbsp;&nbsp;
                        <a
                          className="text-dark"
                          target="blank"
                          href={entry.reference.value}
                        >
                          Reference
                        </a>
                      </>
                    )}
                  </p>
                  <p className="pl-4">{entry.description.value}</p>
                </Col>
                <Col
                  className="pb-0 border border-dark border-bottom-0 border-top-0 border-right-0"
                  xs={2}
                ></Col>
                <Col xs={8}>
                  <hr />
                </Col>
                <Col xs={2}></Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default LeftRailResume;
