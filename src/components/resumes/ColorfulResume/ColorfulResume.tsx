import React from "react";
import "./ColorfulResume.css";
import type Resume from "../../../data/Resume";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import SocialType from "../../../data/enums/SocialType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCertificate,
  faEnvelope,
  faGraduationCap,
  faHandsHelping,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import EntryType from "../../../data/enums/EntryType";

const getIcon = (name: String) => {
  switch (name) {
    case "residence":
      return <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />;
    case "phone":
      return <FontAwesomeIcon icon={faWhatsapp} size="lg" />;
    case "email":
      return <FontAwesomeIcon icon={faEnvelope} size="lg" />;
    case SocialType.GITHUB:
      return <FontAwesomeIcon icon={faGithub} size="lg" />;
    case SocialType.FACEBOOK:
      return <FontAwesomeIcon icon={faFacebook} size="lg" />;
    case SocialType.LINKEDIN:
      return <FontAwesomeIcon icon={faLinkedin} size="lg" />;
    case EntryType.WORK:
      return <FontAwesomeIcon icon={faBriefcase} size="lg" />;
    case EntryType.EDUCATION:
      return <FontAwesomeIcon icon={faGraduationCap} size="lg" />;
    case EntryType.VOLUNTEERING:
      return <FontAwesomeIcon icon={faHandsHelping} size="lg" />;
    case EntryType.CERTIFICATION:
      return <FontAwesomeIcon icon={faCertificate} size="lg" />;
  }
};

type Props = {
  resume: Resume;
};

const ColorfulResume = ({ resume }: Props) => {
  const { summary, contacts, languages, skills, entries } = resume;

  if (!resume) return null;

  const sortedEntries = entries.sort((e1, e2) => {
    if (new Date(e2.fromDate).getTime() === new Date(e1.fromDate).getTime())
      return 0;
    if (new Date(e2.fromDate).getTime() > new Date(e1.fromDate).getTime())
      return 1;
    return -1;
  });

  const sortedSkills = skills.sort((e1, e2) => {
    return e2.level.localeCompare(e1.level);
  });

  const positions = summary.positions
    .map((position) => position.value)
    .join(", ");

  return (
    <Container fluid>
      <Row className="pt-2">
        <Col xs={12}>
          <h3>{summary.name.value}</h3>
          <Card.Subtitle className="mb-2 text-muted">
            <i>{positions}</i>
          </Card.Subtitle>
        </Col>
      </Row>
      <Row className="pt-2">
        <Col className="pl-3 pr-1" xs={5}>
          {summary.description.value}
        </Col>
        <Col
          className="border border-dark border-bottom-0 border-top-0 border-right-0"
          xs={4}
        >
          <Row className="pl-3 pr-1 ">
            {contacts.map((contact, index) => (
              <Col xs={6} className="p-1 border-0" key={index}>
                <p className="text-break">
                  {contact.url && (
                    <a className="text-dark" target="blank" href={contact.url}>
                      {getIcon(contact.type)} &nbsp;&nbsp;&nbsp;
                      <span className="text-break">{contact.name}</span>
                    </a>
                  )}
                  {!contact.url && (
                    <>
                      {getIcon(contact.type)} &nbsp;&nbsp;&nbsp;
                      <span className="text-break">{contact.name}</span>
                    </>
                  )}
                </p>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          className="pl-3 pr-1 border border-dark border-bottom-0 border-top-0 border-right-0"
          xs={2}
        >
          <ListGroup variant="flush">
            {languages.map((language, index) => (
              <ListGroup.Item className="p-0 border-bottom-0 " key={index}>
                <p className="text-break">
                  {language.code}&nbsp;&nbsp;
                  <i>({language.level})</i>
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <hr />
        </Col>
        {sortedSkills.map((skill, index) => (
          <Col xs={12} sm={6} md={4} lg={2} key={index}>
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
      {sortedEntries.map((entry, index) => {
        const refText =
          entry.type !== EntryType.CERTIFICATION ? entry.reference.value : null;

        return (
          <Row key={index} className="ml-3">
            <Col
              xs={12}
              className="pb-0 border border-dark border-bottom-0 border-top-0 border-right-0"
            >
              <div className="position-relative mx-auto timeline-icon border p-2 border-dark">
                {getIcon(entry.type)}
              </div>

              <p className="mt-2">
                {new Date(entry.fromDate).toLocaleDateString()}
                {entry.toDate &&
                  " -> ".concat(new Date(entry.toDate).toLocaleDateString())}
              </p>
              <p className="pl-4">
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
    </Container>
  );
};

export default ColorfulResume;
