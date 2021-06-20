import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlatResume from "./components/resumes/FlatResume/FlatResume";
import ColorfulResume from "./components/resumes/ColorfulResume/ColorfulResume";
import CompactResume from "./components/resumes/CompactResume/CompactResume";
import LeftRailResume from "./components/resumes/LeftRailResume/LeftRailResume";
//import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Relevance from "./data/enums/Relevance";
import Resume from "./data/Resume";
import CompactResumePDF from "./components/pdf/CompactResumePDF";
import ColorfulResumePDF from "./components/pdf/ColorfulResumePDF";
import FlatResumePDF from "./components/pdf/FlatResumePDF";
import LeftRailResumePDF from "./components/pdf/LeftRailResumePDF";
import { About } from "./components/About/About";

function App(props: any) {
  const [resumeState, setResumeState] = useState({ resume: new Resume() });
  useEffect(() => {
    fetch("/data.json")
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((json) => {
        setResumeState({
          resume: new Resume(json),
        });
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
  }, []);

  return (
    <Container fluid>
      <Router>
        <Header format="colorful-pdf"></Header>
        <div className="content">
          <Switch>
            <Route path="/flat">
              <FlatResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </Route>
            <Route path="/colorful">
              <ColorfulResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </Route>
            <Route path="/leftrail">
              <LeftRailResume
                resume={resumeState.resume}
                relevance={Relevance.STANDARD}
              />
            </Route>
            <Route path="/compact">
              <CompactResume
                resume={resumeState.resume}
                relevance={Relevance.ESSENTIAL}
              />
            </Route>
            <Route path="/compact-pdf">
              <CompactResumePDF
                resume={resumeState.resume}
                relevance={Relevance.ESSENTIAL}
              />
            </Route>
            <Route path="/colorful-pdf">
              <ColorfulResumePDF
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </Route>
            <Route path="/leftrail-pdf">
              <LeftRailResumePDF
                resume={resumeState.resume}
                relevance={Relevance.STANDARD}
              />
            </Route>
            <Route path="/flat-pdf">
              <FlatResumePDF
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </Route>
            <Route path="/about">
              <About resume={resumeState.resume} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
