import React = require("react");
import { AccessMargin, useAccessContext } from "../.";

const Example = () => {
  const { permissions, addPermissions } = useAccessContext();
  console.log(permissions);
  return (
    <>
      Permissions: {permissions?.map?.(p => p)}
      <button onClick={() => addPermissions("showHello1")}>Add Now</button>
      <AccessMargin to={"showHello1"} defaultFallback>
        hello world
      </AccessMargin>
    </>
  );
};

export default Example;
