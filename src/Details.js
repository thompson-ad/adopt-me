import React from "react";

const Details = (props) => {
  return (
    <pre>
      {/* This will show you everything coming in from the router */}
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

export default Details;
