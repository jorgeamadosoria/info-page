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
  flatStyles,
  mb,
  ml,
  mt,
  mr,
  fontSize,
  join,
  pl,
  pr,
  pt,
  pb,
  round,
  p,
  w,
  pos,
  h,
  centerItems,
  z,
  bb,
  bl,
  bg,
  b,
  color,
  left,
  top,
  bt,
} from "./PDFUtils";
import { isSocialType } from "../../data/enums/SocialType";
import ShowCaseType from "../../data/enums/ShowCaseType";

// Create styles
const styles = StyleSheet.create(flatStyles());

const FlatResumePDF = ({ resume, relevance }: ResumeProps) => {
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
    <PDFViewer width="100%" height="1000" style={styles.pos}>
      <Document>
        <Page size="A4" style={join(p(15), pt(35), pb(35))}>
          <View style={fontSize(30)}>
            <Text>{name.value}</Text>
            <Text style={fontSize(12)}>{joinedPositions}</Text>
          </View>
          <View style={join(bb("black", 4), mt(4), mb(4))}></View>
          <View style={mb(10)}>
            <Text>{summary.value}</Text>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.flexGrow}>
              {contacts.map((contact, index) => (
                <View style={ml(24)}>
                  <View
                    style={join(
                      left(-30),
                      bg("white"),
                      pos("absolute"),
                      centerItems(),
                      z(1000),
                      h(30),
                      w(30),
                      mr(20),
                      pt(6),
                      pl(5)
                    )}
                  >
                    {getIcon(contact.type)}
                  </View>
                  <Text style={join(mt(4), mb(4))} key={index}>
                    {contact.url ? (
                      <Link style={color("black")} src={contact.url}>
                        <Text>{contact.name}</Text>
                        {isSocialType(contact.type) && (
                          <Text style={fontSize(10)}>
                            &nbsp;&nbsp;{contact.url}
                          </Text>
                        )}
                      </Link>
                    ) : (
                      <Text>{contact.name}</Text>
                    )}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.flexGrow}>
              {languages.map((language, index) => (
                <Text style={join(mt(4), mb(4))} key={index}>
                  {language.code}&nbsp;
                  <Text style={fontSize(10)}>{language.level}</Text>
                </Text>
              ))}
            </View>
          </View>
          <View style={join(bb("lightgrey", 1), mt(4), mb(4))}></View>
          <View
            style={join(
              styles.sectionSkillContainer,
              styles.flexWrap,
              styles.alignFlexStart,
              styles.justifySpaceBetween,
              styles.flexRow,
              fontSize(18)
            )}
          >
            {skills.map((skill, index) => (
              <View style={w(181)} key={index}>
                <Text>
                  <Text>{skill.name}</Text>
                  <Text style={fontSize(10)}>&nbsp;({skill.level})</Text>
                </Text>
              </View>
            ))}
          </View>
          <View style={join(bb("lightgrey", 1), mt(4), mb(4))}></View>
          <View style={join(bl("black", 2), pl(10), pr(10), mt(5), ml(10))}>
            {entries.map((entry, index) => {
              return (
                <View wrap={false} key={index}>
                  <View
                    style={join(
                      left(-26),
                      b("black", 1),
                      bg("white"),
                      centerItems(),
                      z(1000),
                      pos("absolute"),
                      h(30),
                      w(30),
                      round(),
                      pt(6),
                      pl(3)
                    )}
                  >
                    {getIcon(entry.type)}
                  </View>
                  <Text style={join(mt(6), ml(10))}>
                    {new Date(entry.fromDate).toLocaleDateString()}
                    {entry.toDate &&
                      " -> ".concat(
                        new Date(entry.toDate).toLocaleDateString()
                      )}
                  </Text>
                  <Text style={ml(10)}>
                    {entry.name}&nbsp;@&nbsp;
                    {entry.type !== EntryType.CERTIFICATION ? (
                      <Text style={ml(10)}>
                        {entry.reference.value ? (
                          <Link src={entry.reference.value}>
                            {entry.entity}
                          </Link>
                        ) : (
                          entry.entity
                        )}
                      </Text>
                    ) : (
                      <Text style={ml(10)}>{entry.entity}</Text>
                    )}
                  </Text>
                  <Text style={join(ml(10), mt(2), fontSize(15))}>
                    {entry.description.value}
                  </Text>
                  {entry.type === EntryType.CERTIFICATION &&
                    entry.reference.value && (
                      <Link
                        style={join(
                          color("black"),
                          ml(10),
                          mt(2),
                          fontSize(15)
                        )}
                        src={entry.reference.value}
                      >
                        <Text>Reference</Text>
                      </Link>
                    )}
                  <View style={join(w(400), mt(6), mb(6))}></View>
                </View>
              );
            })}
          </View>
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
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default FlatResumePDF;
