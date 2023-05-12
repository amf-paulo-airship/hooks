import { useState, Suspense } from "react";
import "./App.css";
import Loading from "./ignore/Loading";
import Error from "./ignore/Error";
import AppErrorBoundary from "./ignore/AppErrorBoundery";

import NewCard from "./relevant/NewCard";
import Card from "./relevant/Card";

const types = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

export const App = () => {
  const [selectedType, setSelectedType] = useState("education");

  return (
    <>
      <h4 style={{ color: "darkgrey" }}>
        <u>I am bored...What can I do?</u>
      </h4>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <Card type={selectedType} />

      <AppErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <NewCard type={selectedType} shouldIfetch />
        </Suspense>
      </AppErrorBoundary>
    </>
  );
};

export default App;
