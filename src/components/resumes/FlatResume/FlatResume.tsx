import React from "react";
import "./FlatResume.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import EntryType from "../../../data/enums/EntryType";
import { getIcon, ResumeProps } from "../ResumeUtils";

const FlatResume = ({ resume, relevance }: ResumeProps) => {
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
    <Container fluid>
      <Row className="pt-2">
        <Col xs={12}>
          <h3>{name.value}</h3>
          <Card.Subtitle className="mb-2 text-muted">
            <i>{joinedPositions}</i>
          </Card.Subtitle>
          <hr />
        </Col>
      </Row>
      <Row className="pt-2">
        <Col className="pl-3 pr-1" xs={12} xl={4}>
          {summary.value}
        </Col>
        <Col xs={12} className="d-xl-none">
          <hr />
        </Col>
        <Col
          className="flat-left-border mt-1 mb-1"
          xs={12}
          sm={12}
          md={8}
          xl={5}
        >
          <Row className="pl-2 ">
            {contacts.map((contact, index) => (
              <Col xs={12} sm={6} className="p-1 text-truncate " key={index}>
                {contact.url && (
                  <a className="text-dark" target="blank" href={contact.url}>
                    {getIcon(contact.type)} &nbsp;
                    <span className="text-break">{contact.name}</span>
                  </a>
                )}
                {!contact.url && (
                  <>
                    {getIcon(contact.type)} &nbsp;
                    <span className="text-break">{contact.name}</span>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} className="d-md-none">
          <hr />
        </Col>
        <Col className="pl-3 pr-1 flat-left-border-md" xs={12} md={4} xl={3}>
          <ListGroup variant="flush">
            {languages.map((language, index) => (
              <ListGroup.Item
                className="p-0 text-truncate border-bottom-0 "
                key={index}
              >
                {language.code}&nbsp;&nbsp;
                <i>{language.level}</i>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <hr />
        </Col>
        {skills.map((skill, index) => (
          <Col
            className="text-truncate"
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={index}
          >
            <b>{skill.name}</b>
            &nbsp;<i>({skill.level})</i>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      {entries.map((entry, index) => {
        const refText =
          entry.type !== EntryType.CERTIFICATION ? entry.reference.value : null;

        return (
          <Row key={index} className="ml-3">
            <Col
              xs={12}
              className="pb-0 border border-dark border-bottom-0 border-top-0 border-right-0"
            >
              <div className="position-relative mx-auto flat-timeline-icon border p-1 pt-2 pb-2 border-dark">
                {getIcon(entry.type)}
              </div>

              <p className="mt-2">
                {new Date(entry.fromDate).toLocaleDateString()}
                {entry.toDate &&
                  " -> ".concat(new Date(entry.toDate).toLocaleDateString())}
              </p>
              <p className="pl-4 ml-3">
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
                      (Reference)
                    </a>
                  </>
                )}
              </p>
              <p className="pl-4 ml-3 ">{entry.description.value}</p>
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
      <Row className="pl-3 pr-1 ">
        <Col xs={12}>
          <hr />
        </Col>
        <Col xs={12} className="p-1 d-flex border-0">
          <Row>
            {showcase.map((show, index) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="p-1 border-0 flex-1"
                key={index}
              >
                <a target="blank" className="text-dark" href={show.url}>
                  <Card className="h-100">
                    <Card.Header>
                      <Card.Title className="m-0 p-0">
                        {getIcon(show.type)}&nbsp;
                        <span className="fs-4">{show.name}</span>
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>{show.description}</Card.Body>
                    <Card.Footer className="d-flex align-items-end flex-grow-0 flex-shrink-1">
                      <span className="small">{show.language}</span>
                    </Card.Footer>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FlatResume;
