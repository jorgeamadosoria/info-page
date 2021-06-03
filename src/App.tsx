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

function App() {
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
    <Router>
      <Switch>
        <Route path="/flat">
          <Container fluid>
            <Header format="flat-pdf"></Header>
            <div className="content">
              <FlatResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Container>
        </Route>
        <Route path="/colorful">
          <Container fluid>
            <Header format="colorful-pdf"></Header>
            <div className="content">
              <ColorfulResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Container>
        </Route>
        <Route path="/leftrail">
          <Container fluid>
            <Header format="leftrail-pdf"></Header>
            <div className="content">
              <LeftRailResume
                resume={resumeState.resume}
                relevance={Relevance.STANDARD}
              />
            </div>
          </Container>
        </Route>
        <Route path="/compact">
          <Container fluid>
            <Header format="compact-pdf"></Header>
            <div className="content">
              <CompactResume
                resume={resumeState.resume}
                relevance={Relevance.ESSENTIAL}
              />
            </div>
          </Container>
        </Route>
        <Route path="/compact-pdf">
          <Container fluid>
            <div className="content">
              <CompactResumePDF
                resume={resumeState.resume}
                relevance={Relevance.ESSENTIAL}
              />
            </div>
          </Container>
        </Route>
        <Route path="/colorful-pdf">
          <Container fluid>
            <div className="content">
              <ColorfulResumePDF
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Container>
        </Route>
        <Route path="/leftrail-pdf">
          <Container fluid>
            <div className="content">
              <LeftRailResumePDF
                resume={resumeState.resume}
                relevance={Relevance.STANDARD}
              />
            </div>
          </Container>
        </Route>
        <Route path="/flat-pdf">
          <Container fluid>
            <div className="content">
              <FlatResumePDF
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
