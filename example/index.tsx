import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessProvider } from "../.";
import Example from "./Example";

const App = () => {
  return (
    <AccessProvider permissions={["showHello"]}>
      <Example />
    </AccessProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
