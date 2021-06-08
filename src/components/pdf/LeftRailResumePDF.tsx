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
} from "./PDFUtils";
import { isSocialType } from "../../data/enums/SocialType";

// Create styles
const styles = StyleSheet.create(flatStyles());

const LeftRailResumePDF = ({ resume, relevance }: ResumeProps) => {
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
        <Page size="A4" style={join(styles.flexRow)}>
          <View
            style={join(pt(35), mr(15), h(841), bg("#6c757d"), color("white"))}
          >
            <View style={join(pl(10), pr(5))}>
              <Text style={fontSize(18)}>{name.value}</Text>
              <Text style={join(fontSize(10), pl(5), mb(6))}>
                {joinedPositions}
              </Text>
            </View>
            <View
              style={join(
                fontSize(15),
                mt(38),
                bg("black"),
                color("white"),
                p(4)
              )}
            >
              <Text style={(mt(10), pl(5))}>Contact Info</Text>
            </View>
            <View>
              {contacts.map((contact, index) => (
                <View style={ml(32)}>
                  <View
                    style={join(
                      left(-30),
                      pos("absolute"),
                      centerItems(),
                      z(1000),
                      h(30),
                      mr(20),
                      pb(10),
                      pt(6),
                      pl(5)
                    )}
                  >
                    {getIcon(contact.type, "white")}
                  </View>
                  <Text style={join(fontSize(12), mt(4), mb(4))} key={index}>
                    {contact.url ? (
                      <Link style={color("white")} src={contact.url}>
                        {isSocialType(contact.type) ? (
                          <Text>{contact.url}</Text>
                        ) : (
                          <Text>{contact.name}</Text>
                        )}
                      </Link>
                    ) : (
                      <Text>{contact.name}</Text>
                    )}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={join(
                fontSize(15),
                bg("black"),
                color("white"),
                mt(10),
                p(4)
              )}
            >
              <Text style={pl(5)}>Languages</Text>
            </View>
            <View style={ml(10)}>
              {languages.map((language, index) => (
                <Text style={join(fontSize(15), mt(4), mb(4))} key={index}>
                  {language.code}&nbsp;
                  <Text style={fontSize(10)}>{language.level}</Text>
                </Text>
              ))}
            </View>
            <View
              style={join(
                fontSize(15),
                bg("black"),
                color("white"),
                pl(32),
                p(4)
              )}
            >
              <Text style={(mt(10), pl(5))}>Skills</Text>
            </View>
            <View
              style={join(
                pl(8),
                styles.sectionSkillContainer,
                styles.alignFlexStart,
                styles.justifySpaceBetween
              )}
            >
              {skills.map((skill, index) => (
                <View style={join(fontSize(15), mt(4), mb(4))} key={index}>
                  <Text>
                    <Text>{skill.name}</Text>
                    <Text style={fontSize(10)}>&nbsp;({skill.level})</Text>
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Right rail */}
          <View
            style={join(pt(35), pr(5), mr(15), h(841), styles.flexGrow, ml(10))}
          >
            <View style={join(mt(5), mb(10))}>
              <Text style={fontSize(12)}>{summary.value}</Text>
            </View>

            <View style={join(bb("lightgrey", 1), mt(4), mb(4))}></View>
            <View>
              <Text style={join(fontSize(15), mt(1), mb(1))}>
                Professional Timeline
              </Text>
            </View>
            <View style={join(bb("lightgrey", 1), mt(4), mb(4))}></View>
            <View style={join(bl("black", 2), pl(10), pr(10), mt(5), ml(10))}>
              {entries.map((entry, index) => {
                return (
                  <View key={index}>
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
                    <Text style={join(fontSize(12), mt(8), ml(10), pb(10))}>
                      {new Date(entry.fromDate).toLocaleDateString()}
                      {entry.toDate &&
                        " -> ".concat(
                          new Date(entry.toDate).toLocaleDateString()
                        )}
                    </Text>
                    <Text style={join(fontSize(15), ml(10), pb(10))}>
                      {entry.name}
                    </Text>
                    <Text style={join(fontSize(12), ml(10), pb(10))}>
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
                        <Text style={ml(10)}>
                          {entry.entity}
                          &nbsp;&nbsp;
                          {entry.reference.value && (
                            <Link src={entry.reference.value}>Reference</Link>
                          )}
                        </Text>
                      )}
                    </Text>
                    <Text style={join(ml(10), mt(2), fontSize(12))}>
                      {entry.description.value}
                    </Text>
                    <View style={join(mt(6), mb(6))}></View>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default LeftRailResumePDF;
