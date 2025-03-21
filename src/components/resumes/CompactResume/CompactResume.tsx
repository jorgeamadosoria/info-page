import React from "react";
import "./CompactResume.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import EntryType from "../../../data/enums/EntryType";
import { getIcon, ResumeProps } from "../ResumeUtils";
import Entry from "../../../data/Entry";
import Contact from "../../../data/Contact";

const CompactResume = ({ resume, relevance }: ResumeProps) => {
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
      <Row className="ml-1 pt-2">
        <Col xs={12}>
          <h3>{name.value}</h3>
          <Card.Subtitle className="mb-2 text-muted">
            <i>{joinedPositions}</i>
          </Card.Subtitle>
          <hr />
        </Col>
      </Row>
      <Row className="pt-2">
        <Col xs={12} sm={6}>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
            <Card.Subtitle className="mb-2 text-muted">Summary</Card.Subtitle>
          </Col>
          <Col className="ml-1 pl-3 pr-1 mb-2" xs={12}>
            {summary.value}
          </Col>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
            <Card.Subtitle className="mb-2 mt-2 text-muted">
              <hr />
              Contacts
            </Card.Subtitle>
          </Col>
          <Col xs={12}>
            <Row className="pl-3 pr-1 ">
              {contacts.map((contact, index) => (
                <Col xs={12} className="p-1 border-0" key={index}>
                  <ContactEntry contact={contact} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
            <Card.Subtitle className="mb-3 mt-3 text-muted">
              <hr />
              Languages
            </Card.Subtitle>
          </Col>
          <Col xs={12}>
            {languages.map((language, index) => (
              <div className="pl-1 d-inline-flex" key={index}>
                <b>{language.code}</b>&nbsp;
                <i className="d-none d-sm-block">{language.level}</i>
              </div>
            ))}
          </Col>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
            <Card.Subtitle className="mb-3 mt-3 text-muted">
              <hr />
              Skills
            </Card.Subtitle>
          </Col>
          <Col xs={12}>
            {skills.map((skill, index) => (
              <div className="pl-1 d-inline-flex" key={index}>
                <b>{skill.name}</b>
                &nbsp;<i>({skill.level})</i>
              </div>
            ))}
          </Col>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
            <Card.Subtitle className="mb-3 mt-3 text-muted">
              <hr />
              Portfolio
            </Card.Subtitle>
          </Col>
          <Col xs={12} className="ml-1 pl-3">
            {showcase.map((show, index) => (
              <div
                className="pr-1 border-top-0 border-bottom-0 d-inline-flex"
                key={index}
              >
                {getIcon(show.type)}
                <a target="blank" className="ml-1 text-dark" href={show.url}>
                  {show.name}
                </a>
              </div>
            ))}
          </Col>
        </Col>
        <Col xs={12} sm={6}>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
          <hr className="d-sm-none d-xs-block" />  
            <Card.Subtitle className="mb-2 text-muted">Timeline</Card.Subtitle>
          </Col>
          <Col className="ml-1 pl-3 pr-1" xs={12}>
          {entries.map((entry, index) => {
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
                      " -> ".concat(
                        new Date(entry.toDate).toLocaleDateString()
                      )}
                  </p>
                  <p className="pl-4 ml-3">
                    {entry.name}&nbsp;@&nbsp;
                    {entry.type !== EntryType.CERTIFICATION ? (
                      <StandardEntry entry={entry} />
                    ) : (
                      <CertificationEntry entry={entry} />
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
        </Col>
      </Row>
    </Container>
  );
};

type ContactProps = {
  contact: Contact;
};

const ContactEntry = ({ contact }: ContactProps) => {
  return (
    contact && (
      <p className="m-0 text-truncate">
        <a
          title={contact.name}
          className="text-dark"
          target="blank"
          href={contact.url ? contact.url : "#"}
        >
          {getIcon(contact.type)}&nbsp;
          <span className="text-break">{contact.name}</span>
        </a>
      </p>
    )
  );
};

type EntryLinkProps = {
  entry: Entry;
};
const CertificationEntry = ({ entry }: EntryLinkProps) => {
  return (
    <>
      {entry.entity}
      &nbsp;&nbsp;
      {entry.reference.value && (
        <a className="text-dark" target="blank" href={entry.reference.value}>
          Reference
        </a>
      )}
    </>
  );
};

const StandardEntry = ({ entry }: EntryLinkProps) => {
  return (
    <>
      {entry.reference.value ? (
        <a className="text-dark" target="blank" href={entry.reference.value}>
          {entry.entity}
        </a>
      ) : (
        entry.entity
      )}
    </>
  );
};

export default CompactResume;
