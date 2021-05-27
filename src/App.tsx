import React, { useEffect, useState } from "react";
import "./App.css";
import FlatResume from "./components/FlatResume/FlatResume";

function App() {
  const [appState, setAppState] = useState({
    resume: undefined,
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

  return (
    <div className="App">
      <FlatResume resume={appState.resume}></FlatResume>
    </div>
  );
}

export default App;
