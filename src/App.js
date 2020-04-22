import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      "Adopt Me!",
      React.createElement(Pet, { name: "luna", breed: "havanese" }),
      React.createElement(Pet, { name: "Pepper", breed: "budgie" }),
      React.createElement(Pet, { name: "Benson", breed: "boxer" })
    )
  );
};

render(React.createElement(App), document.getElementById("root"));
