import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlatResume from "./components/resumes/FlatResume/FlatResume";
import ColorfulResume from "./components/resumes/ColorfulResume/ColorfulResume";
import CompactResume from "./components/resumes/CompactResume/CompactResume";
import LeftRailResume from "./components/resumes/LeftRailResume/LeftRailResume";
//import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
    fetch("./data.json")
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
        <Switch>
          <Route exact path="./">
            <Redirect to="./flat" />
          </Route>
          <Route exact path="/flat">
            <Header format="flat-pdf"></Header>
            <div className="content">
              <FlatResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Route>
          <Route exact path="/colorful">
            <Header format="colorful-pdf"></Header>
            <div className="content">
              <ColorfulResume
                resume={resumeState.resume}
                relevance={Relevance.TRIVIAL}
              />
            </div>
          </Route>
          <Route exact path="/leftrail">
            <Header format="leftrail-pdf"></Header>
            <div className="content">
              <LeftRailResume
                resume={resumeState.resume}
                relevance={Relevance.STANDARD}
              />
            </div>
          </Route>
          <Route exact path="/compact">
            <Header format="compact-pdf"></Header>
            <div className="content">
              <CompactResume
                resume={resumeState.resume}
                relevance={Relevance.ESSENTIAL}
              />
            </div>
          </Route>
          <Route exact path="/compact-pdf">
            <CompactResumePDF
              resume={resumeState.resume}
              relevance={Relevance.ESSENTIAL}
            />
          </Route>
          <Route exact path="/colorful-pdf">
            <ColorfulResumePDF
              resume={resumeState.resume}
              relevance={Relevance.TRIVIAL}
            />
          </Route>
          <Route exact path="/leftrail-pdf">
            <LeftRailResumePDF
              resume={resumeState.resume}
              relevance={Relevance.STANDARD}
            />
          </Route>
          <Route exact path="/flat-pdf">
            <FlatResumePDF
              resume={resumeState.resume}
              relevance={Relevance.TRIVIAL}
            />
          </Route>
          <Route exact path="/about">
            <Header format=""></Header>
            <About resume={resumeState.resume} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
