import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  PDFViewer,
} from "@react-pdf/renderer";
import { ResumeProps } from "../resumes/ResumeUtils";
import EntryType from "../../data/enums/EntryType";
import {
  getIcon,
  mb,
  ml,
  mt,
  mr,
  fontSize,
  join,
  pl,
  pr,
  pt,
  round,
  w,
  pos,
  h,
  centerItems,
  z,
  bb,
  bg,
  b,
  color,
  left,
  top,
  bt,
} from "./PDFUtils";
import ShowCaseType from "../../data/enums/ShowCaseType";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ColorfulResumePDF = ({ resume, relevance }: ResumeProps) => {
  const {
    name,
    positions,
    showcase,
    summary,
    contacts,
    languages,
    skills,
    entries,
  } = resume.prepareResume(relevance);
  const joinedPositions = positions
    .map((position) => position.value)
    .join(", ");

  return (
    <PDFViewer
      width="100%"
      height="1000"
      style={{ top: "40px", position: "relative" }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{name.value}</Text>
            <Text>
              <i>{joinedPositions}</i>
            </Text>
            <Text>{summary.value}</Text>
            {contacts.map((contact, index) => (
              <Text key={index}>
                {contact.url && <Link src={contact.url}>{contact.name}</Link>}
                {!contact.url && <Text>{contact.name}</Text>}
              </Text>
            ))}
            {languages.map((language, index) => (
              <Text key={index}>
                {language.code}&nbsp;
                {language.level}
              </Text>
            ))}
            {skills.map((skill, index) => (
              <Text key={index}>
                {skill.name}
                &nbsp;({skill.level})
              </Text>
            ))}
            {entries.map((entry, index) => {
              return (
                <Text key={index}>
                  {new Date(entry.fromDate).toLocaleDateString()}
                  {entry.toDate &&
                    " -> ".concat(new Date(entry.toDate).toLocaleDateString())}
                  {entry.name}&nbsp;@&nbsp;
                  {entry.type !== EntryType.CERTIFICATION ? (
                    <Text>
                      {entry.reference.value ? (
                        <Link src={entry.reference.value}>{entry.entity}</Link>
                      ) : (
                        entry.entity
                      )}
                    </Text>
                  ) : (
                    <Text>
                      {entry.entity}
                      &nbsp;&nbsp;
                      {entry.reference.value && (
                        <Link src={entry.reference.value}>Reference</Link>
                      )}
                    </Text>
                  )}
                  {entry.description.value}
                </Text>
              );
            })}

            <View style={join(bb("lightgrey", 1), mt(4), mb(4))}></View>
            <View style={join(pl(10), pr(10), mt(5), ml(10))}>
              {showcase.map((show, index) => (
                <View
                  style={join(
                    pl(1),
                    mt(10),
                    mb(10),
                    pr(1),
                    b("black", 0),
                    bt("black", 1),
                    pt(15)
                  )}
                  key={index}
                >
                  <View
                    style={join(
                      left("45%"),
                      top(-14),
                      b("black", 1),
                      round(),
                      bg("white"),
                      pos("absolute"),
                      centerItems(),
                      z(1000),
                      h(30),
                      w(30),
                      mr(20),
                      pl(show.type === ShowCaseType.APP ? 9 : 4),
                      pt(6)
                    )}
                  >
                    {getIcon(show.type)}
                  </View>
                  <Link style={color("black")} src={show.url}>
                    <Text>{show.name}</Text>
                  </Link>
                  <Text style={fontSize(15)}>{show.description}</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ColorfulResumePDF;
