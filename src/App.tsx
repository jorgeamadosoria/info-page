import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlatResume from "./components/resumes/FlatResume/FlatResume";
import ColorfulResume from "./components/resumes/ColorfulResume/ColorfulResume";
import Header from "./components/Header/Header";

import { Container } from "react-bootstrap";
import { RESUME_DEFAULT } from "./data/Resume";

function App() {
  const [appState, setAppState] = useState({
    resume: RESUME_DEFAULT,
  });

  useEffect(() => {
    fetch("data.json")
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((json) => {
        setAppState({ resume: json });
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
  }, [setAppState]);

  const getResume = (style: string) => {
    switch (style) {
      case "flat":
        return <FlatResume resume={appState.resume}></FlatResume>;
      case "colorful":
        return <ColorfulResume resume={appState.resume}></ColorfulResume>;
    }
  };

  return (
    <Container fluid>
      <Header></Header>
      <div className="content">{getResume("flat")}</div>
    </Container>
  );
}

export default App;
