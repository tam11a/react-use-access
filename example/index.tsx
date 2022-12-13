import * as React from "react";
import * as ReactDOM from "react-dom";
import { useTitle } from "../.";

const App = () => {
  useTitle("Package Boilarplate");
  return <div>Hello, From Package Example!!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
