import React from "react";
import {
  Document,
  Page,
  Text,
  View,
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
  flexGrow,
  join,
  pl,
  pr,
  pt,
  pb,
  round,
  rRight,
  p,
  bgEnum,
  flexRow,
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
  flexWrap,
  alignFlexStart,
  justifySpaceBetween,
} from "./PDFUtils";
import { isSocialType } from "../../data/enums/SocialType";
import ShowCaseType from "../../data/enums/ShowCaseType";
import IconColor from "../../data/enums/IconColor";

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
    <PDFViewer width="100%" height="1000">
      <Document>
        <Page size="A4">
          <View
            render={({ pageNumber }) =>
              pageNumber !== 1 && <View style={join(pt(35))} />
            }
            fixed
          />
          <View
            style={join(
              bg("lightblue"),
              pb(5),
              pt(20),
              pl(15),
              pr(15),
              fontSize(30)
            )}
          >
            <Text>{name.value}</Text>
            <Text style={fontSize(12)}>{joinedPositions}</Text>
          </View>
          <View style={join(bb("black", 4), mb(4))}></View>
          <View style={join(pl(15), pr(15), mb(10))}>
            <Text>{summary.value}</Text>
          </View>
          <View style={join(pl(15), pr(15), flexRow())}>
            <View style={flexGrow()}>
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
                    {getIcon(contact.type, IconColor.COLOR)}
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
            <View style={flexGrow()}>
              {languages.map((language, index) => (
                <View
                  style={join(
                    w(140),
                    bg("#a7d5dd"),
                    round(),
                    centerItems(),
                    p(4),
                    ml(4),
                    mb(3),
                    pl(8)
                  )}
                  key={index}
                >
                  <Text>{language.code}</Text>
                  <Text style={fontSize(10)}>{language.level}</Text>
                </View>
              ))}
            </View>
          </View>
          <View
            style={join(bb("lightgrey", 1), ml(15), mr(15), mt(15), mb(10))}
          ></View>
          <View
            style={join(
              pl(15),
              pr(15),
              flexWrap(),
              alignFlexStart(),
              justifySpaceBetween(),
              flexRow(),
              fontSize(18)
            )}
          >
            {skills.map((skill, index) => (
              <View
                style={join(
                  w(120),
                  bg("#a7d5dd"),
                  round(),
                  centerItems(),
                  p(4),
                  ml(4),
                  mb(3),
                  pl(8)
                )}
                key={index}
              >
                <Text>{skill.name}</Text>
                <Text style={fontSize(10)}>&nbsp;({skill.level})</Text>
              </View>
            ))}
          </View>
          <View
            style={join(bb("lightgrey", 1), ml(15), mr(15), mt(15), mb(10))}
          ></View>
          <View style={join(bl("black", 2), ml(20), pr(10), mt(5))}>
            {entries.map((entry, index) => {
              return (
                <View
                  style={join(
                    mb(2),
                    rRight(25),
                    b("black", 1),
                    bl("black", 0),
                    pb(8),
                    mb(5),
                    bgEnum(entry.type)
                  )}
                  wrap={false}
                  key={index}
                >
                  <View
                    style={join(
                      bgEnum(entry.type),
                      left(-16),
                      top(10),
                      b("black", 1),
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
                    {getIcon(entry.type, IconColor.COLOR)}
                  </View>
                  <Text style={join(mt(6), ml(18))}>
                    {new Date(entry.fromDate).toLocaleDateString()}
                    {entry.toDate &&
                      " -> ".concat(
                        new Date(entry.toDate).toLocaleDateString()
                      )}
                  </Text>
                  <Text style={ml(18)}>
                    {entry.name}&nbsp;@&nbsp;
                    {entry.type !== EntryType.CERTIFICATION ? (
                      <Text style={ml(18)}>
                        {entry.reference.value ? (
                          <Link src={entry.reference.value}>
                            {entry.entity}
                          </Link>
                        ) : (
                          entry.entity
                        )}
                      </Text>
                    ) : (
                      <Text style={ml(14)}>{entry.entity}</Text>
                    )}
                  </Text>
                  <Text style={join(ml(18), mt(2), mr(15), fontSize(15))}>
                    {entry.description.value}
                  </Text>
                  {entry.type === EntryType.CERTIFICATION &&
                    entry.reference.value && (
                      <Link
                        style={join(
                          color("black"),
                          ml(18),
                          mt(2),
                          fontSize(15)
                        )}
                        src={entry.reference.value}
                      >
                        <Text>Reference</Text>
                      </Link>
                    )}
                </View>
              );
            })}
          </View>
          <View
            style={join(bb("lightgrey", 1), ml(15), mr(15), mt(15), mb(10))}
          ></View>
          <View style={join(mt(5), ml(12), mb(12))}>
            {showcase.map((show, index) => (
              <View
                style={join(
                  bgEnum(show.type),
                  pl(1),
                  round(10),
                  mt(10),
                  ml(10),
                  mr(10),
                  mb(10),
                  pr(1),
                  b("black", 1),
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
                    bgEnum(show.type),
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
                  {getIcon(show.type, IconColor.COLOR)}
                </View>
                <Link style={color("black")} src={show.url}>
                  <Text style={pl(5)}>{show.name}</Text>
                </Link>
                <Text style={join(pl(5), pb(5), fontSize(15))}>
                  {show.description}
                </Text>
              </View>
            ))}
          </View>
          <Text style={join(p(15), pb(35))} fixed />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ColorfulResumePDF;
